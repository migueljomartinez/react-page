import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Tabs, Tab } from 'react-md'
import Home from '../../Pages/Home/Home'
import Products from '../../Pages/Products/Products'
import Clients from '../../Pages/Clients/Clients'
import Contact from '../../Pages/Contact/Contact'
import styles from './Navigation.module.sass'

const tabs = [{
  path: '/',
  index: 0,
}, {
  path: '/products',
  index: 1,
}, {
  path: '/clients',
  index: 2,
}, {
  path: '/contact',
  index: 3,
}]

const Navigation = (props) => {
  const activeTabIndex = tabs.find(tab => props.location.pathname === tab.path).index

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
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default Navigation
