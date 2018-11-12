import { constants } from './actions'

const defaultState = {
  products: [],
  isLoading: false,
}

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case constants.FETCHING_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      }

    case constants.FETCHING_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    case constants.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}
