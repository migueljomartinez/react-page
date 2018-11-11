import React from 'react'
import {
  List,
  ListItem,
  Subheader,
  Divider,
} from 'react-md';
import styles from './Aside.module.sass'

const ProductAside = () => {
  return (
    <div className={styles.Container}>
      <aside className={`md-paper md-paper--1 ${styles.Aside}`}>
        <List className="">
          <Subheader primaryText="Categories" />
          <Divider />
          <ListItem primaryText="All" />
          <Divider />
          <ListItem primaryText="Tech" />
          <ListItem primaryText="Services" />
          <ListItem primaryText="Ofices" />
        </List>
      </aside>
    </div>
  )
}

export default ProductAside
