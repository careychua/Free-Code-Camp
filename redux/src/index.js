/* Create store */
    // const reducer = (state = 5) => {
    //     return state;
    //   }

    // const store = Redux.createStore(reducer);


/* Get state from store */
    // const store = Redux.createStore((state = 5) => state);
    // const currentState = store.getState();
  

/* Define action */
    // const action = {
    //     type: 'LOGIN'
    // }


/* Define action creator */
    // const action = {
    //     type: 'LOGIN'
    //   }

    // const actionCreator = () => action;


/* Dispatch action event */
    // const store = Redux.createStore(
    //     (state = {login: false}) => state
    //   );
    
    // const loginAction = () => {
    //     return {
    //       type: 'LOGIN'
    //     }
    //   };

    // store.dispatch(loginAction());


/* Handle action in store */
    // const defaultState = {
    //     login: false
    //   };
    
    //   const reducer = (state = defaultState, action) => {
    //     if (action.type == 'LOGIN') {
    //         return ({
    //             login: true
    //         });
    //     }

    //     return state;
    //   };
    
    //   const store = Redux.createStore(reducer);
    
    //   const loginAction = () => {
    //     return {
    //       type: 'LOGIN'
    //     }
    //   };


/* Switch for multiple actions */
    // const defaultState = {
    //     authenticated: false
    //   };
    
    //   const authReducer = (state = defaultState, action) => {
    //     switch(action.type) {
    //         case 'LOGIN':
    //             return ({
    //                 authenticated: true
    //             });

    //         case 'LOGOUT':
    //             return ({
    //                 authenticated: false
    //             });
            
    //         default:
    //             return state;
    //     }
    //   };
    
    //   const store = Redux.createStore(authReducer);
    
    //   const loginUser = () => {
    //     return {
    //       type: 'LOGIN'
    //     }
    //   };
    
    //   const logoutUser = () => {
    //     return {
    //       type: 'LOGOUT'
    //     }
    //   };


/* Use const for action types */
    // const LOGIN = 'LOGIN';
    // const LOGOUT = 'LOGOUT';

    // const defaultState = {
    //     authenticated: false
    //   };
    
    //   const authReducer = (state = defaultState, action) => {
    
    //     switch (action.type) {
    
    //       case LOGIN:
    //         return {
    //           authenticated: true
    //         }
    
    //       case LOGOUT:
    //         return {
    //           authenticated: false
    //         }
    
    //       default:
    //         return state;
    
    //     }
    
    //   };
    
    //   const store = Redux.createStore(authReducer);
    
    //   const loginUser = () => {
    //     return {
    //       type: LOGIN
    //     }
    //   };
    
    //   const logoutUser = () => {
    //     return {
    //       type: LOGOUT
    //     }
    //   };


/* Register store listener */
    // const ADD = 'ADD';

    // const reducer = (state = 0, action) => {
    //   switch(action.type) {
    //     case ADD:
    //       return state + 1;
    //     default:
    //       return state;
    //   }
    // };

    // const store = Redux.createStore(reducer);

    // // global count variable:
    // let count = 0;

    // store.subscribe(function() {count += 1});

    // store.dispatch({type: ADD});
    // console.log(count);
    // store.dispatch({type: ADD});
    // console.log(count);
    // store.dispatch({type: ADD});
    // console.log(count);


/* Combine multiple reducers */
  // const INCREMENT = 'INCREMENT';
  // const DECREMENT = 'DECREMENT';

  // const counterReducer = (state = 0, action) => {
  //   switch(action.type) {
  //     case INCREMENT:
  //       return state + 1;
  //     case DECREMENT:
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  // };

  // const LOGIN = 'LOGIN';
  // const LOGOUT = 'LOGOUT';

  // const authReducer = (state = {authenticated: false}, action) => {
  //   switch(action.type) {
  //     case LOGIN:
  //       return {
  //         authenticated: true
  //       }
  //     case LOGOUT:
  //       return {
  //         authenticated: false
  //       }
  //     default:
  //       return state;
  //   }
  // };

  // const rootReducer = Redux.combineReducers({
  //   count: counterReducer,
  //   auth: authReducer
  // });

  // const store = Redux.createStore(rootReducer);


