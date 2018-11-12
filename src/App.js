import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navigation} />
      </Router>
    )
  }
}

export default App
