import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './views/Home';
import Button from './components/Button';

function App() {
  return (
    <Router>

      <div className="container mx-auto">

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Router path="/users">
            <Users/>
          </Router>
          <Router path="/">
            <Home/>
          </Router>
        </Switch>

        <nav>
          <ul className="flex justify-between mx-16 mt-5">
            <li> 
              <Button>
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="/users">Users</Link>
              </Button>
            </li>
          </ul>
        </nav>

      </div>

    </Router>
  );
}

const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

export default App;
