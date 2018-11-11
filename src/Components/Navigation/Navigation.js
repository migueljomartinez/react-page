import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TabsContainer, Tabs, Tab } from 'react-md'
import Home from '../../Pages/Home/Home'
import Products from '../../Pages/Products/Products'
import Clients from '../../Pages/Clients/Clients'
import Contact from '../../Pages/Contact/Contact'
import styles from './Navigation.module.sass'

const tabs = [{
  label: 'Home',
  path: '/',
  component: () => <Home />,
  index: 0,
}, {
  label: 'Products',
  path: '/products',
  component: () => <Products />,
  index: 1,
}, {
  label: 'Clients',
  path: '/clients',
  component: () => <Clients />,
  index: 2,
}, {
  label: 'Contact',
  path: '/contact',
  component: () => <Contact />,
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
