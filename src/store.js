import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import connectWebSocket from './enhancers/messages';


const store = createStore(rootReducer, applyMiddleware(thunk, connectWebSocket, logger));

export default store;
