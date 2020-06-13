/* Pass properties to stateless functional component */
    // const CurrentDate = (props) => {
    //     return (
    //     <div>
    //         <p>The current date is: {props.date}</p>
    //     </div>
    //     );
    // };
    
    // class Calendar extends React.Component {
    //     constructor(props) {
    //     super(props);
    //     }
    //     render() {
    //     return (
    //         <div>
    //         <h3>What date is it?</h3>
    //         <CurrentDate date={Date()}/>
    //         </div>
    //     );
    //     }
    // };

/* Pass array as props */
    // const List = (props) => {
    //     return <p>{props.tasks.join(", ")}</p>
    //   };
    
    //   class ToDo extends React.Component {
    //     constructor(props) {
    //       super(props);
    //     }
    //     render() {
    //       return (
    //         <div>
    //           <h1>To Do Lists</h1>
    //           <h2>Today</h2>
    //           <List tasks={["walk", "jog"]} />
    //           <h2>Tomorrow</h2>
    //           <List tasks={["run", "swim", "sleep"]} />
    //         </div>
    //       );
    //     }
    //   };

/* Default Props */
    // const ShoppingCart = (props) => {
    //     return (
    //       <div>
    //         <h1>Shopping Cart Component</h1>
    //       </div>
    //     )
    //   };

    // ShoppingCart.defaultProps = {
    //     items: 0
    // };

/* Override dafault Props */
    // const Items = (props) => {
    //     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    //   }
    
    //   Items.defaultProps = {
    //     quantity: 0
    //   }
    
    //   class ShoppingCart extends React.Component {
    //     constructor(props) {
    //       super(props);
    //     }
    //     render() {
    //       return <Items quantity={10} />
    //     }
    //   };

/* use PropTypes to define expected properties */
    // const Items = (props) => {
    //   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    // };
    
    // Items.propTypes = {
    //     quantity: PropTypes.number.isRequired
    // };
    
    // Items.defaultProps = {
    //   quantity: 0
    // };
    
    // class ShoppingCart extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }
    //   render() {
    //     return <Items />
    //   }
    // };

/* Access Props in classes */
  // class ReturnTempPassword extends React.Component {
  //   constructor(props) {
  //     super(props);

  //   }
  //   render() {
  //     return (
  //         <div>
  //             <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
  //         </div>
  //     );
  //   }
  // };

  // class ResetPassword extends React.Component {
  //   constructor(props) {
  //     super(props);

  //   }
  //   render() {
  //     return (
  //         <div>
  //           <h2>Reset Password</h2>
  //           <h3>We've generated a new temporary password for you.</h3>
  //           <h3>Please reset this password from your account settings ASAP.</h3>
  //           <ReturnTempPassword tempPassword="12345678" />  
  //         </div>
  //     );
  //   }
  // };

/* Access Props in functions */
  // class CampSite extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <Camper />
  //       </div>
  //     );
  //   }
  // };

  // const Camper = (props) => {
  //   return (
  //     <div>
  //       <p>{props.name}</p>
  //     </div>
  //   );
  // };

  // Camper.propTypes = {
  //   name: PropTypes.string.isRequired
  // };

  // Camper.defaultProps = {
  //   name: 'CamperBot'
  // };

/* Stateful Component: Use state directly */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: 'freeCodeCamp'
  //     }
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.state.name}</h1>
  //       </div>
  //     );
  //   }
  // };

/* Stateful Component: Use state as variable */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: 'freeCodeCamp'
  //     }
  //   }
  //   render() {
  //     const name = this.state.name;
  //     return (
  //       <div>
  //         <h1>{name}</h1>
  //       </div>
  //     );
  //   }
  // };

