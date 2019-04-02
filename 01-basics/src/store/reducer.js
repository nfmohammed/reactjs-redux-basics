import * as actionTypes from './actions';

const initState = {
    counter: 0,
    results: []
}

//reducer manipulates the state and returns new state.
//state manipulation should be immutable
const reducer = (state = initState, action) => {
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat modify array in immutable way
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                // filter cretes a new array, hence immutable
                //results: state.results.filter(result => true) //this can be used to copy arrays
                results: state.results.filter(result => result.id !== action.resultElId)
            }
    }
    //state need to be returned if no match
    return state;
}

export default reducer;