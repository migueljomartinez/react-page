import React from 'react'
import styles from './ProductCard.module.sass'
import {
  Card,
  CardTitle,
  CardText,
} from 'react-md';

const Product = ({ inAGrid }) => {
  const containerClass = `${styles.ProductContainer}${inAGrid ? ` ${styles.ContainerGrid}` : ''}`

  return (
    <div className={containerClass}>
      <Card>
        <CardTitle
          title="Generic Concrete Computer"
          subtitle="Tech, Services - Hirthe - Pacocha"
        />
        <div className={styles.ProductInfo}>
          <figure className={styles.ProductImageCont}>
            <img src="https://source.unsplash.com/random/100x100" className={styles.ProductImage} alt="Product" />
          </figure>
          <CardText className={styles.ProductText}>
            <p className={styles.ProductDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <p className={styles.ProductStock}>
              <strong>Stock</strong>: 47905
            </p>
            <p className={styles.ProductPrice}>
              <strong>Price</strong>: $275.00
            </p>
          </CardText>
        </div>
      </Card>
    </div>
  )
}

export default Product
