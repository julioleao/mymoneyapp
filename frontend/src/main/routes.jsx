import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  HashRouter,
} from 'react-router-dom';

import { Router } from 'react-router';
import { createHashHistory } from 'history';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

const hashHistory = createHashHistory();
export default (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='billingCycles' component={BillingCycle} />
    <Redirect from='*' to='/' />
  </Router>
);
