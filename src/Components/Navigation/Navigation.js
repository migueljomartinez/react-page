import React from 'react'
import { Route, Switch, matchPath } from 'react-router-dom'
import { Tabs, Tab } from 'react-md'
import Home from '../../Pages/Home/Home'
import Products from '../../Containers/ProductsPage'
import Clients from '../../Pages/Clients/Clients'
import Contact from '../../Containers/ContactPage'
import styles from './Navigation.module.sass'

const tabs = [{
  paths: ['/'],
  index: 0,
}, {
  paths: ['/products', '/products/:filter'],
  index: 1,
}, {
  paths: ['/clients'],
  index: 2,
}, {
  paths: ['/contact'],
  index: 3,
}]

const findCurrentTab = (location, tabs) => {
  return tabs.find(tab => {
    return tab.paths.find(path => {
      const match = matchPath(location.pathname, {
        path: path,
        exact: true
      })
      return match
    })
  }) || {}
}

const Navigation = (props) => { // TODO: Refactor
  const currentTab = findCurrentTab(props.location, tabs)
  const activeTabIndex = currentTab.index || 0

  return (
    <div className={styles.TabsWrapper}>
      <Tabs className={styles.Tabs} tabId="main-menu" defaultTabIndex={activeTabIndex} colored>
        <Tab label="Home" onClick={() => props.history.push('/')} />
        <Tab label="Products" onClick={() => props.history.push('/products')} />
        <Tab label="Clients" onClick={() => props.history.push('/clients')} />
        <Tab label="Contact" onClick={() => props.history.push('/contact')} />
      </Tabs>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:filter" component={Products} />
        <Route path="/clients" component={Clients} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default Navigation
