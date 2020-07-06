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

