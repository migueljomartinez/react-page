import React from 'react'
import PropTypes from 'prop-types'
import {
  FontIcon,
  TextField,
  CircularProgress,
} from 'react-md';
import { productViewModes } from '../../helpers/enums'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductMainSection.module.sass'

const ProductMainSection = ({
  viewMode, changeViewMode, visibles, all, loading, setSearchValue,
}) => {
  const productListClass = viewMode === productViewModes.grid
    ? styles.ProductListGrid
    : styles.ProductList
  const hiddenProducts = all.length - visibles.length

  if (loading) {
    return (
      <div className={styles.LoaderContainer}>
        <CircularProgress className={styles.Loader} scale={2} id="loading products" />
      </div>
    )
  }

  return (
    <section className={styles.MainContent}>
      <header>
        <button
          type="button"
          className={styles.Button}
          onClick={() => changeViewMode(productViewModes.list)}
        >
          <FontIcon>list</FontIcon>
        </button>
        <button
          type="button"
          className={styles.Button}
          onClick={() => changeViewMode(productViewModes.grid)}
        >
          <FontIcon>view_module</FontIcon>
        </button>
        <div className={styles.HeaderFiftyFifty}>
          <p className={styles.HeaderText}>
            Showing{' '}
            <strong>{visibles.length}</strong>{' '}
            products - Hidden:{' '}
            <strong>{hiddenProducts}</strong>
          </p>
          <div className={styles.SearchContainer}>
            <TextField
              label="Search"
              lineDirection="center"
              placeholder="something..."
              id="search-products"
              onChange={value => setSearchValue(value)}
            />
          </div>
        </div>
      </header>
      <div className={productListClass}>
        {
          visibles.map((product) => {
            const productData = {
              title: product.name,
              subtitle: product.brand,
              description: product.description,
              image: product.photo,
              stock: product.stock,
              price: product.price,
            }
            return (
              <article className={styles.ProductContainer} key={product.id}>
                <ProductCard inAGrid={viewMode === productViewModes.grid} {...productData} />
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

ProductMainSection.propTypes = {
  viewMode: PropTypes.string.isRequired,
  changeViewMode: PropTypes.func.isRequired,
  visibles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  all: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  setSearchValue: PropTypes.func.isRequired,
}

export default ProductMainSection
