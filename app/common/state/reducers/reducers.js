import { combineReducers } from 'redux';
import localizationReducer from './localizationReducer';
import windowReducer from './windowReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  localization: localizationReducer,
  windowSize: windowReducer,
  users: usersReducer,
});

export default reducers;
