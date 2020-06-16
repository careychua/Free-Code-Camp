async function main() {
    const promise = new Promise((resolve, reject) => {
        resolve(retrieveQuotes());
    });
    const result = await promise;
    promise.then((result) => {
        let quotes = [...result];
        
        // React
        class QuoteBox extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    index: 0
                }

                this.getNewQuote = this.getNewQuote.bind(this);
            }

            getNewQuote() {
                let newIndex = Math.floor(Math.random() * quotes.length);
                this.setState({
                    index: newIndex
                });
            }

            render() {
                let quote = quotes[this.state.index];
                let items = [];
                for (let key in quote) {
                    let text = quote[key];
                    if (key == 'author') {
                        items.push(
                            <div key={key} id={key}>- { text }</div>
                        );
                    }
                    else {
                        items.push(
                            <div key={key} id={key}>
                                <div>
                                    <span>
                                        <i className="fa fa-quote-left"></i> { text }
                                    </span>
                                </div>
                            </div>
                        );
                    }
                }
                return (
                    <div id="quote-box">
                        { items }
                        <Clickables newQuote={this.getNewQuote}/>
                    </div>
                );
            }
        }

        class Clickables extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    <div id="clickables">
                        <div className="col-xs-6">
                            <a id="tweet-quote" className="btn btn-block" href="https://twitter.com/intent/tweet">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div className="col-xs-6">
                            <a id="new-quote" className="btn btn-block" onClick={this.props.newQuote}>New Quote</a>
                        </div>
                    </div>  
                );
            }
        }

        ReactDOM.render(<QuoteBox />, document.querySelector('#quote-container'));

    });
    promise.catch((error) => {
        console.log("access result error", error);
    });
}

main();




    





