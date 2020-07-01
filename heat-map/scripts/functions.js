function setTooltip(inputId) {
    let id = inputId;

    let div = d3.select("body").append("div")
        .attr("id", id)
        .attr("class", id)
        .style("opacity", opacityHidden)
        .style("left", 0)
        .style("top", 0)
    return div;
}

function setHeader(headerId, headerVal, dataset) {
    let innerHTML = EMPTY_STR;
    minYear = d3.min(dataset.map(data => data.year));
    maxYear = d3.max(dataset.map(data => data.year));
    headerVal.map(data => {
        data.text == EMPTY_STR ? data.text = `${ minYear } - ${ maxYear }: base temperature ${ G_baseTemperature }&degC`: data.text; 
        innerHTML += `<${ data.size } id="${ data.id }">${ data.text }</${ data.size }>`;
    });
    document.getElementById(headerId).innerHTML = innerHTML;
}

function setLegend(inputId, inputDataset) {
    let id = inputId;
    let dataset = inputDataset;
    let datasetTemp = dataset.map(data => G_baseTemperature + data.variance);
    let tempArr = tempData.map(data => data.temp.toString());

    let svg = d3.select(`#${ id }`)
        .append("svg")
            .attr("id", `${ id }-svg`);

    let svgDim = document.getElementById(`${ id }-svg`).getBoundingClientRect().toJSON();
    let scale = d3.scaleLinear()
        .domain([d3.min(datasetTemp), d3.max(datasetTemp)])
        .range([legendPadding, svgDim.width - legendPadding])
    
    let axis = d3.axisBottom(scale)
        .tickFormat(data => data.toString())
        .tickValues(tempArr.map(data => {
            return data - Math.floor(data) == 0 ? `${ data }.0` : data
        }));

    let translateY = 40;

    svg.append("g")
        .attr("id", `${ id }-scale`)
        .attr("transform", `translate(0, ${ translateY })`)
        .call(axis);

    createLegendBlocks(id, svg, translateY);
}

function createLegendBlocks(inputId, inputSvg, inputTranslateY) {
    let id = inputId;
    let svg = inputSvg;
    let translateY = inputTranslateY;

    let svgDim = document.getElementById(`${ id }-svg`).getBoundingClientRect().toJSON();
    let blockWidth = (svgDim.width - legendPadding * 2) / (tempData.length +  1);
    let blockheight = blockWidth / 2;

    svg.selectAll("rect")
        .data([...tempData, {classes: "temp t-max"}])
        .enter()
        .append("rect")
            .attr("class", data => `temp ${ data.classes }`)
            .attr("x", (data, index) => legendPadding + blockWidth * index)
            .attr("y", 0 + translateY - blockheight)
            .attr("height", blockheight)
            .attr("width", blockWidth);
}

function setGraph(graphId, inputDataset) {
    let id = graphId;
    let idSelector = `#${ id }`;
    let svgId = `${ id }-svg`;
    let dataset = inputDataset;

    let svg = d3.select(idSelector)
        .append("svg")
            .attr("id", svgId)

    createAxes(svg, dataset)
}

function createAxes(inputSvg, inputDataset) {
    let svg = inputSvg;
    let dataset = inputDataset;

    let svgObj = createAxis(svg, X, dataset);
    svg = svgObj.svg;
    let scaleX = svgObj.scale;
    svgObj = createAxis(svg, Y, dataset);
    svg = svgObj.svg;
    let scaleY = svgObj.scale;

    plotGraph(svg, dataset, scaleX, scaleY);
}

function createAxis(inputSvg, inputType, inputDataset) {
    let svg = inputSvg;

    let type = inputType;
    let dataset = inputDataset;
    let svgDim = document.getElementById(svg.node().id).getBoundingClientRect().toJSON();

    let scale = d3.scaleLinear();
    let axis = null;
    let translateX = 0;
    let translateY = 0;

    switch(type) {
        case X:
            let datasetX = dataset.map(data => data.year);
            datasetX = [...new Set(datasetX)];    

            scale
                .domain([d3.min(datasetX), d3.max(datasetX) + 1])
                .range([G_paddingLeft, svgDim.width - G_paddingRight]);
            axis = d3.axisBottom(scale)
                .ticks(datasetX.length / 10)
                .tickFormat(data => data.toString());
            translateY = svgDim.height - G_paddingBottom;
            break;

        case Y:
            let datasetY = dataset.map(data => data.month);
            datasetY = [...new Set(datasetY)];

            let yLabelX = G_paddingLeft / 2 - G_paddingRight / 2;
            let yLabelY = svgDim.height / 2;
            let rotateYAxisLabel = `rotate(${ rotateAngle } ${ yLabelX } ${ yLabelY })`;

            svg.append('text')
                .attr('id', `${ type }-axis-label`)
                .attr('x', yLabelX)
                .attr('y', yLabelY)
                .attr('transform', rotateYAxisLabel)
                .text(yAxisLabelText);            

            scale
                .domain([d3.max(datasetY) + 0.5, d3.min(datasetY) - 0.5])
                .range([svgDim.height - G_paddingBottom, G_paddingTop]);
            axis = d3.axisLeft(scale)
                .tickFormat(data => monthData[data]);

            translateX = G_paddingLeft - 1;
            break;
    }

    let translate = `translate(${ translateX }, ${ translateY })`
    svg.append("g")
        .attr("id", `${ type }-axis`)
        .attr("transform", translate)
        .call(axis)

    return {
        svg: svg,
        scale: scale
    };
}

function plotGraph(inputSvg, inputDataset, inputScaleX, inputScaleY) {
    let svg = inputSvg;
    let svgDim = document.getElementById(svg.node().id).getBoundingClientRect().toJSON();
    let dataset = inputDataset;
    let div = d3.select(`#${ tooltipId }`);

    let scaleX = inputScaleX;
    let scaleY = inputScaleY;

    let datasetX = dataset.map(data => data.year);
    let datasetY = dataset.map(data => data.month);
    datasetX = [...new Set(datasetX)];    
    datasetY = [...new Set(datasetY)];

    let width = (svgDim.width - G_paddingLeft - G_paddingRight) / (datasetX.length + 1);
    let height = (svgDim.height - G_paddingBottom - G_paddingTop) / datasetY.length;
    
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
            .attr("x", data => scaleX(data.year))
            .attr("y", data => scaleY(data.month - 0.5))
            .attr("width", width)
            .attr("height", height)
            .attr("class", data => {
                let temperature = G_baseTemperature + data.variance;
                return `cell ${ getTemperatureClasses(temperature) }`;
            })
            .attr("data-month", data => data.month - 1)
            .attr("data-year", data => (data.year).toString())
            .attr("data-temp", data => G_baseTemperature + data.variance)
            .on("mouseover", function(data) {
                let x = event.x;
                let y = event.y;
                
                let text = `${ data.year } - ${ monthData[data.month] }\n${ (G_baseTemperature + data.variance).toFixed(1) }&degC\n${ (data.variance).toFixed(1) }&degC`;
                document.getElementById(div.node().id).innerHTML = text;
                div
                    .transition()		
                    .duration(mouseoverDuration)		
                    .style('opacity', opacityVisible);		
                div
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

function getTemperatureClasses(inputTemperature) {
    let temperature = inputTemperature;
    let classes = null;
    for (let i = tempData.length - 1; i >= 0; i--) {
        if (temperature > tempData[i].temp) {
            if (i == tempData.length - 1) {
                classes = tempData[i].classes;
            }
            else {
                classes = tempData[i + 1].classes;
            }            
            break;
        }
        else {
            classes = tempData[i].classes;
        }
    }
    return classes;
}