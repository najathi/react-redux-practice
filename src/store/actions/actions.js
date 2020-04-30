/* Action Creator is just a function which return s an action or which create s an action , hence the name. We right now create out actions hard coded in our code or simply when we need them */

// using without action creator
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


// using with action creator
export const increment = () => {
	return {
		type: INCREMENT
	};
}

export const decrement = () => {
	return {
		type: DECREMENT
	};
}

export const add = (val) => {
	return {
		type: ADD,
		value: val
	};
}

export const subtract = (val) => {
	return {
		type: SUBTRACT,
		value: val
	};
}

export const saveResult = (res) => {
	return {
		type: STORE_RESULT,
		result: res
	};
}

export const storeResult = (res) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(saveResult(res));
		}, 2000);
	};
}

export const deleteStore = (resElId) => {
	return {
		type: DELETE_RESULT,
		resultElId: resElId
	};
}
