class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleStartStop = this.handleStartStop.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        let timer = this.state.timer;
        let sec = timer.sec * MAX_MS;
        let min = timer.min * MAX_SEC * MAX_MS;
        let currTime = new Date(min + sec);
        let newTime = (currTime - (new Date(MAX_MS))) / MAX_MS;
        let newTimer = {
            current: timer.current,
            min: Math.floor(newTime / MAX_SEC),
            sec: newTime % MAX_SEC
        };
        
        this.setState(state => {
            if (newTimer.min == MIN_MIN) {
                if (newTimer.sec == MAX_SEC - 1) {
                    flashWarning(ADD);
                }
                
                if (newTimer.sec == MIN_SEC) {                    
                    playBeep(START);
                }
            }
            if (newTimer.min < MIN_MIN) {
                newTimer.current == BREAK ? 
                    (newTimer.current = SESSION, newTimer.min = this.state.session.min, newTimer.sec = MIN_SEC) :
                    (newTimer.current = BREAK, newTimer.min = this.state.break.min, newTimer.sec = MIN_SEC);

                flashWarning(REMOVE);
            }
            

            return {
                timer: newTimer
            };
        });
    }

    handleStartStop() {
        let timer = this.state.timer;
        let startStop = this.state.startStop;

        startStop == START ? startStop = STOP : startStop = START;
        this.setState({ startStop: startStop });

        switch(startStop) {
            case START:
    
                disableLinks();
                let sec = setInterval(this.startTimer , 1000);
                this.setState({
                    intervalId: sec
                });
                break;

            case STOP:
    
                enableLinks();
                clearInterval(this.state.intervalId);
                break;
        }        
    }

    handleReset() {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
        enableLinks();
        $(HASH.concat(TIME_LEFT, DASH, CONTAINER)).removeClass("warning");
        document.querySelector(HASH.concat(BEEP)).pause(); 
        document.querySelector(HASH.concat(BEEP)).load(); 
        this.setState(JSON.parse(JSON.stringify(DEFAULT_STATE)));
    }

    handleChange(event) {
        if (this.state.startStop == STOP) {
            let idArr = (event.target.id).split(DASH);
            let id = idArr[0];
            let operator = idArr[1];
            this.setState((state) => {
                switch(id) {
                    case (BREAK):
                        return ({ 
                            break: {
                                min: changeTime(state.break.min, operator),
                                sec: MIN_SEC
                            }  
                        });                   

                    case (SESSION):
                        let newTime = changeTime(state.session.min, operator);
                        return { 
                            session: {
                                min: newTime,
                                sec: MIN_SEC
                            },
                            timer: {
                                current: SESSION,
                                min: newTime,
                                sec: MIN_SEC
                            }
                        };
                }

                return state;
            });
        }
    }

    render() {
        return(
            <div id={ CLOCK }>
                <Header id={ HEADER } headerText={ headerText }/>
                <Values id={ VALUES } handleChange={ this.handleChange } break={ this.state.break } session={ this.state.session }/>
                <Timer timer={ this.state.timer } handleStartStop={ this.handleStartStop } handleReset={ this.handleReset }/>
            </div>
        );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let labelId = TIMER.concat(DASH, LABEL);
        let headerText = this.props.timer.current;
        let controlsId = TIMER.concat(DASH, CONTROLS);
        let controlsClass = TIMER.concat(DASH, CONTROLS);
        let containerId = TIME_LEFT.concat(DASH, CONTAINER);

        return (
            <div id={ TIMER }>
                <div id={ containerId }>
                    <Header id={ labelId } headerText={ headerText }/>
                    <div id={ TIME_LEFT }>
                        { displayTime(this.props.timer) }<audio id={ BEEP } src={ AUDIO_SRC }/>
                    </div>
                </div>
                <div id={ controlsId }>
                    <a className={ controlsClass } onClick={ this.props.handleStartStop }>
                        <i id={ START_STOP } className="fas fa-play"/><i id={ START_STOP } className="fas fa-pause"/>
                    </a>
                    <a className={ controlsClass } onClick={ this.props.handleReset }>
                        <i id={ RESET } className="fas fa-redo-alt"/>
                    </a>
                </div>
            </div>
        );
    }
}

class Values extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let id = this.props.id;
        return (
            <div id={ id }>
                <Value id={ BREAK } handleChange={ this.props.handleChange } value={ this.props.break.min }/>
                <Value id={ SESSION } handleChange={ this.props.handleChange } value={ this.props.session.min }/>
            </div>
        );
    }
}

class Value extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let id = this.props.id
        let labelId = id.concat(DASH, LABEL);
        let labelText = id.concat(SPACE, LENGTH);
        let controlsId = id.concat(DASH, CONTROLS);
        let decrementId = id.concat(DASH, DECREMENT);
        let lengthId = id.concat(DASH, LENGTH);
        let incrementId = id.concat(DASH, INCREMENT);
        let timerClass = VALUE.concat(DASH, TIMER);
        return (
            <div id={ id } className={ VALUE }>
                <Header id={ labelId } headerText={ labelText }/>
                <div id={ controlsId } className={ CONTROLS }>
                    <a id={ decrementId.concat(DASH, LINK) } className={ ARROW } onClick={ this.props.handleChange }>
                        <i id={ decrementId } className="fas fa-arrow-down"/>
                    </a>
                    <div id={ lengthId } className={ timerClass }>{ this.props.value }</div>
                    <a id={ incrementId.concat(DASH, LINK) } className={ ARROW } onClick={ this.props.handleChange }>
                        <i id={ incrementId } className="fas fa-arrow-up"/>
                    </a>
                </div>
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let id = this.props.id;
        let headerText = capitalise(this.props.headerText);

        return (
            <div id= { id }>
                <h1>
                    { headerText }
                </h1>
            </div>
        );
    }
}

ReactDOM.render(<Clock/>, document.querySelector(MAIN));