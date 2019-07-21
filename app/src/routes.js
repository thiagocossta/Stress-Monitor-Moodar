import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Edit from './pages/edit/Edit';
import Insert from './pages/insert/Insert';
import Main from './pages/main/Main';
import Stress from './pages/stress/Stress';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Stress" component={Stress} />
      <Route path="/Insert" component={Insert} />
      <Route path="/Edit" component={Edit} />
    </Switch>
  );
}

export default Routes;
