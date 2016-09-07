require('./../node_modules/responsive-css/app.css');
require('./../assets//css/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import config from './../../common/config/config';
import muiTheme from './styles/muiTheme';
import configureStore from './../../common/state/store';
import { getRoutes } from './router';
import { loadState, saveState } from './persistance/localStorage';
const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

// Initialize parse
Parse.initialize(config.parse.appID);
Parse.serverURL = config.parse.serverURL;

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(() => {
  saveState({
    context: {
      currentUser: store.getState().context.currentUser
    }
  });
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      {getRoutes(store)}
    </Provider>
  </MuiThemeProvider>, document.getElementById('root')
);
