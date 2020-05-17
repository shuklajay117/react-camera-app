import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as toastrReducer } from 'react-redux-toastr'
import auth from './auth/auth.reducers';
import tasks from './task/task.reducers';

import { isBrowser } from '../config';

// create the master reducer
const rootReducer = combineReducers({
    auth,
    tasks,
    toastr: toastrReducer // <- Mounted at toastr.
});


// determine initial state
const initialState = isBrowser && (window.__INITIAL_STATE__ || {});


const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
);


// export a store creator factory with initial state if present...
export default () => createStore(rootReducer, initialState, reduxMiddleware);