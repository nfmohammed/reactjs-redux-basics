import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    state = {
        counter: 0, //total count value
        results: [] //every counter that was cliked
    }

    // we will be replacing this functionality using redux
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract " clicked={this.props.onSubtractCounter}  />
            <hr></hr>
            <button onClick={this.props.onStoredResults}>Store Results</button>
            <ul>
                {this.props.storedResults.map( strResult => (
                    // if item is clicked then delete it
                    <li key={strResult.id} onClick={() => this.props.onDeleteResults(strResult.id)}>{strResult.value}</li>
                ))}
            </ul>

            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        //ctr is a property that can be used in this component
        //state.counter is a global property managed by redux
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //onIncrementCounter is a container property that has reference to dispatch method
        // type property is mandatory in dispatch function
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        
        // passing additional property along with type-property
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 10}),

        // store the new value of counter in array
        onStoredResults: () => dispatch({type: 'STORE_RESULT'}), 
        
        // this function needs to know which id to be
        onDeleteResults: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);