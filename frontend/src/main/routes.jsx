import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default (props) => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);
