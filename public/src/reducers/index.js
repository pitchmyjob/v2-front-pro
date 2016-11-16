import { combineReducers } from 'redux';
import ProReducer from './pro';
import DatasReducer from './datas';
import UserReducer from './user';
import AuthReducer from './auth';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  pro: ProReducer,
  user: UserReducer,
  auth: AuthReducer,
  datas: DatasReducer,
  form : formReducer
});

export default rootReducer;