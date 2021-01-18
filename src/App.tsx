import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Container,
} from 'semantic-ui-react';

import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';

import './App.scss';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/">
          <Container
            className="page__container--position page__container--color"
            fluid
          >
            <Dashboard/>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
