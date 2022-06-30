import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import ButtonBase from '../components/buttons/button-base'
import InputField from '../components/forms/input-field'
import InputFieldError from '../components/forms/input-field-error'
import styles from '../styles/general-styles'
import personalisePasswordFormValidator, {
  PASSWORD,
  PASSWORD_CONFIRMATION,
  USERNAME
} from '../utils/validators/personalise-password-form-validator'

const useStyles = makeStyles(theme => ({
  textStyles: {
    color: '#6f6f6f',
    fontSize: '1.25rem',
    fontWeight: '300',
    letterSpacing: '2px',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  },
  buttonStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginBottom: '2rem'
    }
  }
}))

const initialValues = {
  [USERNAME]: '',
  [PASSWORD]: '',
  [PASSWORD_CONFIRMATION]: ''
}

const PasswordPersonalization = () => {
  const classes = useStyles()
  const style = styles()

  return (
    <AuthPageLayout title='Welcome To Dexter'>
      <Box mt={1}>
        <Box
          display='block'
          margin='auto'
          component='img'
          src='/vectors/happy-customer.svg'
          alt='happy'
        />
        <Box textAlign='center'>
          <Box component='p' mb={0} className={classes.textStyles}>
            User name: UI_MONK
          </Box>
          <Box component='p' mt={0} mb={0} className={classes.textStyles}>
            Email: abbas@limestart.com
          </Box>
          <Box component='p' mt={0} className={classes.textStyles}>
            Role: Sub admin
          </Box>
        </Box>
        <Box
          component='p'
          textAlign='center'
          color='#c1b8b8'
          fontSize='1.1rem'
          letterSpacing='2px'
          fontWeight='bold'
          className={classes.text}
        >
          Personalise your username and password
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={personalisePasswordFormValidator}
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
              <Box mb={6}>
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
              <Box mb={6}>
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
              <Box>
                <InputField
                  placeholder='Password Comfirmation'
                  name={PASSWORD_CONFIRMATION}
                  type='password'
                  onBlur={handleBlur}
                  error={
                    touched[PASSWORD_CONFIRMATION] &&
                    errors[PASSWORD_CONFIRMATION] !== undefined
                  }
                  onChange={handleChange}
                  value={values[PASSWORD_CONFIRMATION]}
                />
                {errors[PASSWORD_CONFIRMATION] &&
                  touched[PASSWORD_CONFIRMATION] && (
                    <InputFieldError
                      errorText={errors[PASSWORD_CONFIRMATION]}
                    />
                  )}
              </Box>
              <Box mt={6} className={classes.buttonStyles}>
                <ButtonBase
                  disabled={isSubmitting}
                  color='primary'
                  text={
                    isSubmitting ? (
                      <CircularProgress className={style.colorWhite} />
                    ) : (
                      'Confirm'
                    )
                  }
                  variant='contained'
                  type='submit'
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthPageLayout>
  )
}

export default PasswordPersonalization
