import { constants } from './actions'

const defaultState = {
  items: [],
  loading: false,
}

export default function allProducts(state = defaultState, action) {
  switch (action.type) {
    case constants.FETCHING_PRODUCTS:
      return {
        ...state,
        loading: true
      }

    case constants.FETCHING_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case constants.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    default:
      return state
  }
}
