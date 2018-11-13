import React from 'react'
import PropTypes from 'prop-types'
import { matchPath } from 'react-router-dom'
import { Tabs, Tab } from 'react-md'
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

const findCurrentTab = (location, tabs_) => (tabs_.find(tab => (
  tab.paths.find((path) => {
    const match = matchPath(location.pathname, {
      path,
      exact: true,
    })
    return match
  })
)) || {})

const Navigation = (props) => {
  const { location, history } = props
  const currentTab = findCurrentTab(location, tabs)
  const activeTabIndex = currentTab.index || 0

  return (
    <nav className={styles.TabsWrapper}>
      <Tabs className={styles.Tabs} tabId="main-menu" defaultTabIndex={activeTabIndex} colored>
        <Tab label="Home" onClick={() => history.push('/')} />
        <Tab label="Products" onClick={() => history.push('/products')} />
        <Tab label="Clients" onClick={() => history.push('/clients')} />
        <Tab label="Contact" onClick={() => history.push('/contact')} />
      </Tabs>
    </nav>
  )
}

Navigation.propTypes = {
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
}

export default Navigation
