import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Contact from '../Components/Contact/Contact'
import * as contactActions from '../module/contact/actions'

const ContactPage = ({ sendContactForm }) => (
  <Contact sendContactForm={sendContactForm} />
)

ContactPage.propTypes = {
  sendContactForm: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  sendContactForm: (data) => {
    dispatch(contactActions.sendContactForm(data))
  },
})

export default connect(null, mapDispatchToProps)(ContactPage)
