import React from 'react'
import PropTypes from 'prop-types'
import styles from './Products.module.sass'
import ProductsAside from '../ProductAside/ProductAside'
import ProductMainSection from '../ProductMainSection/ProductMainSection'

export default class Products extends React.Component {
  render() {
    const { viewMode, changeViewMode, visibles, all, loading, filter } = this.props

    return (
      <div className={styles.Container}>
        <ProductsAside filter={filter} />
        <ProductMainSection
          viewMode={viewMode}
          changeViewMode={changeViewMode}
          visibles={visibles}
          all={all}
          loading={loading}
        />
      </div>
    )
  }
}

Products.propTypes = {
  viewMode: PropTypes.string.isRequired,
  changeViewMode: PropTypes.func.isRequired,
  visibles: PropTypes.arrayOf(PropTypes.shape({
    brand: PropTypes.string,
    categories: PropTypes.array,
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number,
  }).isRequired).isRequired,
  all: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string
}