/* Set state */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: 'Initial State'
  //     };
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleClick() {
  //     this.setState({
  //       name: 'React Rocks!'
  //     });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.handleClick}>Click Me</button>
  //         <h1>{this.state.name}</h1>
  //       </div>
  //     );
  //   }
  // };

/* Bind 'this' to class method */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       text: "Hello"
  //     };
      
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleClick() {
  //     this.setState({
  //       text: "You clicked!"
  //     });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.handleClick}>Click Me</button>
  //         <h1>{this.state.text}</h1>
  //       </div>
  //     );
  //   }
  // };

/* Use state to toggle element */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       visibility: false
  //     };

  //     this.toggleVisibility = this.toggleVisibility.bind(this);
  //   }

  //   toggleVisibility() {

  //     this.setState(state => {
  //       let visibility = null;
  //       if (state.visibility) {
  //         visibility = false;
  //       }
  //       else {
  //         visibility = true;
  //       }
  //       return ({
  //         visibility: visibility
  //       });
  //     });
  //   };

  //   render() {
  //     if (this.state.visibility) {
  //       return (
  //         <div>
  //           <button onClick={this.toggleVisibility}>Click Me</button>
  //           <h1>Now you see me!</h1>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <button onClick={this.toggleVisibility}>Click Me</button>
  //         </div>
  //       );
  //     }
  //   }
  // };

/* State: Counters */
  // class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0
  //     };

  //     this.increment = this.increment.bind(this);
  //     this.decrement = this.decrement.bind(this);
  //     this.reset = this.reset.bind(this);
  //   }

  //   increment(){
  //     this.setState(state => {
  //       return ({
  //         count: state.count + 1
  //       });
  //     });
  //   };

  //   decrement(){
  //     this.setState(state => {
  //       return ({
  //         count: state.count - 1
  //       });
  //     });
  //   };

  //   reset() {
  //     this.setState({count: 0});
  //   };

  //   render() {
  //     return (
  //       <div>
  //         <button className='inc' onClick={this.increment}>Increment!</button>
  //         <button className='dec' onClick={this.decrement}>Decrement!</button>
  //         <button className='reset' onClick={this.reset}>Reset</button>
  //         <h1>Current Count: {this.state.count}</h1>
  //       </div>
  //     );
  //   }
  // };


/* Controlled input */
  // class ControlledInput extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       input: ''
  //     };

  //     this.handleChange = this.handleChange.bind(this);
  //   }

  //   handleChange(event) {
  //     this.setState({input: event.target.value});
  //   };

  //   render() {
  //     return (
  //       <div>
  //         <input onChange={this.handleChange} value={this.state.input}></input>
  //         <h4>Controlled Input:</h4>
  //         <p>{this.state.input}</p>
  //       </div>
  //     );
  //   }
  // };


/* Controlled Form */
  // class MyForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       input: '',
  //       submit: ''
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange(event) {
  //     this.setState({
  //       input: event.target.value
  //     });
  //   }

  //   handleSubmit(event) {
  //     this.setState(state => {
  //       return ({submit: state.input});
  //     });
  //     event.preventDefault();
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <form onSubmit={this.handleSubmit}>
  //           <input onChange={this.handleChange} value={this.state.input}></input>
  //           <button type='submit'>Submit!</button>
  //         </form>
  //         <h1>{this.state.submit}</h1>
  //       </div>
  //     );
  //   }
  // };


/* Pass state as Props to child */
  // class MyApp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: 'CamperBot'
  //     }
  //   }
  //   render() {
  //     return (
  //        <div>
  //          <Navbar name={this.state.name} />
  //        </div>
  //     );
  //   }
  // };

  // class Navbar extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  //     return (
  //     <div>
  //       <h1>Hello, my name is: {this.props.name} </h1>
  //     </div>
  //     );
  //   }
  // };


/* Pass callback as Props */
  // class MyApp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       inputValue: ''
  //     }
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleChange(event) {
  //     this.setState({
  //       inputValue: event.target.value
  //     });
  //   }
  //   render() {
  //     return (
  //        <div>
  //           <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
  //           <RenderInput input={this.state.inputValue} />
  //        </div>
  //     );
  //   }
  // };

  // class GetInput extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h3>Get Input:</h3>
  //         <input
  //           value={this.props.input}
  //           onChange={this.props.handleChange}/>
  //       </div>
  //     );
  //   }
  // };

  // class RenderInput extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h3>Input Render:</h3>
  //         <p>{this.props.input}</p>
  //       </div>
  //     );
  //   }
  // };


/* Lifecycle: componentWillMount() */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   componentWillMount() {
  //     console.log("Before");
  //   }
  //   render() {
  //     console.log("After");
  //     return <div />
  //   }
  // };


/* Lifecycle: componentDidMount() */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       activeUsers: null
  //     };
  //   }
  //   componentDidMount() {
  //     setTimeout( () => {
  //       this.setState({
  //         activeUsers: 1273
  //       });
  //     }, 2500);
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h1>Active Users: {this.state.activeUsers}</h1>
  //       </div>
  //     );
  //   }
  // };


/* Add event listeners */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message: ''
  //     };
  //     this.handleEnter = this.handleEnter.bind(this);
  //     this.handleKeyPress = this.handleKeyPress.bind(this);
  //   }
    
  //   componentDidMount() {
  //     document.addEventListener("keydown", this.handleKeyPress);
  //   }
  //   componentWillUnmount() {
  //     document.removeEventListener("keydown", this.handleKeyPress);
  //   }
    
  //   handleEnter() {
  //     this.setState({
  //       message: this.state.message + 'You pressed the enter key! '
  //     });
  //   }
  //   handleKeyPress(event) {
  //     if (event.keyCode === 13) {
  //       this.handleEnter();
  //     }
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.state.message}</h1>
  //       </div>
  //     );
  //   }
  // };


/* Optimise re-renders: shouldComponentUpdate() */
  // class OnlyEvens extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('Should I update?');
  //     if (nextProps.value % 2 != 0) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   componentDidUpdate() {
  //     console.log('Component re-rendered.');
  //   }
  //   render() {
  //     return <h1>{this.props.value}</h1>
  //   }
  // };

  // class Controller extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: 0
  //     };
  //     this.addValue = this.addValue.bind(this);
  //   }
  //   addValue() {
  //     this.setState({
  //       value: this.state.value + 1
  //     });
  //   }
  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.addValue}>Add</button>
  //         <OnlyEvens value={this.state.value}/>
  //       </div>
  //     );
  //   }
  // };


/* Inline styles: JSX */
  // class Colorful extends React.Component {
  //   render() {
  //     return (
  //       <div style={{color: "red", fontSize: 72}}>Big Red</div>
  //     );
  //   }
  // };


/* Inline Styles: React */
  // const styles = {
  //   color: "purple",
  //   fontSize: 40,
  //   border: "2px solid purple"
  // };
  // class Colorful extends React.Component {
  //   render() {
  //     return (
  //       <div style={styles}>Style Me!</div>
  //     );
  //   }
  // };


/* JavaScript in React */
  // const inputStyle = {
  //   width: 235,
  //   margin: 5
  // }

  // class MagicEightBall extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       userInput: '',
  //       randomIndex: ''
  //     }
  //     this.ask = this.ask.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   ask() {
  //     if (this.state.userInput) {
  //       this.setState({
  //         randomIndex: Math.floor(Math.random() * 20),
  //         userInput: ''
  //       });
  //     }
  //   }
  //   handleChange(event) {
  //     this.setState({
  //       userInput: event.target.value
  //     });
  //   }
  //   render() {
  //     const possibleAnswers = [
  //       'It is certain',
  //       'It is decidedly so',
  //       'Without a doubt',
  //       'Yes, definitely',
  //       'You may rely on it',
  //       'As I see it, yes',
  //       'Outlook good',
  //       'Yes',
  //       'Signs point to yes',
  //       'Reply hazy try again',
  //       'Ask again later',
  //       'Better not tell you now',
  //       'Cannot predict now',
  //       'Concentrate and ask again',
  //       'Don\'t count on it',
  //       'My reply is no',
  //       'My sources say no',
  //       'Most likely',
  //       'Outlook not so good',
  //       'Very doubtful'
  //     ];
  //     const answer = possibleAnswers[this.state.randomIndex];
  //     return (
  //       <div>
  //         <input
  //           type="text"
  //           value={this.state.userInput}
  //           onChange={this.handleChange}
  //           style={inputStyle} /><br />
  //         <button onClick={this.ask}>
  //           Ask the Magic Eight Ball!
  //         </button><br />
  //         <h3>Answer:</h3>
  //         <p>
  //           {answer}
  //         </p>
  //       </div>
  //     );
  //   }
  // };


/* Conditionals: if...else */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       display: true
  //     }
  //     this.toggleDisplay = this.toggleDisplay.bind(this);
  //   }
  //   toggleDisplay() {
  //     this.setState({
  //       display: !this.state.display
  //     });
  //   }
  //   render() {
  //     if(this.state.display) {
  //       return (
  //         <div>
  //           <button onClick={this.toggleDisplay}>Toggle Display</button>
  //           <h1>Displayed!</h1>
  //         </div>
  //      );
  //     }
  //     else {
  //       return (
  //         <div>
  //           <button onClick={this.toggleDisplay}>Toggle Display</button>
  //         </div>
  //      );
  //     }
  //   }
  // };


/* Conditionals: && */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       display: true
  //     }
  //     this.toggleDisplay = this.toggleDisplay.bind(this);
  //   }
  //   toggleDisplay() {
  //     this.setState(state => ({
  //       display: !state.display
  //     }));
  //   }
  //   render() {
  //     return (
  //        <div>
  //          <button onClick={this.toggleDisplay}>Toggle Display</button>
  //          { this.state.display && <h1>Displayed!</h1> }
  //        </div>
  //     );
  //   }
  // };


/* Conditionals: Ternary operator */
  // const inputStyle = {
  //   width: 235,
  //   margin: 5
  // }

  // class CheckUserAge extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       input: '',
  //       userAge: ''
  //     };
  //     this.submit = this.submit.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleChange(e) {
  //     this.setState({
  //       input: e.target.value,
  //       userAge: ''
  //     });
  //   }
  //   submit() {
  //     this.setState(state => ({
  //       userAge: state.input
  //     }));
  //   }
  //   render() {
  //     const buttonOne = <button onClick={this.submit}>Submit</button>;
  //     const buttonTwo = <button>You May Enter</button>;
  //     const buttonThree = <button>You Shall Not Pass</button>;
  //     const userAge = this.state.userAge;
  //     return (
  //       <div>
  //         <h3>Enter Your Age to Continue</h3>
  //         <input
  //           style={inputStyle}
  //           type="number"
  //           value={this.state.input}
  //           onChange={this.handleChange} /><br />
  //           {
  //             userAge == '' ? buttonOne 
  //             : userAge >= 18 ? buttonTwo
  //             : buttonThree
  //           }
  //       </div>
  //     );
  //   }
  // };


/* Render conditionally from Props */
  // class Results extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  //     return (
  //       <h1>
  //       {
  //         this.props.fiftyFifty ? "You Win!" : "You Lose!"
  //       }
  //       </h1>
  //     )
  //   };
  // };

  // class GameOfChance extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: 1
  //     }
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //   handleClick() {
  //     this.setState(state => {
  //       return ({
  //         counter: state.counter + 1
  //       });
  //     });
  //   }
  //   render() {
  //     const expression = Math.random() >= 0.5; 
  //     return (
  //       <div>
  //         <button onClick={this.handleClick}>Play Again</button>
  //         <Results fiftyFifty={expression} />
  //         <p>{'Turn: ' + this.state.counter}</p>
  //       </div>
  //     );
  //   }
  // };


/* Change Inline CSS based on component state */
  // class GateKeeper extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       input: ''
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleChange(event) {
  //     this.setState({ input: event.target.value })
  //   }
  //   render() {
  //     let inputStyle = "";

  //     if (this.state.input.length > 15) {
  //       inputStyle = {
  //         border: '3px solid red'
  //       };
  //     }
  //     else {
  //       inputStyle = {
  //         border: '1px solid black'
  //       };
  //     }
      
  //     return (
  //       <div>
  //         <h3>Don't Type Too Much:</h3>
  //         <input
  //           type="text"
  //           style={inputStyle}
  //           value={this.state.input}
  //           onChange={this.handleChange} />
  //       </div>
  //     );
  //   }
  // };


/* Dynamically render elements: Array.map() */
  // const textAreaStyles = {
  //   width: 235,
  //   margin: 5
  // };

  // class MyToDoList extends React.Component {
  //   constructor(props) {
  //     super(props);
      
  //     this.state = {
  //       userInput: '',
  //       toDoList: []
  //     };

  //     this.handleSubmit = this.handleSubmit.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleSubmit() {
  //     const itemsArray = this.state.userInput.split(',');
  //     this.setState({
  //       toDoList: itemsArray
  //     });
  //   }
  //   handleChange(e) {
  //     this.setState({
  //       userInput: e.target.value
  //     });
  //   }
  //   render() {
  //     const items = this.state.toDoList.map(item => {
  //       return (
  //         <li>{item}</li>
  //       );
  //     }); 
  //     return (
  //       <div>
  //         <textarea
  //           onChange={this.handleChange}
  //           value={this.state.userInput}
  //           style={textAreaStyles}
  //           placeholder="Separate Items With Commas" />
  //         <br />
  //         <button onClick={this.handleSubmit}>Create List</button>
  //         <h1>My "To Do" List:</h1>
  //         <ul>
  //           {items}
  //         </ul>
  //       </div>
  //     );
  //   }
  // };


/* Give sibling elements unique key attribute */
  // const frontEndFrameworks = [
  //   'React',
  //   'Angular',
  //   'Ember',
  //   'Knockout',
  //   'Backbone',
  //   'Vue'
  // ];

  // function Frameworks() {
  //   const renderFrameworks = frontEndFrameworks.map(item => {
  //     return (
  //       <li key={item}>{item}</li>
  //     );
  //   });
  //   return (
  //     <div>
  //       <h1>Popular Front End JavaScript Frameworks</h1>
  //       <ul>
  //         {renderFrameworks}
  //       </ul>
  //     </div>
  //   );
  // };


/* Dynamically filter array: Array.filter() */
  // class MyComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       users: [
  //         {
  //           username: 'Jeff',
  //           online: true
  //         },
  //         {
  //           username: 'Alan',
  //           online: false
  //         },
  //         {
  //           username: 'Mary',
  //           online: true
  //         },
  //         {
  //           username: 'Jim',
  //           online: false
  //         },
  //         {
  //           username: 'Sara',
  //           online: true
  //         },
  //         {
  //           username: 'Laura',
  //           online: true
  //         }
  //       ]
  //     }
  //   }
  //   render() {
  //     const usersOnline = this.state.users.filter(item => item.online);
  //     const renderOnline = usersOnline.map(item => {
  //       let name = item.username;
  //       return (
  //         <li key={name}>{name}</li>
  //       );
  //     });
  //     return (
  //        <div>
  //          <h1>Current Online Users:</h1>
  //          <ul>
  //            {renderOnline}
  //          </ul>
  //        </div>
  //     );
  //   }
  // };


/* Render React on server: renderToString */
  // class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  //     return <div/>
  //   }
  // };
  // ReactDOMServer.renderToString(<App />);

/* Test Code below */



ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));