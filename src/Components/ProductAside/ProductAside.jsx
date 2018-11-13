import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
  Subheader,
  Divider,
} from 'react-md';
import { productFilters } from '../../helpers/enums'
import styles from './ProductAside.module.sass'
import OwnListItem from '../OwnListItem/OwnListItem'
import {
  AllIcon, TechIcon, ServicesIcon, OfficeIcon,
} from '../Icon/Icon'

const ProductAside = ({ filter }) => (
  <div className={styles.Container}>
    <aside className={`md-paper md-paper--1 ${styles.Aside}`}>
      <List className="">
        <Subheader primaryText="Categories" />
        <Divider />
        <OwnListItem to="/products" icon={AllIcon} active={!filter}>
          All
        </OwnListItem>
        <Divider />
        <OwnListItem to="/products/tech" icon={TechIcon} active={filter === productFilters.tech}>
          Tech
        </OwnListItem>
        <OwnListItem to="/products/services" icon={ServicesIcon} active={filter === productFilters.services}>
          Services
        </OwnListItem>
        <OwnListItem to="/products/office" icon={OfficeIcon} active={filter === productFilters.office}>
          Office
        </OwnListItem>
      </List>
    </aside>
  </div>
)

ProductAside.propTypes = {
  filter: PropTypes.string,
}

ProductAside.defaultProps = {
  filter: '',
}

export default ProductAside
