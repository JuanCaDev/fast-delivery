import React from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './routes';
import Nav from './components/Nav';

function App() {

  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div className="h-screen container-screen">
        <Routes/>
        <Nav/>
      </div>
    </Router>
  );
}

export default App;
