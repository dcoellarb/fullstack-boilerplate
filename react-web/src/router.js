import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MasterLayoutContainer from './components/MasterLayout/MasterLayoutContainer.js';
import LoginContainer from './components/Login/LoginContainer';
import App from './App.jsx';

export const getRoutes = (store) => {
  const requireAuth = (nextState, replaceState) => {
    const state = store.getState();
    if (!state.context.currentUser.id) {
      replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  };

  return (
    <Router history={browserHistory}>
      {/* Other top level components */}
      {/* i.e. <Route path="login" component={LoginContainer} /> */}
      <Route component={MasterLayoutContainer} onEnter={requireAuth}>
        <Route path="/" component={App} />
      </Route>
      <Route path="login" component={LoginContainer} />
    </Router>
  );
};
