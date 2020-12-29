import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Available from '../pages/Available';
import Queens from '../pages/Queens';
import Studs from '../pages/Studs';
import Pricing from '../pages/Pricing';
import Waitlist from '../pages/Waitlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/available" component={Available} />
    <Route path="/queens" component={Queens} />
    <Route path="/Studs" component={Studs} />
    <Route path="/waitlist" component={Waitlist} />
    <Route path="/pricing" component={Pricing} />
  </Switch>
);

export default Routes;
