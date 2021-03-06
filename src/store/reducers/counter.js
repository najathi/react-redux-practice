import * as actionTypes from '../actions/actionsTypes';
import { updatedObject } from '../utility';

const initialState = {
	counter: 0,
};

// using utility functions
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return updatedObject(state, { counter: state.counter + 1 })
		case actionTypes.DECREMENT:
			return updatedObject(state, { counter: state.counter - 1 })
		case actionTypes.ADD:
			return updatedObject(state, { counter: state.counter + action.value })
		case actionTypes.SUBTRACT:
			return updatedObject(state, { counter: state.counter - action.value })
		default:
			return state;
	}


	/* const reducer = (state = initialState, action) => {
		switch (action.type) {
			case actionTypes.INCREMENT:
				const newState = Object.assign({}, state);
				newState.counter = state.counter + 1;
				return newState;
			case actionTypes.DECREMENT:
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
			default:
				return state;
		} */

	// if (action.type === 'INCREMENT') {
	// 	return {
	// 		...state,
	// 		counter: state.counter + 1
	// 	};
	// }
	// if (action.type === 'DECREMENT') {
	// 	return {
	// 		...state,
	// 		counter: state.counter - 1
	// 	}
	// }
	// if (action.type === 'ADD') {
	// 	return {
	// 		...state,
	// 		counter: state.counter + action.value
	// 	}
	// }
	// if (action.type === 'SUBTRACT') {
	// 	return {
	// 		...state,
	// 		counter: state.counter - action.value
	// 	}
	// }
	// return state;
}

export default reducer;