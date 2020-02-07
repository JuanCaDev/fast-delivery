import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import options from './data/options';

import Home from './views/Home';
import Option from './views/Option';

function Routes() {
  return (
    <div>
      <Switch>
        {
          options.map(option => {
            return  <Route path={ option.path } key={ option.id }>
                      <Option title={ option.subtitle } description={ option.description }/>
                    </Route>
          })
        }
        <Router path="/">
          <Home/>
        </Router>
      </Switch>
    </div>
  )
}

export default Routes;