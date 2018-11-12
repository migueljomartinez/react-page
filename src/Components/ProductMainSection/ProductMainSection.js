import React from 'react'
import PropTypes from 'prop-types'
import {
  FontIcon,
  TextField,
  CircularProgress ,
} from 'react-md';
import { productViewModes } from '../../helpers/enums'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductMainSection.module.sass'

const ProductMainSection = ({ viewMode, changeViewMode, visibles, all, loading }) => {
  const productListClass = viewMode === productViewModes.grid ? styles.ProductListGrid : styles.ProductList
  const hiddenProducts = all.length - visibles.length

  if (loading) {
    return (
      <div className={styles.LoaderContainer}>
        <CircularProgress className={styles.Loader} scale={2} id="loading products" />
      </div>
    )
  } else {
    return (
      <section className={styles.MainContent}>
        <header>
          <button
            className={styles.Button}
            onClick={() => changeViewMode(productViewModes.list)}
          >
            <FontIcon>list</FontIcon>
          </button>
          <button
            className={styles.Button}
            onClick={() => changeViewMode(productViewModes.grid)}
          >
            <FontIcon>view_module</FontIcon>
          </button>
          <div className={styles.HeaderFiftyFifty}>
            <p className={styles.HeaderText}>
              Showing <strong>{visibles.length}</strong> products - Hidden: <strong>{hiddenProducts}</strong>
            </p>
            <div className={styles.SearchContainer}>
              <TextField
                label="Search"
                lineDirection="center"
                placeholder="something..."
                id="search-products"
              />
            </div>
          </div>
        </header>
        <div className={productListClass}>
          {
            visibles.map(product => {
              const productData = {
                title: product.name,
                subtitle: product.brand,
                description: product.description,
                image: product.photo,
                stock: product.stock,
                price: product.price,
              }
              return (
                <div className={styles.ProductContainer} key={product.id}>
                  <ProductCard inAGrid={viewMode === productViewModes.grid} {...productData} />
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

ProductMainSection.propTypes = {
  viewMode: PropTypes.string,
  changeViewMode: PropTypes.func,
  visibles: PropTypes.array,
  all: PropTypes.array,
  loading: PropTypes.bool,
}

export default ProductMainSection
