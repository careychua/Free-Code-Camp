class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '012345567890123456',
            display: 'display'
        };
    }

    render() {
        const emptyRow = <tr className="empty-row"></tr>;
        return (
            <div id={ CALCULATOR }>
                <table>
                    <tbody>
                        <Display type={ TEXT } input={ this.state.input } display={ this.state.display }/>
                        <Display type={ INPUT } input={ this.state.input } display={ this.state.display }/>
                        <Row rowNum={ 1 }/>
                        { emptyRow }
                        <Row rowNum={ 2 }/>
                        { emptyRow }
                        <Row rowNum={ 3 }/>
                        { emptyRow }
                        <Row rowNum={ 4 }/>
                        { emptyRow }
                        <Row rowNum={ 5 }/>
                        { emptyRow }
                    </tbody>
                </table>
            </div>
        );
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = this.props.type;
        let input = this.props.input;
        let display = this.props.display;

        return (
            <tr id={ DISPLAY.concat("-row-").concat(type) } className="display-row">
                <td id={ DISPLAY.concat("-").concat(type) } colSpan="4">
                    { type == TEXT ? display : input }
                </td>
            </tr>
        );
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rowNum = this.props.rowNum;
        return (
            <tr id={ ('row-').concat(rowNum) }>
                <Data rowNum={ rowNum } dataNum={ 1 }/>
                { rowNum != 5  && <Data rowNum={ rowNum } dataNum={ 2 }/> }
                <Data rowNum={ rowNum } dataNum={ 3 }/>
                { rowNum != 5  && <Data rowNum={ rowNum } dataNum={ 4 }/> }
            </tr>
        );
    }
}

class Data extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let rowNum = this.props.rowNum;
        let dataNum = this.props.dataNum;
        let data = calculatorLayout[rowNum][dataNum];
        if (rowNum == 4 && dataNum == 4) {
            document.querySelector(('#').concat(data.id)).setAttribute("rowspan", 4);
        }
        if (rowNum == 5 && dataNum == 1) {
            document.querySelector(('#').concat(data.id)).setAttribute("colspan", 2);
        }
    }

    render() {
        let rowNum = this.props.rowNum;
        let dataNum = this.props.dataNum;
        let data = calculatorLayout[rowNum][dataNum];
        let dataClasses = classes.filter(item => (item.regex).test(data.text));
        return (
            <td id={ data.id } className={ dataClasses[0].class } rowSpan="2">
                { data.text }
            </td>
        );
    }
}

ReactDOM.render(<Calculator/>, document.querySelector('main'));

function uppercaseFirstLetter(string) {
    let regex = /[a-z]/i;
    return string.replace(regex, string[0].toUpperCase());
}