import { constants } from './actions'

const defaultState = {
  loading: false
}

export default function contactReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.SENDING_CONTACT_FORM:
      return { loading: true }
    
    case constants.SENDING_CONTACT_FORM_SUCCESS:
      return { loading: false }  

    case constants.SENDING_CONTACT_FORM_ERROR:
      return { loading: false }

    default:
      return state
  }
}
