import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './Pages/Home/Home'
import Products from './Containers/ProductsPage'
import Clients from './Pages/Clients/Clients'
import Contact from './Containers/ContactPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Navigation} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:filter" component={Products} />
            <Route path="/clients" component={Clients} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
