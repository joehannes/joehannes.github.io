import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import Nav from './components/Nav';
import Dashboard from './routes/Dashboard';

import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Scrollbars>
            <Dashboard/>
          </Scrollbars>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
