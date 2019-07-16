import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Insert from './pages/insert/Insert';
import Main from './pages/main/Main';
import Stress from './pages/stress/Stress';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Stress" component={Stress} />
      <Route path="/Insert" component={Insert} />
    </Switch>
  );
}

export default Routes;
