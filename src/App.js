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

      <div className="h-screen">

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

        <nav style={{ height: '16vh' }}>
          <ul className="flex justify-around items-center flex-wrap m-4 h-full sm:mx-16">
            <li> 
              <Button>
                <Link to="/">Quiero comprar</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="/about">Código Fast</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="/users">Casilleros</Link>
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
