import React from 'react'
import { connect } from 'react-redux'
import Products from '../Components/Products/Products'
import productsAction from '../module/products/actions'

const getVisibleProducts = (products, filter) => {
  if (!filter) return products
  const filtered = products.filter(product => {
    return product.categories.find((category = '') => category.toLowerCase() === filter)
  })

  return filtered
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: {
      ...state.products,
      visibles: getVisibleProducts(state.products.items, ownProps.match.params.filter),
      all: state.products.items,
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts() {
      dispatch(productsAction.getProducts())
    }
  }
}

const viewModes = Object.freeze({
  list: 'list',
  grid: 'grid',
})

class ProductsPages extends React.Component {
  state = {
    viewMode: viewModes.list
  }

  changeViewMode = (viewMode) => {
    this.setState({ viewMode })
  }

  componentDidMount = () => {
    this.props.getProducts()
  }

  render() {
    const { viewMode } = this.state
    const { products } = this.props
   
    return (
      <Products
        viewMode={viewMode}
        changeViewMode={this.changeViewMode}
        visibles={products.visibles}
        all={products.all}
        loading={products.loading}
        filter={this.props.match.params.filter}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPages)
