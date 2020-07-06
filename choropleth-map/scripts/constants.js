/* Characters */
let EMPTY_STR = "";

/* Strings */
let X = "x";
let Y = "y";

/* Value */
    /* General */
const countyDataUrl = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';
const educationDataUrl = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';

/* Value */
    /* #tooltip */
const tooltipId = "tooltip";
const opacityHidden = 0;
const opacityVisible = 0.75;

/* Value */
    /* #header */
const headerTitleSize = "h1";
const headerTitleId = "title";
const headerTitleText = "United States Educational Attainment";

const headerDescriptionSize = "h6";
const headerDescriptionId = "description";
const headerDescriptionText = "Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)";

const headerId = "header";
const headerVal = [
    {
        size: headerTitleSize,
        id: headerTitleId,
        text: headerTitleText
    },
    {
        size: headerDescriptionSize,
        id: headerDescriptionId,
        text: headerDescriptionText
    }
];

/* Values */
    /* #legend */

const legendId = "legend";
const legendHeight = 10;
const legendWidth = 50;
const legendTranslate = {
    x: 600,
    y: 50
};
const legendVal = [
    3, 12, 21, 30, 39, 48, 57, 66
];

/* Values */
    /* #graph */
const graphId = "graph";
const countiesId = "counties";
const countyClasses = "county";
const statesId = "states";
const stateClasses = "state";

/* Values */
    /* #footer */
const footerId = "footer";
const footerUrl = 'https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx';
const footerLinkText = "USDA Economic Research Service";
const footerPrefix = `Source: `;
const footerVal = {
    url: footerUrl,
    text: footerLinkText,
    prefix: footerPrefix
};
