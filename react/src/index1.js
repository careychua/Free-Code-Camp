/* variable */
    // const JSX = 
    //     <div>
    //         <h1>Hello JSX!</h1>
    //     </div>;


/* comment */
    // const JSX = (
    //     <div>
    //         <h1>Hello World</h1>
    //         {/* comments */}                       
    //         <p>Lets render this to the DOM</p>
    //     </div>
    // );

/* class attribute */
    // const JSX = (
    //     <div className='myDiv'>
    //       <h1>Add a class to this div</h1>
    //     </div>
    //   );

/* self-closing tags */
    // const JSX = (
    //     <div>
    //       <h2>Welcome to React!</h2> 
    //       <br />
    //       <p>Be sure to close all tags!</p>
    //       <hr />
    //     </div>
    //   );

/* functional component */
    // const MyComponent = function() {
    //     return (<div>string-ello</div>);
    //   };

/* class component by class */
    // class MyComponent extends React.Component {
    //     constructor(props) {
    //         super(props);
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <h1>Hello React!</h1>
    //             </div>
    //         );
    //     }
    // };

/* Parent and child components */
    // const ChildComponent = () => {
    //     return (
    //       <div>
    //         <p>I am the child</p>
    //       </div>
    //     );
    //   };
  
    //   class ParentComponent extends React.Component {
    //     constructor(props) {
    //       super(props);
    //     }
    //     render() {
    //       return (
    //         <div>
    //           <h1>I am the parent</h1>
    //           <ChildComponent />
    //         </div>
    //       );
    //     }
    //   };

/* Nesting */
    // const TypesOfFruit = () => {
    //     return (
    //       <div>
    //         <h2>Fruits:</h2>
    //         <ul>
    //           <li>Apples</li>
    //           <li>Blueberries</li>
    //           <li>Strawberries</li>
    //           <li>Bananas</li>
    //         </ul>
    //       </div>
    //     );
    //   };
    
    //   const Fruits = () => {
    //     return (
    //       <div>
    //         <TypesOfFruit />
    //       </div>
    //     );
    //   };
    
    //   class TypesOfFood extends React.Component {
    //     constructor(props) {
    //       super(props);
    //     }
    
    //     render() {
    //       return (
    //         <div>
    //           <h1>Types of Food:</h1>
    //           <Fruits />
    //         </div>
    //       );
    //     }
    //   };

/* Test Code */


  


ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
