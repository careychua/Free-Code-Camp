/* Select single element */
    // d3.select('body')           // returns <body>
    //     .append('h1')           // appends <h1>
    //     .text('Learning D3');   // sets text inside


/* Select a group of elements */
    // d3.selectAll('li')
    //     .text('list item');    


/* Attach data */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // d3.select('body').selectAll('h2')
    //     .data(dataset)
    //     .enter()
    //     .append('h2')
    //     .text('New Title');


/* Attach dynamic data */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // d3.select('body').selectAll('h2')
    //     .data(dataset)
    //     .enter()
    //     .append('h2')
    //     .text((data) => {
    //         return (data.toString()).concat(' USD');
    //     });


/* CSS Inline Styling */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // d3.select("body").selectAll("h2")
    //     .data(dataset)
    //     .enter()
    //     .append("h2")
    //     .text((d) => (d + " USD"))
    //     .style("font-family", "verdana");


/* CSS Style: Change based on data */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // d3.select("body").selectAll("h2")
    //     .data(dataset)
    //     .enter()
    //     .append("h2")
    //     .text((d) => (d + " USD"))
    //     .style('color', (data) => {
    //         return data < 20 ? 'red' : 'green';
    //     });


/* Add attributes */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // d3.select("body").selectAll("div")
    //     .data(dataset)
    //     .enter()
    //     .append("div")
    //     .attr("class", "bar");


/* Update height of element dynamically */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    // d3.select("body").selectAll("div")
    //     .data(dataset)
    //     .enter()
    //     .append("div")
    //     .attr("class", "bar")
    //     .style("height", (data) => data * 10 + "px");


/* SVG */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //     .append("svg")
    //     .style("width", w)
    //     .style("height", h);


/* SVG: Display shapes */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //                 .append("svg")
    //                 .attr("width", w)
    //                 .attr("height", h)
    //                 .append("rect")
    //                 .attr("width", 25)
    //                 .attr("height", 100)
    //                 .attr("x", 0)
    //                 .attr("y", 0);


/* SVG: Static shapes */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //                 .append("svg")
    //                 .attr("width", w)
    //                 .attr("height", h);

    // svg.selectAll("rect")
    //     .data(dataset)
    //     .enter()
    //     .append("rect")
    //     .attr("x", 0)
    //     .attr("y", 0)
    //     .attr("width", 25)
    //     .attr("height", 100);


/* SVG: Dynamic shapes */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //                 .append("svg")
    //                 .attr("width", w)
    //                 .attr("height", h);

    // svg.selectAll("rect")
    //     .data(dataset)
    //     .enter()
    //     .append("rect")
    //     .attr("x", (data, index) => {
    //         return index * 30;
    //     })
    //     .attr("y", 0)
    //     .attr("width", 25)
    //     .attr("height", 100);


/* SVG: Dynamically change height */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //                 .append("svg")
    //                 .attr("width", w)
    //                 .attr("height", h);

    // svg.selectAll("rect")
    //     .data(dataset)
    //     .enter()
    //     .append("rect")
    //     .attr("x", (d, i) => i * 30)
    //     .attr("y", 0)
    //     .attr("width", 25)
    //     .attr("height", (data, index) => {
    //         return data * 3;
    //     });


/* SVG: Invert Elements */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //               .append("svg")
    //               .attr("width", w)
    //               .attr("height", h);

    // svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x", (data, index) => index * 30)
    //    .attr("y", (data, index) => 100 - data * 3)
    //    .attr("width", 25)
    //    .attr("height", (data, index) => 3 * data);


/* SVG: Color of elements */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //               .append("svg")
    //               .attr("width", w)
    //               .attr("height", h);

    // svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - 3 * d)
    //    .attr("width", 25)
    //    .attr("height", (d, i) => 3 * d)
    //    .attr("fill", "navy");

/* SVG: Add labels */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //               .append("svg")
    //               .attr("width", w)
    //               .attr("height", h);

    // svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - 3 * d)
    //    .attr("width", 25)
    //    .attr("height", (d, i) => 3 * d)
    //    .attr("fill", "navy");

    // svg.selectAll("text")
    //    .data(dataset)
    //    .enter()
    //    .append("text")
    //    .attr("x", (data, index) => index * 30)
    //    .attr("y", (data, index) => h - data * 3 - 3)
    //    .text((data) => data);


