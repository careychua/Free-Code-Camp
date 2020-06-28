
document.addEventListener('DOMContentLoaded', ()=> {
    let request = new XMLHttpRequest();

    request.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
    request.send();
    request.onload = () => {
        const rawData = JSON.parse(request.responseText);
        setHeader(headerVal);
        setFooter(footerPrefix, footerLink);
        plotChart(CHART, rawData.data);
    };
});












