/* Constants: Strings */
const MAIN = 'main';
const CLOCK = 'clock';
const HEADER = 'header';
const VALUE = 'value';
const VALUES = 'values';
const BREAK = 'break';
const SESSION = 'session';
const TIMER = 'timer';
const TIME_LEFT = 'time-left';
const LABEL = 'label';
const LINK = 'link';
const LINK_OFF = 'link-off';
const DECREMENT = 'decrement';
const INCREMENT = 'increment';
const LENGTH = 'length';
const CONTROLS = 'controls';
const ARROW = 'arrow';
const START_STOP = 'start_stop';
const START = 'start';
const STOP = 'stop';
const RESET = 'reset';
const CONTAINER = 'container';
const SEC = 'sec';
const MIN = 'min';
const BEEP = 'beep';
const ADD = 'add';
const REMOVE = 'remove';


/* Constants: Characters */
const HASH = '#';
const DASH = '-';
const SPACE = ' ';
const EMPTY_STR = '';
const COLON = ':';
const STR_0 = '0';


/* Constants: Values */
const headerText = 'pomodoro clock';
const MIN_LIMIT = 1;
const MAX_LIMIT = 60;
const MAX_MS = 1000;
const MAX_SEC = 60;
const MIN_SEC = 0;
const MIN_MIN = 0;
const DEFAULT_BREAK = 5;
const DEFAULT_SESSION = 25;
const AUDIO_SRC = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";


/* Constants: State */
const DEFAULT_STATE = {
    break: {
        min: DEFAULT_BREAK, 
        sec: MIN_SEC
    },
    session: {
        min: DEFAULT_SESSION, 
        sec: MIN_SEC
    },
    timer: {
        current: SESSION,
        min: DEFAULT_SESSION, 
        sec: MIN_SEC
    },
    startStop: STOP,
    intervalId: null
};