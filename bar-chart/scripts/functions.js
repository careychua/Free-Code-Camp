function setHeader(header) {
    document.getElementById(TITLE).innerHTML = "<h1>" + header + "</h1>";
}

function setFooter(prefix = EMPTY_STR, link, suffix = EMPTY_STR) {
    document.getElementById(FOOTER).innerHTML = "<a href=" + link + ">" + prefix + link + suffix + "</a>";
}

function plotChart(chartId, dataArr) {
    const dataset = dataArr;
    createCanvas(chartId, dataset);
}

function createCanvas(chartId, dataArr){
    let dataset = dataArr;
    let chartDim = document.getElementById(chartId).getBoundingClientRect().toJSON();
    let svgDim = {};

    for (let key in chartDim) {
        if (dimProps.includes(key)) {
            svgDim[key] = Math.floor(chartDim[key]);
        }
    }
    
    let svg = d3.select(HASH + chartId)
        .append("svg")
            .attr("id", chartId + DASH + SVG)
            .attr("x", svgDim.x)
            .attr("y", svgDim.y)
            .attr("width", svgDim.width)
            .attr("height", svgDim.height);
    
    createAxes(svg, dataset);
}

function createAxes(canvas, dataArr) {
    let svg = canvas;
    let dataset = dataArr;

    let svgObj = appendScale(svg, "x", dataset);
    svgObj = appendScale(svgObj.svg, "y", dataset);
    svg = svgObj.svg;
    let scaleY = svgObj.scale;
    let height = svgObj.height;
    let width = svgObj.width;
    plotBars(svg, dataset, scaleY, width, height);
}

function appendScale(canvas, type, dataArr) {
    let svg = canvas;
    let dataset = dataArr;

    let svgNode = svg.node();
    let svgSelector = $(HASH + svgNode.id);
    let svgWidth  = svgSelector.attr("width");
    let svgHeight  = svgSelector.attr("height");
    let datasetX = dataset.map(data => data[0]);
    let datasetY = dataset.map(data => data[1]);
    const scale = d3.scaleLinear();
    let axis = null;
    let translateX = 0;
    let translateY = 0;

    switch(type) {
        case X:
            let dataX = datasetX.map(data => parseInt(data.split(DASH)[0]));
            let domainMin = d3.min(dataX);
            let domainMax = d3.max(dataX) + 1;
            scale
                .domain([domainMin, domainMax])
                .range([padding, svgWidth - padding * 3]);
            axis = d3.axisBottom(scale);
            axis.tickFormat((data) => data.toString());
            translateY = svgHeight - padding;
            break;
            

        case Y:            
            scale
                .domain([0, d3.max(datasetY)])
                .range([svgHeight - padding, padding]);
            axis = d3.axisLeft(scale);
            translateX = padding;
            break;
    }

    let translate = `translate(${ translateX }, ${ translateY })`;
    svg.append("g")
        .attr("transform", translate)
        .attr("id", type + DASH + AXIS)
        .call(axis);

    return { 
        svg: svg, 
        scale: scale,
        height: svgHeight,
        width: svgWidth
    };
}

function plotBars(canvas, dataArr, scaleY, width, height) {
    let svg = canvas;
    let svgBottom = parseInt(height) - padding;
    let dataset = dataArr;
    let barWidth = (width - padding * 4) / dataset.length;
    let div = d3.select("body").append("div")	
        .attr("id", TOOLTIP)
        .attr("class", tooltipClass)				
        .style("opacity", opacityHidden);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
            .attr("x", (data, index) => padding + index * barWidth)
            .attr("data-date", data => data[0])
            .attr("y", data => scaleY(data[1]))
            .attr("data-gdp", data => data[1])
            .attr("width", data => barWidth)
            .attr("height", data => svgBottom - scaleY(data[1]))
            .attr("fill", barColour)
            .attr("class", barClass)
            .on("mouseover", function(data) {
                let x = event.explicitOriginalTarget.x.baseVal.value
                let dataset = event.explicitOriginalTarget.dataset;
                let dateArr = dataset.date.split(DASH)
                let date = dateArr[0];
                let quarter = quarterConvert[dateArr[1]];
                let gdp = DOLLAR + dataset.gdp + gdpSuffix;
                div
                    .transition()		
                    .duration(mouseoverDuration)		
                    .style("opacity", opacityVisible);		
                div
                    .text(date + quarterPrefix + quarter + LINE_BREAK + gdp)
                    .style("left", (x + barWidth + 10) + "px")
                    .style("top", (svgBottom - padding * 2) + "px")
                    .attr("data-date", dataset.date)
                    .attr("data-gdp", dataset.gdp);
                })					
            .on("mouseout", function(d) {		
                div.transition()		
                    .duration(mouseoutDuration)		
                    .style("opacity", opacityHidden);	
            });        
}

