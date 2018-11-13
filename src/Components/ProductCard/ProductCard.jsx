import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardTitle,
  CardText,
} from 'react-md';
import styles from './ProductCard.module.sass'

const Product = ({
  title, subtitle, image, description, stock, price, inAGrid,
}) => {
  const containerClass = inAGrid ? styles.ContainerGrid : styles.ProductContainer

  return (
    <div className={containerClass}>
      <Card className={styles.ProductCard}>
        <CardTitle
          title={title}
          subtitle={subtitle}
        />
        <div className={styles.ProductInfo}>
          <figure className={styles.ProductImageCont}>
            <img src={image} className={styles.ProductImage} alt={title} />
          </figure>
          <CardText className={styles.ProductText}>
            <p className={styles.ProductDescription}>{description}</p>
            <p className={styles.ProductStock}>
              <strong>Stock:</strong>
              {stock}
            </p>
            <p className={styles.ProductPrice}>
              <strong>Price:</strong>
              {price}
            </p>
          </CardText>
        </div>
      </Card>
    </div>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  inAGrid: PropTypes.bool,
}

Product.defaultProps = {
  inAGrid: false,
}

export default Product
