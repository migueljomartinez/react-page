import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
  Subheader,
  Divider,
  FontIcon,
  Avatar
} from 'react-md';
import { Link } from 'react-router-dom'
import styles from './ProductAside.module.sass'

const AllIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>list</FontIcon>
  </Avatar>
)

const TechIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>computer</FontIcon>
  </Avatar>
)

const ServicesIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>build</FontIcon>
  </Avatar>
)

const OfficeIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>folder</FontIcon>
  </Avatar>
)

const OwnListItem = ({ to, children, icon, active }) => {
  const itemClassName = active ? styles.ListItemActive : styles.ListItem

  return (
    <li className={itemClassName}>
      <Link to={to} className={styles.ListItemLink}>
        {icon}
        <span className="md-tile-text--primary md-text">
          {children}
        </span>
      </Link>
    </li>
  )
}

const ProductAside = ({ filter }) => {
  return (
    <div className={styles.Container}>
      <aside className={`md-paper md-paper--1 ${styles.Aside}`}>
        <List className="">
          <Subheader primaryText="Categories" />
          <Divider />
          <OwnListItem to="/products" icon={AllIcon} active={!filter}>
            All
          </OwnListItem>
          <Divider />
          <OwnListItem to="/products/tech" icon={TechIcon} active={filter === 'tech'}> {/** // TODO: use enum */}
            Tech
          </OwnListItem>
          <OwnListItem to="/products/services" icon={ServicesIcon} active={filter === 'services'}>
            Services
          </OwnListItem>
          <OwnListItem to="/products/office" icon={OfficeIcon} active={filter === 'office'}>
            Office
          </OwnListItem>
        </List>
      </aside>
    </div>
  )
}

ProductAside.propTypes = {
  filter: PropTypes.string
}

export default ProductAside
