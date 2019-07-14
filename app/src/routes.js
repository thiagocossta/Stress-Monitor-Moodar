import { Route, Switch } from 'react-router-dom';

import Insert from './pages/Insert';
import Main from './pages/Main';
import React from 'react';
import Stress from './pages/Stress';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Stress" component={Stress} />
            <Route path="/Insert" component={Insert} />
        </Switch>
    );
}

export default Routes;
