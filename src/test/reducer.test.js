import { constants as productConstants } from '../module/products/actions'
import productsReducer, {
  defaultState as productsDefaultState,
} from '../module/products/reducers'

it('products reducer should return default state', () => {
  const expected = productsDefaultState
  const actual = productsReducer()

  expect(actual).toEqual(expected)
})

it(`products reducer should activate the loading value when the action is ${productConstants.FETCHING_PRODUCTS}`, () => {
  const expected = {
    ...productsDefaultState,
    loading: true,
  }
  const action = {
    type: productConstants.FETCHING_PRODUCTS,
  }
  const actual = productsReducer(productsDefaultState, action)

  expect(actual).toEqual(expected)
})

it(`products reducer should set the error and disable the loading value when the action is ${productConstants.FETCHING_PRODUCTS_ERROR}`, () => {
  const error = new Error()
  const expected = {
    ...productsDefaultState,
    error,
    loading: false,
  }
  const action = {
    type: productConstants.FETCHING_PRODUCTS_ERROR,
    payload: error,
  }
  const actual = productsReducer(productsDefaultState, action)

  expect(actual).toEqual(expected)
})

it(`products reducer should set the payload data and disable the loading value when the action is ${productConstants.FETCHING_PRODUCTS_SUCCESS}`, () => {
  const payload = [
    { id: '0' }, { id: '002' }, { id: '003' },
  ]
  const expected = {
    ...productsDefaultState,
    items: payload,
    loading: false,
  }
  const action = {
    type: productConstants.FETCHING_PRODUCTS_SUCCESS,
    payload,
  }
  const actual = productsReducer(productsDefaultState, action)

  expect(actual).toEqual(expected)
})
