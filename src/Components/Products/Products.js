import React from 'react'
import PropTypes from 'prop-types'
import styles from './Products.module.sass'
import ProductsAside from '../ProductAside/ProductAside'
import ProductMainSection from '../ProductMainSection/ProductMainSection'

export default class Products extends React.Component {
  render() {
    const { viewMode, changeViewMode, products, loading } = this.props

    return (
      <div className={styles.Container}>
        <ProductsAside />
        <ProductMainSection
          viewMode={viewMode}
          changeViewMode={changeViewMode}
          products={products}
          loading={loading}
        />
      </div>
    )
  }
}

Products.propTypes = {
  viewMode: PropTypes.string.isRequired,
  changeViewMode: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    brand: PropTypes.string,
    categories: PropTypes.array,
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number,
  }).isRequired).isRequired,
  loading: PropTypes.bool.isRequired
}
