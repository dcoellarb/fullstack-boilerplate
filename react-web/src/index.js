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
import Router from './router';
const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

// Initialize parse
Parse.initialize(config.parse.appID);
Parse.serverURL = config.parse.serverURL;

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={configureStore()}>{Router}</Provider>
  </MuiThemeProvider>, document.getElementById('root')
);
