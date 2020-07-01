document.addEventListener("DOMContentLoaded", () => {
    let request = new XMLHttpRequest();

    request.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json', true);
    request.send();
    request.onload = () => {
        let rawData = JSON.parse(request.responseText);
        G_baseTemperature = rawData.baseTemperature;
        let dataset = rawData.monthlyVariance;
        setTooltip(tooltipId);
        setHeader(titleId, titleVal, dataset);
        setLegend(legendId, dataset);
        setGraph(graphId, dataset);
    };
});