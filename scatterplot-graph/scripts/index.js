document.addEventListener("DOMContentLoaded", () => {
    let request = new XMLHttpRequest();
    request.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json', true);
    request.send();
    request.onload = () => {
        let dataset = JSON.parse(request.responseText).map(data => {
            return {
                time: data.Time,
                seconds: data.Seconds,
                name: data.Name,
                year: data.Year,
                nationality: data.Nationality,
                doping: data.Doping
            };
        });
        setHeader(titleId, titleVal);
        setGraph(dopeGraphId, dataset);
    };    
});

