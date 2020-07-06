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

function setHeader(headerId, headerVal) {
    let innerHTML = EMPTY_STR;
    
    headerVal.map(data => {
        innerHTML += `<${ data.size } id=${ data.id }>${ data.text }</${ data.size }>`;
    });
    document.getElementById(headerId).innerHTML = innerHTML;
}

function setGraph(inputId, inputCountyData, inputEducationData) {
  let graphId = inputId;
  let graphSelector = `#${ graphId }`;
  let graphSvgId = `${ graphId }-svg`;
  let countyDataset = inputCountyData;
  let educationDataset = inputEducationData;

  let svg = d3.select(graphSelector)
      .append("svg")
          .attr("id", graphSvgId);

  plotGraph(svg, countyDataset, educationDataset);
}