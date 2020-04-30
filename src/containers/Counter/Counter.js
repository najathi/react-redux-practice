import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../store/actions/index';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAdditionCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter.bind(this, 10)} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult =>
                        <li
                            key={strResult.id}
                            // onClick={this.props.onDeleteResult.bind(this, strResult.id)}>
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

// without using action creator
/* const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdditionCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        onSubtractCounter: (number) => dispatch({ type: actionTypes.SUBTRACT, value: number }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    };
}; */

// using action creator
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onAdditionCounter: () => dispatch(actionCreator.add(10)),
        onSubtractCounter: (number) => dispatch(actionCreator.subtract(number)),
        onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreator.deleteStore(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);