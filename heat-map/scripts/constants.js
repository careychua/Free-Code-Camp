/* Strings */
const H1 = 'h1';
const H3 = 'h3'
const X = 'x';
const Y = 'y';


/* Characters */
const EMPTY_STR = '';


/* Global Variables */
let G_baseTemperature = EMPTY_STR;


/* Values
        #header     */
const titleId = 'header';
const titleVal = [{
        size: H1,
        id: 'title',
        text: 'Monthly Global Land-Surface Temperature'
    },
    {
        size: H3,
        id: 'description',
        text: EMPTY_STR
}];

/* Values
        #legend     */
const legendId = 'legend';
const legendPadding = 10;
const tempData = [
    {
        temp: 2.8,
        classes: "t-2p8"
    },
    {
        temp: 3.9,
        classes: "t-3p9"
    },
    {
        temp: 5.0,
        classes: "t-5p0"
    },
    {
        temp: 6.1,
        classes: "t-6p1"
    },
    {
        temp: 7.2,
        classes: "t-7p2"
    },
    {
        temp: 8.3,
        classes: "t-8p3"
    },
    {
        temp: 9.5,
        classes: "t-9p5"
    },
    {
        temp: 10.6,
        classes: "t-10p6"
    },
    {
        temp: 11.7,
        classes: "t-11p7"
    },
    {
        temp: 12.8,
        classes: "t-12p8"
    }
];

/* Values
        #graph     */
const graphId = 'graph';
const rotateAngle = -90;
const yAxisLabelText = 'Months';
const G_paddingRight = 20;
const G_paddingLeft = 120;
const G_paddingBottom = 50;
const G_paddingTop = 10;
const monthData = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

/* Values
        #tooltip     */
const tooltipId = "tooltip";
const opacityHidden = 0;
const opacityVisible = 0.8;
const mouseoverDuration = 200;
const mouseoutDuration = 200;