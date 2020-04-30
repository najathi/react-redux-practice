import * as actionTypes from '../actions/actionsTypes';
import { updatedObject } from '../utility';

const initialState = {
	results: []
};

const deleteResult = (state, action) => {
	const updatedArray = state.results.filter(result => result.id !== action.resultElId);
	return updatedObject(state, { results: updatedArray });
};

//using utility functions
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			// change data transformation
			return updatedObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) })
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const newArray = [...state.results];
			// newArray.splice(id, 1);

			return deleteResult(state, action);
		default:
			return state;
	}
}

/* const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			// change data transformation
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result })
			}
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const newArray = [...state.results];
			// newArray.splice(id, 1);

			const updatedArray = state.results.filter(result => result.id !== action.resultElId);
			return {
				...state,
				results: updatedArray
			}
		default:
			return state;
	}
} */

export default reducer;