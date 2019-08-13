import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

// import { createStore, applyMiddleware } from 'redux';
// import getMessages from './enhancers/messages';
// const store = createStore(rootReducer, applyMiddleware(getMessages));
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
