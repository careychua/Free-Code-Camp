// add listener for document loaded
document.addEventListener("DOMContentLoaded", () => {
    // get county data from url
    let req1 = new XMLHttpRequest();
    req1.open("GET", countyDataUrl, true);
    req1.send();
    req1.onload = () => {
        let countyDataset = JSON.parse(req1.responseText);

        let req2 = new XMLHttpRequest();
        req2.open("GET", educationDataUrl, true);
        req2.send();
        req2.onload = () => {
            let educationDataset = JSON.parse(req2.responseText);

            setTooltip(tooltipId);
            setHeader(headerId, headerVal);
            setGraph(graphId, countyDataset, educationDataset);
            setFooter(footerId, footerVal);
        };
    };
});

function setFooter(footerId, footerVal) {
    let id = footerId;
    let value = footerVal;
    document.getElementById(`${ id }`).innerHTML = 
        `${ value.prefix }<a href=${ value.url } target="_blank">${ value.text }</a>`
}

function plotGraph(inputSvg, countiesDataset, educationDataset) {
    let svg = inputSvg;
    let dataset = countiesDataset;
    let eduDataset = educationDataset;
    let div = d3.select(`#${ tooltipId }`);

    let color = d3.scaleQuantile()
        .domain(legendVal)
        .range(d3.schemeGreens[9]);

        svg.append("g")
            .attr("id", `${ legendId }`)
            .selectAll("rect")
            .data(legendVal)
            .enter()
                .append("rect")
                .attr("class", `${ legendId }`)
                .attr("x", (data, index) => legendTranslate.x + index * legendWidth)
                .attr("y", legendTranslate.y)
                .attr("width", legendWidth)
                .attr("height", legendHeight)
                .style("fill", data => color(data))

        svg.append("g")
            .attr("id", `${ legendId }-text`)
            .selectAll("text")
            .data(legendVal)
            .enter()
                .append("text")
                .attr("class", `${ legendId }-text`)
                .attr("x", (data, index) => legendTranslate.x + index * legendWidth - 5)
                .attr("y", legendTranslate.y + legendHeight * 2.25)
                .text(data => `${ data }%`)
    

    let path = d3.geoPath();

    svg.append("g")
        .attr("id", countiesId)
        .selectAll("path")
            .data(topojson.feature(dataset, dataset.objects.counties).features)
            .enter()
            .append("path")
                .attr("class", countyClasses)
                .attr("data-fips", data => data.id)
                .attr("data-education", data => {
                    let obj = eduDataset.filter(item => item.fips == data.id);
                    return obj[0].bachelorsOrHigher;
                })
                .attr("fill", data => {
                    let obj = eduDataset.filter(item => item.fips == data.id);
                    return color(obj[0].bachelorsOrHigher);
                })
                .attr("d", path)
                .on("mouseover", function(data) {
                    let x = d3.event.pageX;
                    let y = d3.event.pageY;
                    
                    let obj = eduDataset.filter(item => item.fips == data.id)[0];

                    let text = `${ obj.area_name }, ${ obj.state }: ${ obj.bachelorsOrHigher }%`;
                    div
                        .transition()	
                        .style('opacity', opacityVisible);		
                    div
                        .style('left', `${ x + 15 }px`)
                        .style('top', `${ y + 15 }px`)
                        .attr('data-education', obj.bachelorsOrHigher)
                        .html(text);
                    })					
                    .on("mouseout", function(data) {		
                        div
                            .transition()	
                            .style('opacity', opacityHidden);
                    });  

    svg.append("g")
        .attr("id", statesId)
        .selectAll("path")
            .data(topojson.feature(dataset, dataset.objects.states).features)
            .enter()
            .append("path")
            .attr("class", stateClasses)
                .attr("d", path);

    let svgWidth = document.getElementById(`${ svg.node().id }`).getBoundingClientRect().toJSON().width;
    let gWidth = document.getElementById(`${ countiesId }`).getBoundingClientRect().toJSON().width;
    d3.select(`#${ countiesId }`)
        .attr("transform", `translate(${ (svgWidth - gWidth) / 2 }, ${ legendTranslate.y })`);
    d3.select(`#${ statesId }`)
        .attr("transform", `translate(${ (svgWidth - gWidth) / 2 }, ${ legendTranslate.y })`);
}