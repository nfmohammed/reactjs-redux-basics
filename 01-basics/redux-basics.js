const redux = require('redux');

const createStore = redux.createStore;

//State
const initialState = {
    counter: 0
};

//Redux
// if state is undefined then use initialState
const rootReducer = (state=initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscribe
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//Displatcing Action
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState()); //subscribe is executed before console.log

store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState()); //subscribe is executed before console.log



