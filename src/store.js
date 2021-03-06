import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import connectWebSocket from './enhancers/messages';


const store = createStore(rootReducer, applyMiddleware(thunk, connectWebSocket));

export default store;
