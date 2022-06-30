import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import ButtonBase from '../components/buttons/button-base'
import InputField from '../components/forms/input-field'
import InputFieldError from '../components/forms/input-field-error'
import styles from '../styles/general-styles'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/routes'
import forgotPasswordFormValidator, {
  EMAIL,
  MESSAGE
} from '../utils/validators/forgot-password-form-validator'

const useStyles = makeStyles(theme => ({
  textStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 5,
    color: '#6f6f6f',
    fontWeight: '600'
  },
  buttonStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem'
    }
  }
}))

const initialValues = {
  [EMAIL]: '',
  [MESSAGE]: ''
}

const ForgotPassword = () => {
  const classes = useStyles()
  const style = styles()

  return (
    <AuthPageLayout title='Forgot Password'>
      <Box mt={22}>
        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordFormValidator}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
            handleBlur
          }) => (
            <Form onSubmit={handleSubmit}>
              <Box mb={11}>
                <InputField
                  placeholder='Enter Email associated to this account'
                  name={EMAIL}
                  type='email'
                  onBlur={handleBlur}
                  error={touched[EMAIL] && errors[EMAIL] !== undefined}
                  onChange={handleChange}
                  value={values[EMAIL]}
                />
                {errors[EMAIL] && touched[EMAIL] && (
                  <InputFieldError errorText={errors[EMAIL]} />
                )}
              </Box>
              <Box>
                <InputField
                  placeholder='Add message of request to the admin'
                  name={MESSAGE}
                  type='text'
                  onBlur={handleBlur}
                  error={touched[MESSAGE] && errors[MESSAGE] !== undefined}
                  onChange={handleChange}
                  value={values[MESSAGE]}
                />
                {errors[MESSAGE] && touched[MESSAGE] && (
                  <InputFieldError errorText={errors[MESSAGE]} />
                )}
              </Box>
              <Box
                component={Link}
                to={REGISTER_ROUTE}
                className={classes.textStyles}
              >
                Create Account
              </Box>
              <Box mt={10} className={classes.buttonStyles}>
                <ButtonBase
                  disabled={isSubmitting}
                  color='primary'
                  text={
                    isSubmitting ? (
                      <CircularProgress className={style.colorWhite} />
                    ) : (
                      'Send'
                    )
                  }
                  variant='contained'
                  type='submit'
                />
              </Box>
              <Box
                component='p'
                mt={17}
                textAlign='center'
                color='#6f6f6f'
                className={classes.text}
              >
                You want to sign in?{' '}
                <Box
                  component={Link}
                  to={LOGIN_ROUTE}
                  fontWeight='bolder'
                  fontSize='1rem'
                >
                  Sign In
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthPageLayout>
  )
}

export default ForgotPassword