/* SVG: Color labels */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //               .append("svg")
    //               .attr("width", w)
    //               .attr("height", h);

    // svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - 3 * d)
    //    .attr("width", 25)
    //    .attr("height", (d, i) => d * 3)
    //    .attr("fill", "navy");

    // svg.selectAll("text")
    //    .data(dataset)
    //    .enter()
    //    .append("text")
    //    .text((d) => d)
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - (3 * d) - 3)
    //    .style("font-size", "25px")
    //    .attr("fill", "red");


/* SVG: Add hover to element */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //               .append("svg")
    //               .attr("width", w)
    //               .attr("height", h);

    // svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - 3 * d)
    //    .attr("width", 25)
    //    .attr("height", (d, i) => 3 * d)
    //    .attr("fill", "navy")
    //    .attr("class", "bar");

    // svg.selectAll("text")
    //    .data(dataset)
    //    .enter()
    //    .append("text")
    //    .text((d) => d)
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - (3 * d) - 3);


/* SVG: Add tooltip */
    // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    // const w = 500;
    // const h = 100;

    // const svg = d3.select("body")
    //               .append("svg")
    //               .attr("width", w)
    //               .attr("height", h);

    // svg.selectAll("rect")
    //    .data(dataset)
    //    .enter()
    //    .append("rect")
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - 3 * d)
    //    .attr("width", 25)
    //    .attr("height", (d, i) => d * 3)
    //    .attr("fill", "navy")
    //    .attr("class", "bar")
    //    .append("title")
    //    .text((data) => data);

    // svg.selectAll("text")
    //    .data(dataset)
    //    .enter()
    //    .append("text")
    //    .text((d) => d)
    //    .attr("x", (d, i) => i * 30)
    //    .attr("y", (d, i) => h - (d * 3 + 3));


/* SVG: Scatterplot with circles */
    // const dataset = [
    //     [ 34,    78 ],
    //     [ 109,   280 ],
    //     [ 310,   120 ],
    //     [ 79,    411 ],
    //     [ 420,   220 ],
    //     [ 233,   145 ],
    //     [ 333,   96 ],
    //     [ 222,   333 ],
    //     [ 78,    320 ],
    //     [ 21,    123 ]
    // ];
    // const w = 500;
    // const h = 500;

    // const svg = d3.select("body")
    //     .append("svg")
    //     .attr("width", w)
    //     .attr("height", h);

    // svg.selectAll("circle")
    //     .data(dataset)
    //     .enter()
    //     .append("circle");      


/* SVG: Circles */
    // const dataset = [
    //     [ 34,    78 ],
    //     [ 109,   280 ],
    //     [ 310,   120 ],
    //     [ 79,    411 ],
    //     [ 420,   220 ],
    //     [ 233,   145 ],
    //     [ 333,   96 ],
    //     [ 222,   333 ],
    //     [ 78,    320 ],
    //     [ 21,    123 ]
    // ];
    // const w = 500;
    // const h = 500;

    // const svg = d3.select("body")
    //     .append("svg")
    //     .attr("width", w)
    //     .attr("height", h);

    // svg.selectAll("circle")
    //     .data(dataset)
    //     .enter()
    //     .append("circle")
    //     .attr("cx",(data) => data[0])
    //     .attr("cy",(data) => h - data[1])
    //     .attr("r", "5");

/* SVG: Add labels to circles */
    // const dataset = [
    //     [ 34,    78 ],
    //     [ 109,   280 ],
    //     [ 310,   120 ],
    //     [ 79,    411 ],
    //     [ 420,   220 ],
    //     [ 233,   145 ],
    //     [ 333,   96 ],
    //     [ 222,   333 ],
    //     [ 78,    320 ],
    //     [ 21,    123 ]
    // ];


    // const w = 500;
    // const h = 500;

    // const svg = d3.select("body")
    //     .append("svg")
    //     .attr("width", w)
    //     .attr("height", h);

    // svg.selectAll("circle")
    //     .data(dataset)
    //     .enter()
    //     .append("circle")
    //     .attr("cx", (d, i) => d[0])
    //     .attr("cy", (d, i) => h - d[1])
    //     .attr("r", 5)

    // svg.selectAll("text")
    //     .data(dataset)
    //     .enter()
    //     .append("text")
    //     .attr("x", (data) => data[0] + 5)
    //     .attr("y", (data) => h - data[1])
    //     .text((data) => data[0] + ", " + data[1]);


/* Scale: Linear */
    // const scale = d3.scaleLinear(); // Create the scale here
    // const output = scale(50); // Call the scale with an argument here

    // d3.select("body")
    //     .append("h2")
    //     .text(output);


