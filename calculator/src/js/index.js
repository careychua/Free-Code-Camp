// React
class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: STR_0,
            display: EMPTY_STR,
            textArr: EMPTY_ARR
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("handleClick", this.state.textArr);
        let input = this.state.input;
        let textArr = this.state.textArr;
        let id = event.target.id;
        let idObj = calculator[id];
        let newTextArr = [...textArr];
        let lastIdx = textArr.length - 1;
        let newTextObj = {
            text: idObj.text,
            class: idObj.class
        };
        let display = null;
        let result = null;
        let holdTime = 0;
        
        if (textArr.length == 0) {
            if (idObj.class == DECIMAL || idObj.class == NUMBER) {
                newTextArr = [...textArr, newTextObj];
                if(idObj.text == STR_DECIMAL) {
                    newTextArr[0].text = (STR_0).concat(newTextArr[0].text);
                    newTextArr[0].class = FLOAT;
                }
            }
        }
        else {  // text not empty
            let prevTextObj = textArr[textArr.length - 1];
            
            switch (idObj.class) {
                case CLEAR:
                    console.log("CLEAR");
                    newTextArr = [];
                    break;

                case DELETE:
                    console.log("DELETE", newTextArr);
                    if (input.length > 0) {
                        let newText  = newTextArr[lastIdx].text;
                        newText = newText.substring(0, newText.length - 1);
                        newTextArr[lastIdx].text = newText;
                        if (newText.length == 0) {
                            newTextArr.pop();
                        }
                    }
                    break;

                case OPERATOR:
                    console.log("OPERATOR");
                    if ((prevTextObj.class == NUMBER || prevTextObj.class == FLOAT) && prevTextObj.text != STR_0 && prevTextObj.text != STR_SUBTRACT) {
                        newTextArr = [...newTextArr, newTextObj];
                    }
                    else if (prevTextObj.class == OPERATOR) {
                        if (prevTextObj.text != STR_SUBTRACT && id == SUBTRACT) {
                            newTextObj.class = NUMBER;
                            newTextArr = [...newTextArr, newTextObj];
                        }
                        else {
                            newTextArr[lastIdx].text = idObj.text;
                        }
                    }
                    break;

                case NUMBER:
                    console.log("NUMBER");
                    if (prevTextObj.text.length <= MAX_DIGITS) {
                        if (prevTextObj.text != STR_0) {
                            if (prevTextObj.class == OPERATOR) {
                                newTextArr = [...newTextArr, newTextObj];
                            }
                            else if (prevTextObj.class == NUMBER || prevTextObj.class == DECIMAL || prevTextObj.class == FLOAT) {
                                newTextArr[lastIdx].text = (newTextArr[lastIdx].text).concat(idObj.text);
                            }
                        }
                        else {
                            newTextArr[lastIdx].text = idObj.text;
                        }
                    }
                    else {
                        console.log("hit limit");
                        this.setState({
                            input: STR_MAX
                        });
                        holdTime = 1000;
                    }
                    break;

                case DECIMAL:
                    console.log("DECIMAL");
                    if (prevTextObj.class == OPERATOR || prevTextObj.class == NUMBER) {
                        if (prevTextObj.class == NUMBER) {
                            if (prevTextObj.text == STR_SUBTRACT) {
                                newTextArr[lastIdx].text = (newTextArr[lastIdx].text).concat(STR_0);
                            }
                            newTextArr[lastIdx].text = (newTextArr[lastIdx].text).concat(idObj.text);
                            newTextArr[lastIdx].class = FLOAT;
                        }
                        else {
                            newTextObj.text = STR_0.concat(newTextObj.text);
                            newTextObj.class = FLOAT;
                            newTextArr = [...newTextArr, newTextObj];     
                        }                 
                    }
                    break;

                case EQUALS:
                    console.log("EQUALS");
                    if (prevTextObj.class == OPERATOR) {
                        newTextArr.pop();
                    }
                    result = computeResult(newTextArr);
                    break;
            }          
        }
        
        display = newTextArr.map(item => item.text).join(EMPTY_STR);
        if (id == EQUALS) {
            display = display.concat('=', result);
        }
        let newInput = EMPTY_STR;
        if (newTextArr.length > 0) {
            if (id == EQUALS) {
                newInput = result;
                newTextArr = [];
                /./.test(result) ? 
                newTextArr = [{
                    text: result.toString(),
                    class: FLOAT
                }]:
                newTextArr =[{
                    text: result.toString,
                    class: NUMBER
                }]
            }
            else {
                newInput = newTextArr[newTextArr.length - 1].text;
            }            
        }
        else {
            newInput = STR_0;
        }

        setTimeout(() => {
            this.setState({
                input: newInput,
                display: display,
                textArr: newTextArr
            });
        }, holdTime);
    }

    render() {
        const emptyRow = <tr className="empty-row"></tr>;
        return (
            <div id={ CALCULATOR }>
                <table>
                    <tbody>
                        <Display input={ this.state.input } text={ this.state.display }/>
                        <Row rowNum={ 1 } handleClick={ this.handleClick }/>
                        <Row rowNum={ 2 } handleClick={ this.handleClick }/>
                        <Row rowNum={ 3 } handleClick={ this.handleClick }/>
                        <Row rowNum={ 4 } handleClick={ this.handleClick }/>
                        <Row rowNum={ 5 } handleClick={ this.handleClick }/>
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
        let input = this.props.input;
        let text = this.props.text;

        return (
            <tr id={ DISPLAY.concat("-row") }>
                <td id={ DISPLAY.concat("-data") }  colSpan="4" >
                    <div id={ DISPLAY.concat("-text") } className={ DISPLAY.concat("-text") }>{ this.props.text }</div>
                    <div id={ DISPLAY } className={ DISPLAY }>{ this.props.input }</div>
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
                <Data rowNum={ rowNum } dataNum={ 1 } handleClick={ this.props.handleClick }/>
                { (rowNum != 5 && rowNum)  && <Data rowNum={ rowNum } dataNum={ 2 } handleClick={ this.props.handleClick }/> }
                <Data rowNum={ rowNum } dataNum={ 3 } handleClick={ this.props.handleClick }/>
                { rowNum != 5  && <Data rowNum={ rowNum } dataNum={ 4 } handleClick={ this.props.handleClick }/> }
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
        let selector = ('#').concat(calculatorLayout[rowNum][dataNum].id).concat("-cell");
        if (rowNum == 4 && dataNum == 4) {
            document.querySelector(selector).setAttribute("rowspan", 2);
        }
        if (rowNum == 5 && dataNum == 1) {
            document.querySelector(selector).setAttribute("colspan", 2);
        }
    }

    render() {
        let rowNum = this.props.rowNum;
        let dataNum = this.props.dataNum;
        let data = calculatorLayout[rowNum][dataNum];
        return (
            <td id={ (data.id).concat("-cell") } >
                <a id={ data.id } className={ data.class } onClick={ this.props.handleClick }>
                    { data.text }
                </a>
            </td>
        );
    }
}

ReactDOM.render(<Calculator/>, document.querySelector('main'));