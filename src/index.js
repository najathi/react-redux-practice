import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
});

// middleware (applyMiddleware only for middleware)
const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] next state', store.getState());
			return result;
		}
	}
}

// redux dev tool (for redux debugging in redux dev tool in chrome extension)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// compose, it is little bit of similar to combineReducers. CombineReducer is combined the reducers. compose allows us to combine Enhancers.

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
