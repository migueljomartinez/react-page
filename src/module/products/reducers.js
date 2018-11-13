import { constants } from './actions'

export const defaultState = {
  items: [],
  loading: false,
  search: '',
}

export default function allProducts(state = defaultState, action = {}) {
  switch (action.type) {
    case constants.FETCHING_PRODUCTS:
      return {
        ...state,
        loading: true,
      }

    case constants.FETCHING_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case constants.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }

    case constants.SET_SEARCH_VALUE:
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state
  }
}