/* Scale: Set domain and range */
    // const scale = d3.scaleLinear();
    // scale.domain([250, 500]);
    // scale.range([10, 150]);
    // const output = scale(50);
    // d3.select("body")
    //     .append("h2")
    //     .text(output);


/* Find min and max values in dataset */
    // const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]];
    // const output = d3.max(positionData, (data) => data[2]);

    // d3.select("body")
    //     .append("h2")
    //     .text(output);


/* Scales: Dynamic */
    // const dataset = [
    //     [ 34,    78 ],
    //     [ 109,   280 ],
    //     [ 310,   120 ],
    //     [ 79,    411 ],
    //     [ 420,   220 ],
    //     [ 233,   145 ],
    //     [ 333,   96 ],
    //     [ 222,   333 ],
    //     [ 78,    320 ],
    //     [ 21,    123 ]
    // ];
    // // Canvas dimensions
    // const w = 500;
    // const h = 500;
    // // Padding between the SVG canvas boundary and the plot
    // const padding = 30;

    // // Create an x and y scale
    // const xScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, (d) => d[0])])
    //     .range([padding, w - padding]);

    // const yScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, (data)=> data[1])])
    //     .range([h - padding, padding]);

    // const output = yScale(411); // Returns 30
    // d3.select("body")
    //     .append("h2")
    //     .text(output)


/* Scale: Place elements with pre-defined scales */
    // const dataset = [
    //     [ 34,     78 ],
    //     [ 109,   280 ],
    //     [ 310,   120 ],
    //     [ 79,   411 ],
    //     [ 420,   220 ],
    //     [ 233,   145 ],
    //     [ 333,   96 ],
    //     [ 222,    333 ],
    //     [ 78,    320 ],
    //     [ 21,   123 ]
    // ];
    // const w = 500;
    // const h = 500;
    // const padding = 60;

    // const xScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, (d) => d[0])])
    //     .range([padding, w - padding]);

    // const yScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, (d) => d[1])])
    //     .range([h - padding, padding]);

    // const svg = d3.select("body")
    //     .append("svg")
    //     .attr("width", w)
    //     .attr("height", h);

    // svg.selectAll("circle")     // plot points
    // .data(dataset)
    // .enter()
    // .append("circle")
    // .attr("cx", (data) => xScale(data[0]))
    // .attr("cy", (data) => yScale(data[1]))
    // .attr("r", "5");

    // svg.selectAll("text")       // plot labels
    // .data(dataset)
    // .enter()
    // .append("text")
    // .text((d) =>  (d[0] + ", " + d[1]))
    // .attr("x", (data) => xScale(data[0] + 10))
    // .attr("y", (data) => yScale(data[1]));


/* SVG: Add Axes to plots */
    // const dataset = [
    //     [ 34,     78 ],
    //     [ 109,   280 ],
    //     [ 310,   120 ],
    //     [ 79,   411 ],
    //     [ 420,   220 ],
    //     [ 233,   145 ],
    //     [ 333,   96 ],
    //     [ 222,    333 ],
    //     [ 78,    320 ],
    //     [ 21,   123 ]
    // ];

    // const w = 500;
    // const h = 500;
    // const padding = 60;

    // const xScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, (d) => d[0])])
    //     .range([padding, w - padding]);

    // const yScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataset, (d) => d[1])])
    //     .range([h - padding, padding]);

    // const svg = d3.select("body")
    //     .append("svg")
    //     .attr("width", w)
    //     .attr("height", h);

    // svg.selectAll("circle")
    //     .data(dataset)
    //     .enter()
    //     .append("circle")
    //     .attr("cx", (d) => xScale(d[0]))
    //     .attr("cy",(d) => yScale(d[1]))
    //     .attr("r", (d) => 5);

    // svg.selectAll("text")
    //     .data(dataset)
    //     .enter()
    //     .append("text")
    //     .text((d) =>  (d[0] + "," + d[1]))
    //     .attr("x", (d) => xScale(d[0] + 10))
    //     .attr("y", (d) => yScale(d[1]));

    // const xAxis = d3.axisBottom(xScale);
    // const yAxis = d3.axisLeft(yScale);

    // svg.append("g")
    //     .attr("transform", "translate(0," + (h - padding) + ")")
    //     .call(xAxis);

    // svg.append("g")
    //     .attr("transform", "translate(" + padding + ", 0)")
    //     .call(yAxis);

/* Test code below */

