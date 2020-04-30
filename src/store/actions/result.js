import * as actionTypes from './actionsTypes';

// using with action creator
export const saveResult = (res) => {
	// change data transformation
	// const updatedResult = res * 2;
	return {
		type: actionTypes.STORE_RESULT,
		result: res
	};
}

export const storeResult = (res) => {
	return (dispatch, getState) => {
		setTimeout(() => {
			// const oldCounter = getState().ctr.counter;
			// console.log(getState());
			// console.log('oldCounter:', oldCounter);
			dispatch(saveResult(res));
		}, 2000);
	};
}

export const deleteStore = (resElId) => {
	return {
		type: actionTypes.DELETE_RESULT,
		resultElId: resElId
	};
}
