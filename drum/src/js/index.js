// React
class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            power: false
        };

        this.handleClickAndKeyPress = this.handleClickAndKeyPress.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleClickAndKeyPress);
    }

    handleKey(key) {
        $(('#').concat(key)).addClass("highlight-key");
        setTimeout(() => {
            $(('#').concat(key)).removeClass("highlight-key");
        }, 250);
        document.querySelector(('#audio-').concat(key)).play();
    }

    handleClickAndKeyPress(event) {
        if (this.state.power) {
            let key = event.target.id;
            let code = event.keyCode;
            let keyObj = keys.filter(item => (item.key == key || item.code == code));
            if (keyObj.length > 0) {
                this.handleKey(keyObj[0].key);
            }
        }
    }

    render() {
        return (
            <div id="drum-machine">
                <DrumPad handleClick={ this.handleClickAndKeyPress }/>
                <DrumControls />
            </div>
        );
    }
}

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let keysJsx = [];
        keys.map(item => {
            keysJsx.push(
                <button id={ item.key } key={ item.key } onClick={ this.props.handleClick } className="drum-pad">
                    { item.key.toUpperCase() }<audio id={ ('audio-').concat(item.key) } src={ item.url } className="clip" />
                </button>
            );
        });
        return (
          <div id="drum-pad">
              { keysJsx }
          </div> 
        );
    }
}

class DrumControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="drum-controls">
                <div id="power">
                    power
                </div>
                <div id="display">
                    display
                </div>
                <div id="volume">
                    volume
                </div>
                <div id="bank">
                    bank
                </div>
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.querySelector('main'));