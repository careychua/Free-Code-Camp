// React
class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            power: false,
            bank: 1,
            display: '',
            volume: 0.5
        };

        this.handleClickAndKeyPress = this.handleClickAndKeyPress.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleClickAndKeyPress);
    }

    handleSlider(event) {
        let volumeNumber = event.target.value;
        let volume = parseInt(volumeNumber) / 100;
        let text = VOLUME;
        let regex = /[a-z]/;
        text = text.replace(regex, text.match(regex)[0].toUpperCase());
        this.setState({
            volume: volume
        });
        if(this.state.power) {
            this.setState({
                display: text.concat(": ").concat(volumeNumber)
            });
            this.clearDisplay(500);
        }
    }

    handleClick(event) {
        let type = event.target.id;
        let checked = event.target.checked;
        
        switch(type) {
            case POWER:
                let display = switches[0][POWER].filter(item => item.value == checked);
                this.setState({
                        power: checked,
                        display: display[0].display
                });

                if (checked) {
                    setTimeout(() => {
                        this.setState(state => {
                            let display = switches[0][BANK].filter(item => item.code == state.bank);
                            return ({
                                display: display[0].display
                            });                        
                        });
                        this.clearDisplay(1500);
                    }, 1000);
                }
                else {
                    this.clearDisplay(1500);
                }              
                break;

            case BANK:
                this.setState({
                    bank: checked ? 2 : 1
                });

                if (this.state.power) {
                    let display = switches[0][BANK].filter(item => item.value == checked);
                    this.setState({
                            display: display[0].display
                    });
                }
                this.clearDisplay(1500);
                break;
        }
    }

    clearDisplay(duration) {
        setTimeout(() => {
            this.setState({
                display: ''                      
            });
        }, duration);
    }

    handleKey(keyObj) {
        let bank = this.state.bank;
        let volume = this.state.volume;
        this.setState({
            display: keyObj.bank[bank].display
        });

        this.clearDisplay(1000);

        $(('#key-').concat(keyObj.key)).addClass("highlight-key");

        setTimeout(() => {
            $(('#key-').concat(keyObj.key)).removeClass("highlight-key");
        }, 250);
        document.querySelector(('#').concat(keyObj.key)).volume = volume;
        document.querySelector(('#').concat(keyObj.key)).play();
    }

    handleClickAndKeyPress(event) {
        if (this.state.power) {
            let key = event.target.id;
            key = key.replace("key-", "");
            let code = event.keyCode;
            let keyObj = keys.filter(item => (item.key == key || item.code == code));
            if (keyObj.length > 0) {
                this.handleKey(keyObj[0]);
            }
        }
    }

    render() {
        return (
            <div id="drum-machine">
                <DrumPad bank={ this.state.bank } handleClick={ this.handleClickAndKeyPress }/>
                <DrumControls handleClick= { this.handleClick } display= { this.state.display } volume={ this.state.volume } handleSlider={ this.handleSlider }/>
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
        let bank = this.props.bank
        keys.map(item => {
            keysJsx.push(
                <button id={ ("key-").concat(item.key) } key={ item.key } onClick={ this.props.handleClick } className="drum-pad">
                    { item.key.toUpperCase() }<audio id={ item.key } src={ item.bank[bank].url } className="clip" />
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
                <SwitchComponent type={ POWER } handleClick={ this.props.handleClick }/>
                <Display display={ this.props.display } />
                <Volume volume={ this.props.volume } handleSlider={ this.props.handleSlider }/>
                <SwitchComponent type={ BANK }  handleClick={ this.props.handleClick }/>
            </div>
        );
    }
}

class Volume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let volume = (this.props.volume * 100).toString();
        let text = VOLUME;
        let regex = /[a-z]/;
        text = text.replace(regex, text.match(regex)[0].toUpperCase());
        return (
            <div id={ VOLUME }>
                <div >
                    { text }
                </div>
                <div>
                    <input type="range" id={ VOLUME.concat("-slider") } min="0" max="100" value={ volume } onChange={ this.props.handleSlider }/>
                </div>
            </div>
        );
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={ DISPLAY }>
                <div id={ DISPLAY.concat("-text") }>
                    { this.props.display }
                </div>
            </div>
        );
    }
}

class SwitchComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        let text = type;
        let regex = /[a-z]/;
        text = text.replace(regex, text.match(regex)[0].toUpperCase());
        return (
            <div id={ type }>
                <div id={ type.concat("-text") } type={ type }>{ text }</div>
                <div>
                    { switches[0][type][0].code }<Switch type={ type } handleClick={ this.props.handleClick }/>{ switches[0][type][1].code }
                </div>
                
            </div>
        );
    }
}

class Switch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        return (
            <div id={ type.concat("-switch") }>
                <label className="switch">
                    <input type="checkbox" id={ type } onClick={ this.props.handleClick }/>
                    { type == POWER &&
                        <span className="slider round"></span>    
                    }
                    { type == BANK &&
                        <span className="slider-bank round"></span>    
                    }
                </label>
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.querySelector('main'));