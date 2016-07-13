require('./../node_modules/responsive-css/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './../../common/state/store';
import Router from './router';
const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>{Router}</Provider>
  </MuiThemeProvider>, document.getElementById('root')
);
