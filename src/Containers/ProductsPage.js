import React from 'react'
import { connect } from 'react-redux'
import Products from '../Components/Products/Products'
import productsAction from '../module/products/actions'

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
        products={products.items}
        loading={products.loading}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts() {
      dispatch(productsAction.getProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPages)
