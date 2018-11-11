import React from 'react'
import {
  FontIcon,
  TextField,
} from 'react-md';
import ProductCard from '../../../Components/ProductCard/ProductCard'
import styles from './MainSection.module.sass'
import { viewModes } from '../Products'

const MainSection = ({ viewMode, changeViewMode }) => {
  const productListClass = (
    `${styles.ProductList}${viewMode === viewModes.grid ? ` ${styles.ProductListGrid}` : ''}`
  )

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
        <div className={styles.ProductContainer}>
          <ProductCard inAGrid={viewMode === viewModes.grid} />
        </div>
        <div className={styles.ProductContainer}>
          <ProductCard inAGrid={viewMode === viewModes.grid} />
        </div>
        <div className={styles.ProductContainer}>
          <ProductCard inAGrid={viewMode === viewModes.grid} />
        </div>
        <div className={styles.ProductContainer}>
          <ProductCard inAGrid={viewMode === viewModes.grid} />
        </div>
        <div className={styles.ProductContainer}>
          <ProductCard inAGrid={viewMode === viewModes.grid} />
        </div>
        <div className={styles.ProductContainer}>
          <ProductCard inAGrid={viewMode === viewModes.grid} />
        </div>
      </div>
    </section>
  )
}

export default MainSection
