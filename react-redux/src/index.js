/* React component */
    // class DisplayMessages extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = {
    //         input: '',
    //         messages: []
    //       }
    //       this.handleChange = this.handleChange.bind(this);
    //       this.submitMessage = this.submitMessage.bind(this);
    //     }
        
    //     handleChange(event) {
    //         this.setState({ 
    //             input: event.target.value 
    //         });
    //     }

    //     submitMessage() {
    //         this.setState({
    //             messages: this.state.messages.concat(this.state.input)
    //         });
    //         this.setState({
    //             input: ''
    //         });
    //     }
    
    //     render() {
    //        let messagesList = this.state.messages.map(item => {
    //            return (
    //                <li>{item}</li>
    //            );
    //        });
    //       return (
    //         <div>
    //           <h2>Type in a new Message:</h2>
    //           <input onChange={this.handleChange} value={this.state.input} />
    //           <button onClick={this.submitMessage}>Submit</button>
    //           <ul>{messagesList}</ul>
    //         </div>
    //       );
    //     }
    //   };
    
    // ReactDOM.render(<DisplayMessages />, document.getElementById('challenge-node'));


/* Extract state logic to redux */
    // const ADD = 'ADD';

    // const addMessage = (message) => {
    //     return ({
    //         type: ADD,
    //         message
    //     });
    // };

    // const messageReducer = (state = [], action) => {
    //     switch(action.type) {
    //         case ADD:
    //             return ([...state, action.message]);
            
    //         default:
    //             return state;
    //     }
    // };

    // const store = Redux.createStore(messageReducer);


/* Use Provider to connect Redux to React */

    // // Redux Code:
    // const ADD = 'ADD';

    // const addMessage = (message) => {
    //   return {
    //     type: ADD,
    //     message
    //   }
    // };

    // const messageReducer = (state = [], action) => {
    //   switch (action.type) {
    //     case ADD:
    //       return [
    //         ...state,
    //         action.message
    //       ];
    //     default:
    //       return state;
    //   }
    // };

    // const store = Redux.createStore(messageReducer);

    // // React Code:

    // class DisplayMessages extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       input: '',
    //       messages: []
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.submitMessage = this.submitMessage.bind(this);
    //   }
    //   handleChange(event) {
    //     this.setState({
    //       input: event.target.value
    //     });
    //   }
    //   submitMessage() {
    //     const currentMessage = this.state.input;
    //     this.setState({
    //       input: '',
    //       messages: this.state.messages.concat(currentMessage)
    //     });
    //   }
    //   render() {
    //     return (
    //       <div>
    //         <h2>Type in a new Message:</h2>
    //         <input
    //           value={this.state.input}
    //           onChange={this.handleChange}/><br/> 
    //         <button onClick={this.submitMessage}>Submit</button>
    //         <ul>
    //           {this.state.messages.map( (message, idx) => {
    //               return (
    //                  <li key={idx}>{message}</li>
    //               )
    //             })
    //           }
    //         </ul>
    //       </div>
    //     );
    //   }
    // };

    // const Provider = ReactRedux.Provider;

    // class AppWrapper extends React.Component {
    //     constructor(props) {
    //         super(props);
    //     }

    //     render() {
    //         return (
    //             <Provider store={store}>
    //                 <DisplayMessages />
    //             </Provider>
    //         );
    //     }
    // }

    // ReactDOM.render(<AppWrapper />, document.getElementById('challenge-node'));


/* Map state to Props */
    // const state = [];

    // const mapStateToProps = (state) => { 
    //     return ({
    //         messages: state 
    //     });    
    // };


/* Map dispatch to Props */
    // const addMessage = (message) => {
    //     return {
    //       type: 'ADD',
    //       message: message
    //     }
    //   };

    // const mapDispatchToProps = (dispatch) => {
    //     return ({
    //         submitNewMessage: (message) => dispatch(addMessage(message))
    //     });
    // };


/* Connect Redux to React */
    // const addMessage = (message) => {
    //     return {
    //       type: 'ADD',
    //       message: message
    //     }
    //   };
    
    //   const mapStateToProps = (state) => {
    //     return {
    //       messages: state
    //     }
    //   };
    
    //   const mapDispatchToProps = (dispatch) => {
    //     return {
    //       submitNewMessage: (message) => {
    //         dispatch(addMessage(message));
    //       }
    //     }
    //   };
    
    //   class Presentational extends React.Component {
    //     constructor(props) {
    //       super(props);
    //     }
    //     render() {
    //       return <h3>This is a Presentational Component</h3>
    //     }
    //   };
    
    //   const connect = ReactRedux.connect;
    //   const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);


