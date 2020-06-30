function setHeader(headerId, headerVal) {
    let innerHTML = EMPTY_STR;
    headerVal.map(data => {
        innerHTML += `<${ data.size }>${ data.text }</${ data.size }>`;
    });
    document.getElementById(headerId).innerHTML = innerHTML;
}

function setGraph(graphId, dataset) {
    createCanvas(graphId, dataset);
}

function createCanvas(graphId, dataset) {
    let svg = d3.select('div#graph')
        .append('svg')
        .attr('id', graphId + svgSuffix);
    svg = addLegend(svg);
    createAxes(svg, dataset);
}

function addLegend(svg) {
    let svgDim = document.getElementById(svg.node().id).getBoundingClientRect().toJSON();
    let svgWidth = svgDim.width;

    svg.append('g')
        .attr('id', legendId)
        .selectAll('rect')
        .data(legendProps)
        .enter()
        .append('rect')
            .attr('class', data => data.legendClasses)
            .attr('x', svgWidth - legendOffsetRight)
            .attr('y', (data, index) => legendOffsetTop + index * legendWidth * 1.5)
            .attr('width', legendWidth)
            .attr('height', legendHeight)
    svg.select('g').selectAll('text')
        .data(legendProps)
        .enter()
        .append('text')
        .attr('x', svgWidth - legendOffsetRight + legendWidth * 1.5)
        .attr('y', (data, index) => legendOffsetTop + index * legendHeight * 1.5 + legendHeight / 1.5)
            .text(data => data.label)

    return svg;
}

function createAxes(svg, dataset) {
    let svgObj = appendAxis(X, svg, dataset);
    svg = svgObj.svg;
    let scaleX = svgObj.scale;
    svgObj = appendAxis(Y, svg, dataset);
    svg = svgObj.svg;
    let scaleY = svgObj.scale;

    plotPoints(svg, dataset, scaleX, scaleY);
}

function appendAxis(type, svg, dataset) {
    let svgDim = document.getElementById(svg.node().id).getBoundingClientRect().toJSON();
    let width = svgDim.width;
    let height = svgDim.height;
    let scale = d3.scaleLinear();
    let axis = null;
    let translateX = 0;
    let translateY = 0;

    switch(type) {
        case X:
            let datasetX = dataset.map(data => data.year);
            scale
                .domain([d3.min(datasetX) - 1, d3.max(datasetX) + 1])
                .range([paddingSides, width - paddingSides]);
            axis = d3.axisBottom(scale);
            axis.tickFormat(data => data.toString());
            translateY = height - paddingBottom;
            break;

        case Y:
            let datasetY = dataset.map(data => data.seconds);
            let yLabelX = (paddingSides / 2) - 20;
            let yLabelY = height / 2;
            let rotateYAxisLabel = `rotate(${ rotateAngle } ${ yLabelX } ${ yLabelY })`;
            svg.append('text')
                .attr('id', Y + axisLabelSuffix)
                .attr('x', yLabelX)
                .attr('y', yLabelY)
                .attr('transform', rotateYAxisLabel)
                .text(dopeGraphYAxisLabelText)
            scale
                .domain([d3.min(datasetY), d3.max(datasetY)])
                .range([paddingTop, height - paddingBottom]);
            axis = d3.axisLeft(scale);
            axis.tickFormat(data => {
                let min = Math.floor(data / 60);
                let sec = data % 60;
                sec < 10 ? sec = STR_0 + sec.toString() : sec;
                return `${ min }:${ sec }`;
            });
            translateX = paddingSides;
            break;
    }

    let translate = `translate(${ translateX }, ${ translateY })`;
    svg.append('g')
        .attr("transform", translate)
        .attr('id', type + axisSuffix)
        .call(axis)

    return {
        svg: svg,
        scale: scale
    };
}

function plotPoints(svg, dataset, scaleX, scaleY) {
    let div = d3.select('body').append('div')	
        .attr('id', tooltipId)
        .attr('class', tooltipId)				
        .style('opacity', opacityHidden)
        .style('left', 0)
        .style('top', 0)

    svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
            .attr('id', pointId)
            .attr('class', data => data.doping == EMPTY_STR ? dotPassClasses : dotFailClasses)
            .attr('cx', data => scaleX(data.year))
            .attr('cy', data => scaleY(data.seconds))
            .attr('r', `${ pointRadius }px`)
            .attr('data-xvalue', data => data.year)
            .attr('data-yvalue', data => {
                let timeArr = data.time.split(SEMI_COLON);
                let time = new Date();
                time.setMinutes(timeArr[0], timeArr[1]);
                return time;
            })
            .on("mouseover", function(data) {
                console.log("mouseover", event);
                let x = event.x;
                let y = event.y;
                
                let text = `${ data.name }: ${ data.nationality }\nYear: ${ data.year }, Time: ${ data.time }`;
                data.doping != EMPTY_STR ? text += `\n\n${ data.doping }`: text;

                div
                    .transition()		
                    .duration(mouseoverDuration)		
                    .style('opacity', opacityVisible);		
                div
                    .text(text)
                    .style('left', `${ x + 10 }px`)
                    .style('top', `${ y - 10 }px`)
                    .attr('data-year', data.year)
                })					
                .on("mouseout", function(d) {		
                    div.transition()		
                        .duration(mouseoutDuration)		
                        .style('opacity', opacityHidden);
                });        
}