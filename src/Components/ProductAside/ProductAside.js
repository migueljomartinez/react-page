import React from 'react'
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

const OwnListItem = ({ to, children, icon }) => {
  return (
    <li className={styles.ListItem}>
      <Link to={to} className={styles.ListItemLink}>
        {icon}
        <span className="md-tile-text--primary md-text">
          {children}
        </span>
      </Link>
    </li>
  )
}

const ProductAside = () => {
  return (
    <div className={styles.Container}>
      <aside className={`md-paper md-paper--1 ${styles.Aside}`}>
        <List className="">
          <Subheader primaryText="Categories" />
          <Divider />
          <OwnListItem to="/products" icon={AllIcon}>
            All
          </OwnListItem>
          <Divider />
          <OwnListItem to="/products/tech" icon={TechIcon}>
            Tech
          </OwnListItem>
          <OwnListItem to="/products/services" icon={ServicesIcon}>
            Services
          </OwnListItem>
          <OwnListItem to="/products/office" icon={OfficeIcon}>
            Office
          </OwnListItem>
        </List>
      </aside>
    </div>
  )
}

export default ProductAside
