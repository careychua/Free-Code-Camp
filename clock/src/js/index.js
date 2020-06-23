class Clock extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return(
            <div id={ CLOCK }>
                <Header id={ HEADER } headerText={ headerText }/>
                <Values id={ VALUES }/>
                <Timer id={ TIMER }/>
            </div>
        );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let id = this.props.id;
        let labelId = id.concat(DASH, LABEL);
        let headerText = 'var'
        let controlsId = id.concat(DASH, CONTROLS);
        let controlsClass = TIMER.concat(DASH, CONTROLS);
        let containerId = TIME_LEFT.concat(DASH, CONTAINER);

        return (
            <div id={ TIMER }>
                <div id={ containerId }>
                    <Header id={ labelId } headerText={ headerText }/>
                    <div id={ TIME_LEFT }>
                        var
                    </div>
                    
                </div>
                <div id={ controlsId }>
                    <a className={ controlsClass }>
                        <i className="fas fa-play"/><i className="fas fa-pause"/>
                    </a>
                    <a className={ controlsClass }>
                        <i className="fas fa-redo-alt"/>
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
                <Value id={ BREAK }/>
                <Value id={ SESSION }/>
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
                    <a id={ decrementId } className={ARROW}><i className="fas fa-arrow-down"/></a>
                    <div id={ lengthId } className={ timerClass }>var</div>
                    <a id={ incrementId } className={ARROW}><i className="fas fa-arrow-up"/></a>
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