/* Connect Redux to React: Full Example */

    // // Redux:
    // const ADD = 'ADD';

    // const addMessage = (message) => {
    //   return {
    //     type: ADD,
    //     message: message
    //   }
    // };

    // const messageReducer = (state = [], action) => {
    //   switch (action.type) {
    //     case ADD:
    //       return [
    //         ...state,
    //         action.message
    //       ];
    //     default:
    //       return state;
    //   }
    // };

    // const store = Redux.createStore(messageReducer);

    // // React:
    // class Presentational extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       input: '',
    //       messages: []
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.submitMessage = this.submitMessage.bind(this);
    //   }
    //   handleChange(event) {
    //     this.setState({
    //       input: event.target.value
    //     });
    //   }
    //   submitMessage() {
    //     const currentMessage = this.state.input;
    //     this.setState({
    //       input: '',
    //       messages: this.state.messages.concat(currentMessage)
    //     });
    //   }
    //   render() {
    //     return (
    //       <div>
    //         <h2>Type in a new Message:</h2>
    //         <input
    //           value={this.state.input}
    //           onChange={this.handleChange}/><br/>
    //         <button onClick={this.submitMessage}>Submit</button>
    //         <ul>
    //           {this.state.messages.map( (message, idx) => {
    //               return (
    //                  <li key={idx}>{message}</li>
    //               )
    //             })
    //           }
    //         </ul>
    //       </div>
    //     );
    //   }
    // };

    // // React-Redux:
    // const mapStateToProps = (state) => {
    //   return { messages: state }
    // };

    // const mapDispatchToProps = (dispatch) => {
    //   return {
    //     submitNewMessage: (newMessage) => {
    //        dispatch(addMessage(newMessage))
    //     }
    //   }
    // };

    // const Provider = ReactRedux.Provider;
    // const connect = ReactRedux.connect;

    // const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

    // class AppWrapper extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }
    //   render() {
    //       return (
    //         <Provider store={store}>
    //             <Container />
    //         </Provider>
    //       );
        
    //   }
    // };

    // ReactDOM.render(<AppWrapper />, document.getElementById('challenge-node'));


/* Extract local state to redux */

    // // Redux:
    // const ADD = 'ADD';

    // const addMessage = (message) => {
    //   return {
    //     type: ADD,
    //     message: message
    //   }
    // };

    // const messageReducer = (state = [], action) => {
    //   switch (action.type) {
    //     case ADD:
    //       return [
    //         ...state,
    //         action.message
    //       ];
    //     default:
    //       return state;
    //   }
    // };

    // const store = Redux.createStore(messageReducer);

    // // React:
    // const Provider = ReactRedux.Provider;
    // const connect = ReactRedux.connect;

    // class Presentational extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       input: ''
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.submitMessage = this.submitMessage.bind(this);
    //   }
    //   handleChange(event) {
    //     this.setState({
    //       input: event.target.value
    //     });
    //   }
    //   submitMessage() {
    //     this.props.submitNewMessage(this.state.input);
    //     this.setState({
    //       input: ''
    //     });
    //   }
    //   render() {
    //     return (
    //       <div>
    //         <h2>Type in a new Message:</h2>
    //         <input
    //           value={this.state.input}
    //           onChange={this.handleChange}/><br/>
    //         <button onClick={this.submitMessage}>Submit</button>
    //         <ul>
    //           {this.props.messages.map( (message, idx) => {
    //               return (
    //                  <li key={idx}>{message}</li>
    //               )
    //             })
    //           }
    //         </ul>
    //       </div>
    //     );
    //   }
    // };


    // const mapStateToProps = (state) => {
    //   return {messages: state}
    // };

    // const mapDispatchToProps = (dispatch) => {
    //   return {
    //     submitNewMessage: (message) => {
    //       dispatch(addMessage(message))
    //     }
    //   }
    // };

    // const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

    // class AppWrapper extends React.Component {
    //   render() {
    //     return (
    //       <Provider store={store}>
    //         <Container/>
    //       </Provider>
    //     );
    //   }
    // };
    
    // ReactDOM.render(<AppWrapper/>, document.getElementById('challenge-node'));

/* Test code below */



