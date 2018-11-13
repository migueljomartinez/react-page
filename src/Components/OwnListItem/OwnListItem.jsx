import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './OwnListItem.module.sass'

const OwnListItem = ({
  to, children, icon, active,
}) => {
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

OwnListItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired,
}

export default OwnListItem
