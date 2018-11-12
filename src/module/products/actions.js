export const constants = {
  FETCHING_PRODUCTS: 'FETCHING_PRODUCTS',
  FETCHING_PRODUCTS_SUCCESS:  'FETCHING_PRODUCTS_SUCCESS',
  FETCHING_PRODUCTS_ERROR: 'FETCHING_PRODUCTS_ERROR'
}

const fetchingProducts = () => ({
  type: constants.FETCHING_PRODUCTS
})

const fetchingProductsSuccess = (payload) => ({
  type: constants.FETCHING_PRODUCTS_SUCCESS,
  payload
})

const fetchingProductsError = (payload) => ({
  type: constants.FETCHING_PRODUCTS_ERROR,
  payload,
  error: true
})

const getProducts = () => (store, dispatch) => {
  console.log(store, dispatch)
  dispatch(fetchingProducts())
  fetch('http://localhost:8888/products')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchingProductsSuccess(data))
    })
    .catch(error => {
      dispatch(fetchingProductsError(error))
    })
}

export default {
  getProducts
}
