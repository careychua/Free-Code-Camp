const EDITOR = 'editor';
const PREVIEW = 'preview';

// React
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: placeholder
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        let input = this.state.input;
        return ( 
            <div>
                <div id="main"className="container-fluid" >
                <Container type={ EDITOR } input={ input } handleChange={ this.handleChange }/>
                <Container type={ PREVIEW } input={ input }/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const Footer = () => {
    return (
        <footer> by Carey Chua </footer>
    );
};

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        let input = this.props.input;
        return ( 
            <div id={ this.props.type.concat("-container") } className="app-container" >
                <ContainerHeader type={ type }/> 
                {
                type == EDITOR && <ContainerContents type={ type } input={ input } handleChange={ this.props.handleChange } />
                } 
                {
                type == PREVIEW && <ContainerContents type={ type } input={ input } />
                }
            </div>
        );
    }
}

class ContainerHeader extends React.Component {
    constructor(props) {
        super(props);

        this.returnHeader = this.returnHeader.bind(this);
    }

    returnHeader(text) {
        let firstLetter = text.substring(0, 1).toUpperCase();
        let textRemain = text.substring(1);
        let newText = firstLetter.concat(textRemain);
        text == PREVIEW ? newText = newText.concat("er") : newText;
        return newText;
    }

    render() {
        let type = this.props.type;
        let text = this.returnHeader(type);

        return (
            <div id={ type.concat("-header") } className="container-header">
                <div> { text } </div>
                <div id="icon">
                    <i className="fas fa-expand-arrows-alt"></i>
                </div>
            </div>
        );
    }
}

class ContainerContents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        let input = this.props.input;
        let classes = ('container-contents contents-').concat(type)
        return (
            <div id={ type.concat("-contents") } className={ classes }>
                { type == EDITOR && 
                    <Editor type={ type } input={ input } handleChange={ this.props.handleChange } /> 
                }
                { type == PREVIEW && 
                    <Previewer type={ type } input={ input } />
                }
            </div>
        );
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        let input = this.props.input;
        return (
            <textarea id={ type } onChange={ this.props.handleChange } value={ input } />
        );
    }
}

class Previewer extends React.Component {
    constructor(props) {
        super(props);

        this.updateContents = this.updateContents.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate() {
        this.updateContents();
    }

    componentDidMount() {
        this.updateContents();
    }

    updateContents() {
        let type = ('#').concat(this.props.type);
        let input = this.props.input;
        document.querySelector(type).innerHTML = marked(input);
    }

    render() {
        let type = this.props.type;
        return (
            <p id={ type } className="markdown-body"></p>
        );
    }
}

ReactDOM.render(<App /> , document.querySelector('main'));