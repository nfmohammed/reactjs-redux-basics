import * as actionTypes from '../actions';

const initState = {
    results: []
}

//reducer manipulates the state and returns new state.
//state manipulation should be immutable
const resultReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //when reducers are combined, the reducer will no longer have access to global state hence state.counter will not work.
                //results: state.results.concat({id: new Date(), value: state.counter})
                results: state.results.concat({id: new Date(), value: action.result})
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

export default resultReducer;