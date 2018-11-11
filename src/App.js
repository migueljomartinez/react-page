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
        <div>
          <Route path="/" component={Navigation} />
        </div>
      </Router>
    )
  }
}

export default App
