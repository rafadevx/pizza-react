import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Main from '../pages/Main';
import Login from '../pages/Login';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/login" component={Login} />
      <Private exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
