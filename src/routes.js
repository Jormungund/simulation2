import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';

export default (
    <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/wizard" component={Wizard}/>
    </Switch>
)