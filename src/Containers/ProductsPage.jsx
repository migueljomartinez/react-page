import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Products from '../Components/Products/Products'
import productsAction from '../module/products/actions'

const getVisibleProducts = (products, filter, search = '') => {
  const filterByCategory = (product) => {
    if (!filter) return product

    return product.categories.find(
      (category = '') => category.toLowerCase() === filter,
    )
  }
  const filterBySearch = (product) => {
    if (!search) return product
    const name = product.name || ''
    const shouldRemain = name.toLowerCase().includes(search.toLowerCase())
    return shouldRemain
  }
  const filtered = products.filter(filterByCategory).filter(filterBySearch)

  return filtered
}

const mapStateToProps = (state, ownProps) => ({
  products: {
    ...state.products,
    visibles: getVisibleProducts(
      state.products.items,
      ownProps.match.params.filter,
      state.products.search,
    ),
    all: state.products.items,
  },
})

const mapDispatchToProps = dispatch => ({
  getProducts() {
    dispatch(productsAction.getProducts())
  },
  setSearchValue(value) {
    dispatch(productsAction.setSearchValue(value))
  },
})

const viewModes = Object.freeze({
  list: 'list',
  grid: 'grid',
})

class ProductsPages extends React.Component {
  state = {
    viewMode: viewModes.list,
  }

  changeViewMode = (viewMode) => {
    this.setState({ viewMode })
  }

  componentDidMount = () => {
    const { getProducts } = this.props
    getProducts()
  }

  render() {
    const { viewMode } = this.state
    const { products, match, setSearchValue } = this.props

    return (
      <Products
        viewMode={viewMode}
        changeViewMode={this.changeViewMode}
        visibles={products.visibles}
        all={products.all}
        loading={products.loading}
        filter={match.params.filter}
        setSearchValue={setSearchValue}
      />
    )
  }
}

ProductsPages.propTypes = {
  getProducts: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  products: PropTypes.shape({}).isRequired,
  setSearchValue: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPages)
