import React from 'react'
import PropTypes from 'prop-types'
import {
  FontIcon,
  TextField,
} from 'react-md';
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductMainSection.module.sass'

const viewModes = Object.freeze({ // TODO: reuse
  list: 'list',
  grid: 'grid',
})

const ProductMainSection = ({ viewMode, changeViewMode, products, loading }) => {
  const productListClass = viewMode === viewModes.grid ? styles.ProductListGrid : styles.ProductList

  return (
    <section className={styles.MainContent}>
      <header>
        <button
          className={styles.Button}
          onClick={() => changeViewMode(viewModes.list)}
        >
          <FontIcon>list</FontIcon>
        </button>
        <button
          className={styles.Button}
          onClick={() => changeViewMode(viewModes.grid)}
        >
          <FontIcon>view_module</FontIcon>
        </button>
        <div className={styles.HeaderFiftyFifty}>
          <p className={styles.HeaderText}>
            Showing <strong>10</strong> products - Hidden: <strong>5</strong>
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
          products.map(product => {
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
                <ProductCard inAGrid={viewMode === viewModes.grid} {...productData} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

ProductMainSection.propTypes = {
  viewMode: PropTypes.bool,
  changeViewMode: PropTypes.func,
  products: PropTypes.array,
  loading: PropTypes.bool,
}

export default ProductMainSection
