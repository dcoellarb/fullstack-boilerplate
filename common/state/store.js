import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ezRedux from 'ez-redux';
import parseEntityConfig from './../config/parseEntityConfig';
import reducers from './reducers/reducers';

const configureStore = (persistedState) => {
  const middlewares = [ezRedux.middleware(parseEntityConfig), thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducers,
    persistedState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;
