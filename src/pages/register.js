import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Select from '@material-ui/core/Select'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import ButtonBase from '../components/buttons/button-base'
import InputField from '../components/forms/input-field'
import InputFieldError from '../components/forms/input-field-error'
import styles from '../styles/general-styles'
import { FORGOT_PASSWORD_ROUTE, LOGIN_ROUTE } from '../utils/routes'
import registerFormValidator, {
  PASSWORD,
  PASSWORD_COMFIRMATION,
  ROLE,
  roles,
  STAFF_EMAIL,
  USERNAME
} from '../utils/validators/register-form-validator'

const useStyles = makeStyles(theme => ({
  flexStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  color: {
    color: '#949494'
  }
}))

const initialValues = {
  [USERNAME]: '',
  [PASSWORD]: '',
  [PASSWORD_COMFIRMATION]: '',
  [ROLE]: '',
  [STAFF_EMAIL]: ''
}

const Register = () => {
  const classes = useStyles()
  const style = styles()

  return (
    <AuthPageLayout title='Create Account'>
      <Box mt={8}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerFormValidator}
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
              <Box mb={8}>
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
              <Box mb={8}>
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
              </Box>
              <Box mb={8}>
                <InputField
                  placeholder='Confirm Password'
                  name={PASSWORD_COMFIRMATION}
                  type='password'
                  onBlur={handleBlur}
                  error={
                    touched[PASSWORD_COMFIRMATION] &&
                    errors[PASSWORD_COMFIRMATION] !== undefined
                  }
                  onChange={handleChange}
                  value={values[PASSWORD_COMFIRMATION]}
                />
                {errors[PASSWORD_COMFIRMATION] &&
                  touched[PASSWORD_COMFIRMATION] && (
                    <InputFieldError
                      errorText={errors[PASSWORD_COMFIRMATION]}
                    />
                  )}
              </Box>
              <Box mb={8}>
                <Select
                  native
                  fullWidth
                  name={ROLE}
                  value={values[ROLE]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched[ROLE] && errors[ROLE] !== undefined}
                  className={classes.color}
                >
                  <option disabled>Select a role</option>
                  {roles.map((role, index) => (
                    <option key={`role-${index}`} value={role}>
                      {role}
                    </option>
                  ))}
                </Select>
                {errors[ROLE] && touched[ROLE] && (
                  <InputFieldError errorText={errors[ROLE]} />
                )}
              </Box>
              <Box>
                <InputField
                  placeholder='Staff Email'
                  name={STAFF_EMAIL}
                  type='text'
                  onBlur={handleBlur}
                  error={
                    touched[STAFF_EMAIL] && errors[STAFF_EMAIL] !== undefined
                  }
                  onChange={handleChange}
                  value={values[STAFF_EMAIL]}
                />
                {errors[STAFF_EMAIL] && touched[STAFF_EMAIL] && (
                  <InputFieldError errorText={errors[STAFF_EMAIL]} />
                )}
              </Box>
              <Box mt={6} className={classes.flexStyles}>
                <ButtonBase
                  disabled={isSubmitting}
                  color='primary'
                  text={
                    isSubmitting ? (
                      <CircularProgress className={style.colorWhite} />
                    ) : (
                      'Create Account'
                    )
                  }
                  variant='contained'
                  type='submit'
                />
              </Box>
              <Box component='p' textAlign='center' color='#6f6f6f' mt={3}>
                You want to sign in?{' '}
                <Box
                  component={Link}
                  to={LOGIN_ROUTE}
                  fontWeight='bolder'
                  fontSize='1rem'
                >
                  Sign In
                </Box>
                <Box mt={2}>
                  <Box
                    component={Link}
                    to={FORGOT_PASSWORD_ROUTE}
                    color='#6f6f6f'
                    fontWeight='bolder'
                    fontSize='0.75rem'
                  >
                    Forgot Password?
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

export default Register
