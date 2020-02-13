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
    <Switch>
      {
        options.map(option => {
          return  <Route path={ option.path } key={ option.id }>
                    <Option title={ option.subtitle } description={ option.description } videoUrl={ option.videoUrl }/>
                  </Route>
        })
      }
      <Router path="/">
        <Home/>
      </Router>
    </Switch>
  )
}

export default Routes;