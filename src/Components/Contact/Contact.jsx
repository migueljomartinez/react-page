import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, Paper } from 'react-md'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styles from './Contact.module.sass'

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please write down your first name'),
  lastName: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Please write down your last name'),
  email: Yup.string()
    .email('Invalid email!')
    .required('Don’t forget to tell us what your email address is'),
  subject: Yup.string()
    .max(500, 'Too long!')
    .required('Don’t forget to write something to use!'),
})

const FieldError = ({ error, touched }) => (
  error && touched ? <p className={styles.TextError}>{error}</p> : null
)

FieldError.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool.isRequired,
}

FieldError.defaultProps = {
  error: '',
}

const Contact = ({ sendContactForm }) => (
  <div className={styles.Container}>
    <Paper zDepth={1} className={styles.Paper}>
      <Formik
        initialValues={{
          firstName: '', lastName: '', email: '', subject: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
          sendContactForm(values)
        }}
        render={({
          errors, touched, isValid, isSubmitting,
        }) => (
          <Form className={styles.Form}>
            <Field
              name="firstName"
              render={({ field }) => (
                <div className={styles.TextFieldContainer}>
                  <TextField
                    id="firstName"
                    label="First name"
                    lineDirection="center"
                    placeholder="Your first name..."
                    onBlur={field.onBlur}
                    onChange={(_, event) => field.onChange(event)}
                    value={field.value}
                    error={errors.firstName && touched.firstName}
                  />
                  <FieldError error={errors.firstName} touched={touched.firstName} />
                </div>
              )}
            />
            <Field
              name="lastName"
              render={({ field }) => (
                <div className={styles.TextFieldContainer}>
                  <TextField
                    id="lastName"
                    label="Last name"
                    lineDirection="center"
                    placeholder="Your last name..."
                    onBlur={field.onBlur}
                    onChange={(_, event) => field.onChange(event)}
                    value={field.value}
                    error={errors.lastName && touched.lastName}
                  />
                  <FieldError error={errors.lastName} touched={touched.lastName} />
                </div>
              )}
            />
            <Field
              name="email"
              render={({ field }) => (
                <div className={styles.TextFieldContainer}>
                  <TextField
                    id="email"
                    label="Email"
                    lineDirection="center"
                    placeholder="Your email..."
                    onBlur={field.onBlur}
                    onChange={(_, event) => field.onChange(event)}
                    value={field.value}
                    error={errors.email && touched.email}
                  />
                  <FieldError error={errors.email} touched={touched.email} />
                </div>
              )}
            />
            <Field
              name="subject"
              render={({ field }) => (
                <div className={styles.TextFieldContainer}>
                  <TextField
                    id="subject"
                    label="Subject"
                    lineDirection="center"
                    placeholder="Let us know your concerns"
                    onBlur={field.onBlur}
                    onChange={(_, event) => field.onChange(event)}
                    value={field.value}
                    error={errors.subject && touched.subject}
                  />
                  <FieldError error={errors.subject} touched={touched.subject} />
                </div>
              )}
            />
            <div className={styles.SubmitBtnContainer}>
              <Button raised type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      />
    </Paper>
  </div>
)

Contact.propTypes = {
  sendContactForm: PropTypes.func.isRequired,
}

export default Contact
