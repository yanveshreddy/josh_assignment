import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import DashBoard from './components/DashBoard';
import NotFound from './NotFound'
const routing = (
  <Router>

    <Switch>
      <Route exact path="/" component={App} />

      <Route exact={true} path="/dashboard" component={DashBoard} />

      <Route component={NotFound} />
    </Switch>

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


