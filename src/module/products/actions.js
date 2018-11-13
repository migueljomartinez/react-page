import APIInterface from '../data/APIInterface'

export const constants = {
  FETCHING_PRODUCTS: 'FETCHING_PRODUCTS',
  FETCHING_PRODUCTS_SUCCESS: 'FETCHING_PRODUCTS_SUCCESS',
  FETCHING_PRODUCTS_ERROR: 'FETCHING_PRODUCTS_ERROR',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
}

const fetchingProducts = () => ({
  type: constants.FETCHING_PRODUCTS,
})

const fetchingProductsSuccess = payload => ({
  type: constants.FETCHING_PRODUCTS_SUCCESS,
  payload,
})

const fetchingProductsError = payload => ({
  type: constants.FETCHING_PRODUCTS_ERROR,
  payload,
  error: true,
})

const setSearchValue = value => ({
  type: constants.SET_SEARCH_VALUE,
  payload: value,
})

const getProducts = () => (dispatch) => {
  dispatch(fetchingProducts())

  APIInterface.getProducts()
    .then((data) => {
      dispatch(fetchingProductsSuccess(data))
    })
    .catch((error) => {
      dispatch(fetchingProductsError(error))
    })
}

export default { getProducts, setSearchValue }
