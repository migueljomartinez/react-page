import React from 'react'
import { connect } from 'react-redux'
import Contact from '../Components/Contact/Contact'
import * as contactActions from '../module/contact/actions'

const ContactPage = ({ sendContactForm }) => {
  return (
    <Contact sendContactForm={sendContactForm} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendContactForm: (data) => {
      dispatch(contactActions.sendContactForm(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(ContactPage)
