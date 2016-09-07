import { combineReducers } from 'redux';
import localizationReducer from './localizationReducer';
import windowReducer from './windowReducer';

const reducers = combineReducers({
  localization: localizationReducer,
  windowSize: windowReducer,
});

export default reducers;
