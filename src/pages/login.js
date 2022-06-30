import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import InputField from '../components/forms/input-field'
import InputFieldError from '../components/forms/input-field-error'
import ButtonBase from '../components/buttons/button-base'
import styles from '../styles/general-styles'
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from '../utils/routes'
import loginFormValidator, {
  PASSWORD,
  USERNAME
} from '../utils/validators/login-form-validator'

const useStyles = makeStyles(theme => ({
  flexStyles: {
    display: 'flex'
  },
  centerButton: {
    justifyContent: 'center'
  },
  textStyles: {
    justifyContent: 'flex-end',
    marginTop: 5,
    color: '#6f6f6f',
    fontWeight: '600'
  },
  text: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem'
    }
  }
}))

const initialValues = {
  [USERNAME]: '',
  [PASSWORD]: ''
}

const Login = () => {
  const classes = useStyles()
  const style = styles()

  return (
    <AuthPageLayout title='Sign in'>
      <Box mt={14}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginFormValidator}
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
                  placeholder='Username'
                  name={USERNAME}
                  type='text'
                  onBlur={handleBlur}
                  error={touched[USERNAME] && errors[USERNAME] !== undefined}
                  onChange={handleChange}
                  value={values[USERNAME]}
                />
                {errors[USERNAME] && touched[USERNAME] && (
                  <InputFieldError errorText={errors[USERNAME]} />
                )}
              </Box>
              <Box>
                <InputField
                  placeholder='Password'
                  name={PASSWORD}
                  type='password'
                  onBlur={handleBlur}
                  error={touched[PASSWORD] && errors[PASSWORD] !== undefined}
                  onChange={handleChange}
                  value={values[PASSWORD]}
                />
                {errors[PASSWORD] && touched[PASSWORD] && (
                  <InputFieldError errorText={errors[PASSWORD]} />
                )}
                <Box
                  className={`${classes.flexStyles} ${classes.textStyles}`}
                  component={Link}
                  to={FORGOT_PASSWORD_ROUTE}
                >
                  Forgot Password?
                </Box>
                <Box
                  mt={11}
                  className={`${classes.centerButton} ${classes.flexStyles}`}
                >
                  <ButtonBase
                    disabled={isSubmitting}
                    color='primary'
                    text={
                      isSubmitting ? (
                        <CircularProgress className={style.colorWhite} />
                      ) : (
                        'Sign in'
                      )
                    }
                    variant='contained'
                    type='submit'
                  />
                </Box>
                <Box
                  component='p'
                  mt={15}
                  textAlign='center'
                  color='#6f6f6f'
                  className={classes.text}
                >
                  Get an employee registered?{' '}
                  <Box
                    component={Link}
                    to={REGISTER_ROUTE}
                    fontWeight='bolder'
                    fontSize='1rem'
                  >
                    Register new
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthPageLayout>
  )
}

export default Login
