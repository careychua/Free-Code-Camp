/* Characters */
const EMPTY_STR = "";
const DASH = "-";
const SPACE = " ";
const PIPE = "|";
const LINE_BREAK = '\n';

/* Strings */
const STRING = "string";

/* Values */
    /* General */
const TYPE_VIDEO_GAMES = "video-games";
const TYPE_MOVIES = "movies";
const TYPE_KICKSTARTER = "kickstarter";

const typeInfo = {
    "video-games": {
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json'
    },
    "movies": {
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json'
    },
    "kickstarter": {
        url: 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json'
    }
}

/* Values */
    /* #legend */
const legendId = "legend";
const legendPadding = 5;
const legendOffsetY = 10;

/* Values */
    /* #header */
const headerTitleSize = "h1";
const headerTitleId = "title";
const headerTitleTextPrefix = EMPTY_STR;
const headerTitleTextSuffix = "Sales";

const headerDescriptionSize = "h6";
const headerDescriptionId = "description";
const headerDescriptionTextPrefix = "Top 100 Most Sold";
const headerDescriptionTextSuffix = "Grouped by Platform";

const headerId = "header";
const headerVal = [
    {
        size: headerTitleSize,
        id: headerTitleId,
        prefix: headerTitleTextPrefix,
        suffix: headerTitleTextSuffix
    },
    {
        size: headerDescriptionSize,
        id: headerDescriptionId,
        prefix: headerDescriptionTextPrefix,
        suffix: headerDescriptionTextSuffix
    }
];

/* Values */
    /* #navbar */
const navbarId = "navbar";
const navbarVal = [
    TYPE_VIDEO_GAMES,
    TYPE_MOVIES,
    TYPE_KICKSTARTER
];

/* Values */
    /* #tooltip */
const tooltipId = "tooltip";
const opacityHidden = 0;
const opacityVisible = 0.85;
const tooltipStartX = 15;
const tooltipOffsetY = 50;

/* Values */
    /* #graph */
const graphId = "graph";
const regex = /\s/g;