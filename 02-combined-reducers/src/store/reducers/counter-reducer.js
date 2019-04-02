import * as actionTypes from '../actions';

const initState = {
    counter: 0
}

//reducer manipulates the state and returns new state.
//state manipulation should be immutable
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: 
            //one way of returning immutable object
            const newState = Object.assign({}, state); //create clone of previous state
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:     
            //easy way to return immutable state
            return { 
                ...state,
                counter: state.counter - 1 
            }
        case actionTypes.ADD: 
            return { 
                ...state,
                counter: state.counter + action.value 
            }
        case actionTypes.SUBTRACT: 
            return { 
                ...state,
                counter: state.counter - action.value
            }
    }
    //state need to be returned if no match
    return state;
}

export default counterReducer;