import { combineReducers } from 'redux';
import localizationReducer from './localizationReducer';
import windowReducer from './windowReducer';
import contextReducer from './contextReducer';

const reducers = combineReducers({
  localization: localizationReducer,
  windowSize: windowReducer,
  context: contextReducer
});

export default reducers;
