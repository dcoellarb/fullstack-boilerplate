import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MasterLayoutContainer from './components/MasterLayout/MasterLayoutContainer.js';
import App from './App.jsx';

export default (
  <Router history={browserHistory}>
    {/* Other top level components */}
    {/* i.e. <Route path="login" component={LoginContainer} /> */}
    <Route component={MasterLayoutContainer} >
      <Route path="/" component={App} />
    </Route>
  </Router>
);