/* Send action data to store */
  // const ADD_NOTE = 'ADD_NOTE';

  // const notesReducer = (state = 'Initial State', action) => {
  //   switch(action.type) {
  //     case ADD_NOTE:
  //       return action.text;
      
  //     default:
  //       return state;
  //   }
  // };

  // const addNoteText = (note) => {
  //   return ({
  //     type: ADD_NOTE,
  //     text: note
  //   });
  // };

  // const store = Redux.createStore(notesReducer);

  // console.log(store.getState());
  // store.dispatch(addNoteText('Hello!'));
  // console.log(store.getState());


/* Use middleware to handle async actions */
  // const REQUESTING_DATA = 'REQUESTING_DATA'
  // const RECEIVED_DATA = 'RECEIVED_DATA'

  // const requestingData = () => { return {type: REQUESTING_DATA} }
  // const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

  // const handleAsync = () => {
  //   return function(dispatch) {
  //     dispatch(requestingData());

  //     setTimeout(function() {
  //       let data = {
  //         users: ['Jeff', 'William', 'Alice']
  //       }
  //      dispatch(receivedData(data));

  //     }, 2500);
  //   }
  // };

  // const defaultState = {
  //   fetching: false,
  //   users: []
  // };

  // const asyncDataReducer = (state = defaultState, action) => {
  //   switch(action.type) {
  //     case REQUESTING_DATA:
  //       return {
  //         fetching: true,
  //         users: []
  //       }
  //     case RECEIVED_DATA:
  //       return {
  //         fetching: false,
  //         users: action.users
  //       }
  //     default:
  //       return state;
  //   }
  // };

  // const store = Redux.createStore(
  //   asyncDataReducer,
  //   Redux.applyMiddleware(ReduxThunk.default)
  // );


/* Counter */
  // const INCREMENT = 'INCREMENT';
  // const DECREMENT = 'DECREMENT';

  // const counterReducer = (state = 0, action) => {
  //   switch(action.type) {
  //     case INCREMENT:
  //       return state + 1;

  //     case DECREMENT:
  //       return state - 1;

  //     default:
  //       return state;
  //   }
  // };

  // const incAction = () => {
  //   return ({
  //     type: INCREMENT
  //   });
  // };

  // const decAction = () => {
  //   return ({
  //     type: DECREMENT
  //   });
  // };

  // const store = Redux.createStore(counterReducer);


/* DO NOT mutate state */
  // const ADD_TO_DO = 'ADD_TO_DO';

  // const todos = [
  //   'Go to the store',
  //   'Clean the house',
  //   'Cook dinner',
  //   'Learn to code',
  // ];

  // const immutableReducer = (state = todos, action) => {
  //   switch(action.type) {
  //     case ADD_TO_DO:
  //       return ([...state.slice(0), action.todo]);
  //     default:
  //       return state;
  //   }
  // };

  // const addToDo = (todo) => {
  //   return {
  //     type: ADD_TO_DO,
  //     todo
  //   }
  // }

  // const store = Redux.createStore(immutableReducer);


/* Use ... on arrays */
  // const immutableReducer = (state = ['Do not mutate state!'], action) => {
  //   switch(action.type) {
  //     case 'ADD_TO_DO':
  //       return ([...state, action.todo]);
  //     default:
  //       return state;
  //   }
  // };

  // const addToDo = (todo) => {
  //   return {
  //     type: 'ADD_TO_DO',
  //     todo
  //   }
  // }

  // const store = Redux.createStore(immutableReducer);


/* Remove item from array */
  // const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  //   switch(action.type) {
  //     case 'REMOVE_ITEM':
  //       return (state.slice(0, action.index).concat(state.slice(action.index +1)));
  //     default:
  //       return state;
  //   }
  // };

  // const removeItem = (index) => {
  //   return {
  //     type: 'REMOVE_ITEM',
  //     index
  //   }
  // }

  // const store = Redux.createStore(immutableReducer);


/* Copy object with Object.assign */
  // const defaultState = {
  //   user: 'CamperBot',
  //   status: 'offline',
  //   friends: '732,982',
  //   community: 'freeCodeCamp'
  // };

  // const immutableReducer = (state = defaultState, action) => {
  //   switch(action.type) {
  //     case 'ONLINE':
  //       let newState = Object.assign({}, state);
  //       newState.status = 'online';
  //       return newState;
  //     default:
  //       return state;
  //   }
  // };

  // const wakeUp = () => {
  //   return {
  //     type: 'ONLINE'
  //   }
  // };

  // const store = Redux.createStore(immutableReducer);

/* Test Code below */

