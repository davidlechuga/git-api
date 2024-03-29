import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './views/HomePage';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
