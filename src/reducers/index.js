import { combineReducers } from 'redux';
import { loginReducer } from './login';
import pageReducer from './page';

const rootReducer = combineReducers({
  page: pageReducer,
  user: loginReducer,
});

export default rootReducer;
