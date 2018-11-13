import APIInterface from '../data/APIInterface'

export const constants = {
  SENDING_CONTACT_FORM: 'SENDING_CONTACT_FORM',
  SENDING_CONTACT_FORM_ERROR: 'SENDING_CONTACT_FORM_ERROR',
  SENDING_CONTACT_FORM_SUCCESS: 'SENDING_CONTACT_FORM_SUCESS',
}

const sendingContactForm = () => ({
  type: constants.SENDING_CONTACT_FORM,
})

const sendingContactFormError = () => ({
  type: constants.SENDING_CONTACT_FORM,
})

const sendingContactFormSuccess = () => ({
  type: constants.SENDING_CONTACT_FORM,
})

export const sendContactForm = data => (dispatch) => {
  dispatch(sendingContactForm(data))

  APIInterface.sendContactForm(data)
    .then(() => { dispatch(sendingContactFormSuccess()) })
    .catch(() => { dispatch(sendingContactFormError()) })
}
