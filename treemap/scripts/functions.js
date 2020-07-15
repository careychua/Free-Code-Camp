function clearInnerHTML(id) {
    document.getElementById(id).innerHTML = EMPTY_STR;
}

function setPage(pageType) {
    clearInnerHTML(headerId);
    clearInnerHTML(legendId);
    clearInnerHTML(graphId);
    let type = null;
    typeof pageType == STRING ? type = pageType : type = pageType.id;
    let request = new XMLHttpRequest();
    request.open("GET", typeInfo[type].url, true);
    request.send();
    request.onload = () => {
        let dataset = JSON.parse(request.responseText);
        let root = d3.hierarchy(dataset).sum(function(d){ return d.value});
        setHeader(headerId, headerVal, type);
        let colorScale = setLegend(type, legendId, root.data).colorScale;
        setGraph(type, graphId, colorScale, root);
    };
}

function setGraph(inputType, graphId, inputColorScale, inputRootData) {
    let type = inputType;
    let id = graphId;
    let colorScale = inputColorScale;
    let root = inputRootData;
    let graphSelector = `#${ id }`;
    let svgId = `${ id }-svg`;
    let div = d3.select(`#${ tooltipId }`);

    let svg = d3.select(graphSelector)
        .append("svg")
        .attr("id", svgId)

    let svgDim = document.getElementById(svgId).getBoundingClientRect().toJSON();
    d3.treemap()
        .size([svgDim.width, svgDim.height])
        .paddingInner(2)
        (root);

    svg.append("g")
        .attr("id", `${ id }-tiles`)
        .selectAll("rect")
            .data(root.leaves())
            .enter()
            .append("rect")
                .attr("class", "tile")
                .attr("data-name", d => d.data.name)
                .attr("data-category", d => d.parent.data.name)
                .attr("data-value", d => d.value)
                .attr("x", d => d.x0)
                .attr("y", d => d.y0)
                .attr("width", d => d.x1 - d.x0)
                .attr("height", d => d.y1 - d.y0)
                .style("fill", d => colorScale(d.parent.data.name))
                .on("mouseover", function(d) {
                    let x = d3.event.pageX;
                    let y = d3.event.pageY;
                    
                    let srcElement = d3.event.srcElement;
                    let text = `Name: ${ srcElement.getAttribute("data-name") }\nCategory: ${ srcElement.getAttribute("data-category") }\nValue: ${ srcElement.getAttribute("data-value") }`;
                    div
                        .transition()	
                        .style('opacity', opacityVisible);		
                    div
                        .style('left', d => {
                            if (x + div.node().clientWidth >= svgDim.width) {
                                return `${ x - div.node().clientWidth }px`;
                            }
                            return `${ x + tooltipStartX }px`
                        })
                        .style('top', d => {
                            if (y > svgDim.height - tooltipOffsetY) {
                                return `${ y - tooltipOffsetY }px`;
                            }
                            return `${ y }px`
                        })
                        .attr('data-value', srcElement.getAttribute("data-value"))
                        .html(text);
                    })					
                    .on("mouseout", function(data) {
                        div
                            .transition()	
                            .style('opacity', opacityHidden);
                    }); 

    svg.append("g")
        .attr("id", `${ id }-clipPaths`)
        .selectAll("clipPath")
            .data(root.leaves())
            .enter()
            .append("clipPath")
                .attr("id", (d, i) => `clipPath-${ i }`)
                .append("rect")
                .attr("x", d => d.x0)
                .attr("y", d => d.y0)
                .attr("width", d => d.x1 - d.x0)
                .attr("height", d => d.y1 - d.y0)
                    
    svg.append("g")
        .attr("id", `${ id }-texts`)
        .selectAll("text")
            .data(root.leaves())
            .enter()
            .append("text")
                .attr("x", d => d.x0 + 2)
                .attr("y", d => d.y0 + 12)
                .attr("class", "tile-text")
                .text(d => d.data.name.replace(regex, LINE_BREAK))
                .attr("clip-path", (d, i) => `url(#clipPath-${ i })`)
                .attr("data-name", d => d.data.name)
                .attr("data-category", d => d.parent.data.name)
                .attr("data-value", d => d.value);  
}

function setLegend(dataType, legendId, data) {
    let type = dataType;
    let id = legendId;
    let dataset = data;
    let dataChildrenNames = dataset.children.map(data => data.name);
    let svg = d3.select(`#${ id }`)
        .append("svg")
        .attr("id", `${ id }-svg`);

    let svgDim = document.getElementById(svg.node().id).getBoundingClientRect().toJSON();
    let width = svgDim.width / dataChildrenNames.length;

    let colorScale = d3.scaleOrdinal()
        .domain(dataChildrenNames)
        .range(d3.quantize(d3.interpolateHcl("midnightBlue", "yellowGreen"), dataChildrenNames.length));        

    svg.append("g")
        .attr("id", `${ id }-items`)    
        .selectAll("rect")
        .data(dataChildrenNames)
        .enter()
        .append("rect")
            .attr("class", `${ id }-item`)
            .attr("x", (data, index) => index * width)
            .attr("y", legendOffsetY)
            .attr("width", (data, index) => {
                let dataWidth = null;
                index != dataChildrenNames.length - 1 ?
                    dataWidth = width - legendPadding :
                    dataWidth = width;
                return dataWidth;
            })
            .attr("height", svgDim.height / 1.5)
            .style("fill", data => colorScale(data));

    svg.append("g")
        .attr("id", `${ id }-texts`)
        .selectAll("text")
        .data(dataChildrenNames)
        .enter()
        .append("text")
            .attr("id", `${ id }-text`)
            .text(d => d.replace(regex, LINE_BREAK))
            .attr("x", (data, index) => legendPadding + index * width)
            .attr("y", svgDim.height / 4 + legendOffsetY); 
            
    return {
        colorScale: colorScale
    };
}

function setHeader(headerId, headerVal, dataType) {
    let id = headerId;
    let val = headerVal;
    let type = dataType;
    let innerHTML = EMPTY_STR;

    headerVal.map(data => {
        innerHTML += `<${ data.size } id=${ data.id }>${ data.prefix } ${ capitalise(type) } ${ data.suffix }</${ data.size }>`;
    });

    document.getElementById(headerId).innerHTML = innerHTML;

}

function setNavBar(navbarId, navbarVal) {
    let id = navbarId;
    let val = navbarVal;
    let innerHtml = EMPTY_STR;

    val.map((data, index) => {
        let title = capitalise(data);
        innerHtml += `<li class="nav-item"><a id=${ data } onclick="setPage('${ data }')" href="#">${ title } Data Set</a></li>`
        index < val.length - 1 ? innerHtml += PIPE : innerHtml;
    });

    d3.select(`.nav`)
        .html(innerHtml);
}

function capitalise(inputId) {
    let arr = inputId.split(DASH);
    let string = EMPTY_STR;

    arr.map(data => {
        string += data[0].toUpperCase() + data.substring(1) + SPACE;
    });
    
    return string
}

function setTooltip(inputId) {
    let id = inputId;

    d3.select("body")
        .append("div")
            .attr("id", id)
            .attr("class", id)
            .style("opacity", opacityHidden)
            .style("top", 0)
            .style("left", 0);
}