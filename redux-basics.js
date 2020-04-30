// redux in node js way

const redux = require('redux');

const createStore = redux.createStore;

// Reducer
const initialState = {
	counter: 0
}

const rootReducer = (state = initialState, action) => {
	if (action.type === 'INC_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		}
	}
	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value
		}
	}
	return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - (subscribe takes an argument a function which will be executed when ever the state is updated, So whenever an action reached the reducer, Subscribe is triggering whenever update the state)
store.subscribe(() => {
	console.log('[Subscription]', store.getState())
});

// Dispatching Action (sending the data to state)
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());