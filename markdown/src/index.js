const EDITOR = 'editor';
const PREVIEW = 'preview';

// React
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: placeholder,
            expand: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

    async handleClick() {
        let type = (event.target.id).replace("-icon", "");
        console.log("type:", type);

        const promise = new Promise((resolve, reject) => {
            resolve(
                this.setState(state => {
                    let expand = null;
                    console.log("state.expand:", state.expand);
                    state.expand == '' ? expand = type : expand = '';
                    return ({
                        expand: expand
                    });
                })
            );
        });

        const result = await promise;
        promise.then(() => {
            console.log("state:", this.state);
            switch(this.state.expand) {
                case EDITOR:
                    $(('#').concat(EDITOR).concat("-container")).addClass('expand-container');
                    $(('#').concat(EDITOR).concat("-icon")).removeClass('fa-expand-arrows-alt');
                    $(('#').concat(EDITOR).concat("-icon")).addClass('fa-compress-arrows-alt');
                    $(('#').concat(PREVIEW).concat("-container")).addClass('hide-container');
                    break;

                case PREVIEW:
                    $(('#').concat(PREVIEW).concat("-container")).addClass('expand-container');
                    $(('#').concat(PREVIEW).concat("-icon")).removeClass('fa-expand-arrows-alt');
                    $(('#').concat(PREVIEW).concat("-icon")).addClass('fa-compress-arrows-alt');
                    $(('#').concat(EDITOR).concat("-container")).addClass('hide-container');
                    break;

                default:
                    $(('#').concat(EDITOR).concat("-container")).removeClass('expand-container');
                    $(('#').concat(PREVIEW).concat("-container")).removeClass('expand-container');
                    $(('#').concat(EDITOR).concat("-icon")).addClass('fa-expand-arrows-alt');
                    $(('#').concat(PREVIEW).concat("-icon")).addClass('fa-expand-arrows-alt');
                    $(('#').concat(EDITOR).concat("-icon")).removeClass('fa-compress-arrows-alt');
                    $(('#').concat(PREVIEW).concat("-icon")).removeClass('fa-compress-arrows-alt');
                    $(('#').concat(EDITOR).concat("-container")).removeClass('hide-container');
                    $(('#').concat(PREVIEW).concat("-container")).removeClass('hide-container');
                    
            }
        });
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        let input = this.state.input;
        let expand = this.state.expand;
        return ( 
            <div>
                <div id="main"className="container-fluid" >
                <Container type={ EDITOR } input={ input } expand={ expand } handleChange={ this.handleChange } handleClick={ this.handleClick }/>
                <Container type={ PREVIEW } input={ input } expand={ expand } handleClick={ this.handleClick }/>
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

    shouldComponentUpdate() {
        return true;
    }

    render() {
        let type = this.props.type;
        let input = this.props.input;
        return ( 
            <div id={ type.concat("-container") } className={"app-container"} >
                <ContainerHeader type={ type } handleClick={ this.props.handleClick }/> 
                {
                type == EDITOR && <ContainerContents type={ type } input={ input } handleChange={ this.props.handleChange }/>
                } 
                {
                type == PREVIEW && <ContainerContents type={ type } input={ input }/>
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
                    <a onClick={ this.props.handleClick }>
                        <i id={ type.concat("-icon") } className="fas fa-expand-arrows-alt"></i>
                    </a>
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