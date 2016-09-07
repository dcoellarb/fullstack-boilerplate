import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { middleware } from 'ez-redux';
import parseEntityConfig from './../config/parseEntityConfig';
import reducers from './reducers/reducers';

const configureStore = () => {
  const middlewares = [middleware(parseEntityConfig), thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;
