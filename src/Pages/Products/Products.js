import React from 'react'
import styles from './Products.module.sass'
import ProductsAside from './Aside/Aside'
import MainSection from './MainSection/MainSection'

export const viewModes = Object.freeze({
  list: 'list',
  grid: 'grid',
})

export default class Products extends React.Component {
  state = {
    viewMode: viewModes.list
  }

  changeViewMode = (viewMode) => {
    this.setState({ viewMode })
  }

  render() {
    const { viewMode } = this.state

    return (
      <div className={styles.Container}>
        <ProductsAside />
        <MainSection viewMode={viewMode} changeViewMode={this.changeViewMode} />
      </div>
    )
  }
}
