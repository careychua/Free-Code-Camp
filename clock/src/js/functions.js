function capitalise(string) {
    let arr = string.split(SPACE);
    let regex = /[a-z]/;
    let newArr = arr.map(item => {
        let newString = item.replace(regex, item.substring(0, 1).toUpperCase());
        return newString;
    });
    let newString = newArr.join(SPACE);

    return newString;
}

function displayTime(timer) {
    let newSec = timer.sec;
    let newMin = timer.min;
    newSec < 10 ? newSec = STR_0.concat(newSec) :newSec = (newSec).toString();
    newMin < 10 ? newMin = STR_0.concat(newMin) : newMin = (newMin).toString();
    return newMin.concat(COLON, newSec);
}

function changeTime(value, operator) {
    $(HASH.concat(TIME_LEFT, DASH, CONTAINER)).removeClass("warning");
    switch(operator) {
        case DECREMENT:
            if (value > MIN_LIMIT) {
                return value - 1;
            }
            break;            

        case INCREMENT:
            if (value < MAX_LIMIT) {
                return value + 1;
            }
            break;            
    }

    return value;
}

function disableLinks() {
    $(HASH.concat(BREAK, DASH, DECREMENT, DASH, LINK)).addClass(LINK_OFF);
    $(HASH.concat(SESSION, DASH, DECREMENT, DASH, LINK)).addClass(LINK_OFF);
    $(HASH.concat(BREAK, DASH, INCREMENT, DASH, LINK)).addClass(LINK_OFF);
    $(HASH.concat(SESSION, DASH, INCREMENT, DASH, LINK)).addClass(LINK_OFF);
}

function enableLinks() {
    $(HASH.concat(BREAK, DASH, DECREMENT, DASH, LINK)).removeClass(LINK_OFF);
    $(HASH.concat(SESSION, DASH, DECREMENT, DASH, LINK)).removeClass(LINK_OFF);
    $(HASH.concat(BREAK, DASH, INCREMENT, DASH, LINK)).removeClass(LINK_OFF);
    $(HASH.concat(SESSION, DASH, INCREMENT, DASH, LINK)).removeClass(LINK_OFF);
}

function flashWarning(action){
    switch(action) {
        case ADD:
            $(HASH.concat(TIME_LEFT, DASH, CONTAINER)).addClass("warning");
            break;

        case REMOVE:
            $(HASH.concat(TIME_LEFT, DASH, CONTAINER)).removeClass("warning");
            break;
    }
}

function playBeep(action){
    switch(action) {
        case START:
            document.querySelector(HASH.concat(BEEP)).volume = 0.1;
            document.querySelector(HASH.concat(BEEP)).play(); 
            break;

        case STOP:
            document.querySelector(HASH.concat(BEEP)).pause(); 
            break;
    }
}
