import APIInterface from '../data/APIInterface'

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

const getProducts = () => (dispatch) => {
  dispatch(fetchingProducts())

  APIInterface.getProducts()
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
