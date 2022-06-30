import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import ButtonBase from '../components/buttons/button-base'
import InputField from '../components/forms/input-field'
import InputFieldError from '../components/forms/input-field-error'
import styles from '../styles/general-styles'
import { LOGIN_ROUTE } from '../utils/routes'
import adminAuthFormValidator, {
  PASSWORD
} from '../utils/validators/admin-auth-form-validator'

const useStyles = makeStyles(theme => ({
  buttonStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  textStyles: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem'
    }
  }
}))

const initialValues = {
  [PASSWORD]: ''
}

const AdminAuth = () => {
  const classes = useStyles()
  const style = styles()

  return (
    <AuthPageLayout title='Admin Authentication'>
      <Box mt={20}>
        <Formik
          initialValues={initialValues}
          validationSchema={adminAuthFormValidator}
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
              </Box>
              <Box mt={8} className={classes.buttonStyles}>
                <ButtonBase
                  disabled={isSubmitting}
                  color='primary'
                  text={
                    isSubmitting ? (
                      <CircularProgress className={style.colorWhite} />
                    ) : (
                      'Authenticate'
                    )
                  }
                  variant='contained'
                  type='submit'
                />
              </Box>
              <Box
                component='p'
                textAlign='center'
                color='#6f6f6f'
                mt={23}
                mb={13}
                className={classes.textStyles}
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

export default AdminAuth
