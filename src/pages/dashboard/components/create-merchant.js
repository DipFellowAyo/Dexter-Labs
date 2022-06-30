import React, { useMemo, useState } from 'react'
// import * as Yup from 'yup'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core'

import InputField from '../../../components/forms/input-field'
import countries from '../../../utils/countries.json'
import SelectField from '../../../components/forms/select-field'
import InputFieldError from '../../../components/forms/input-field-error'
import createNewMerchantFormValidator, {
  CITY_CODE,
  COUNTRY,
  CURRENCY,
  MERCHANT_CITY,
  MERCHANT_EMAIL,
  MERCHANT_ID,
  MERCHANT_NAME,
  MERCHANT_PHONE_NUMBER,
  MERCHANT_URL,
  SECTOR,
  STATE
} from '../../../utils/validators/create-new-merchant-form-validator'

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: '0 1rem',
    [theme.breakpoints.up('lg')]: {
      background: '#f2f2f2',
      borderRadius: 26,
      padding: '24px 116px'
    }
  },
  container: {
    background: '#f2f2f2',
    padding: '24px 0px',
    borderRadius: 26
  },
  formWrapper: {
    width: '80%',
    margin: 'auto'
  },
  buttonStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  whiteColor: {
    color: '#fff'
  },
  headingStyles: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  width: {
    width: '100%'
  },
  buttons: {
    borderRadius: 10,
    boxShadow: '6px 6px 4px #D3C9C9',
    width: 280,
    height: 50,
    textTransform: 'none'
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 16
    }
  },
  selectField: {
    borderRadius: 16,
    color: '#6F6F6F'
  }
}))

const sectors = ['Education', 'Finance', 'Agric']

const CreateMerchant = () => {
  const classes = useStyles()
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('md'))
  const initialValues = {
    [MERCHANT_NAME]: '',
    [MERCHANT_PHONE_NUMBER]: '',
    [SECTOR]: '',
    [MERCHANT_ID]: '',
    [MERCHANT_EMAIL]: '',
    [MERCHANT_URL]: '',
    [CITY_CODE]: '',
    [CURRENCY]: '',
    [COUNTRY]: '',
    [STATE]: ''
  }
  const [formValues, setFormValues] = useState({
    country: '',
    state: '',
    city: ''
  })
  const countryStates = useMemo(
    () => countries.find(c => c.name === formValues.country)?.states,
    [formValues.country]
  )
  const stateCities = useMemo(
    () => countryStates?.find(c => c.name === formValues.state)?.cities,
    [formValues.state, countryStates]
  )
  const handleOnChange = event => {
    event.persist()
    setFormValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <Box className={classes.wrapper}>
      <Box
        component='p'
        fontWeight='600'
        color='#6f6f6f'
        fontSize='1.25rem'
        mb={4}
        className={classes.headingStyles}
      >
        Create merchant account
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={createNewMerchantFormValidator}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleBlur,
          handleChange,
          setFieldValue
        }) => (
          <Form
            onSubmit={e => {
              e.preventDefault()
              console.log({ formValues, values, initialValues })
            }}
          >
            <Grid container spacing={match ? 5 : 10}>
              <Grid item lg={6} className={classes.width}>
                <Box mb={6}>
                  <InputField
                    variant='outlined'
                    placeholder='Enter merchants name'
                    value={values[MERCHANT_NAME]}
                    name={MERCHANT_NAME}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.textField}
                    error={
                      touched[MERCHANT_NAME] &&
                      errors[MERCHANT_NAME] !== undefined
                    }
                  />
                  {errors[MERCHANT_NAME] && touched[MERCHANT_NAME] && (
                    <InputFieldError errorText={errors[MERCHANT_NAME]} />
                  )}
                </Box>
                <Box mb={6}>
                  <InputField
                    type='number'
                    variant='outlined'
                    placeholder='Enter merchants phone number'
                    value={values[MERCHANT_PHONE_NUMBER]}
                    name={MERCHANT_PHONE_NUMBER}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.textField}
                    error={
                      touched[MERCHANT_PHONE_NUMBER] &&
                      errors[MERCHANT_PHONE_NUMBER] !== undefined
                    }
                  />
                  {errors[MERCHANT_PHONE_NUMBER] &&
                    touched[MERCHANT_PHONE_NUMBER] && (
                      <InputFieldError
                        errorText={errors[MERCHANT_PHONE_NUMBER]}
                      />
                    )}
                </Box>
                <Box mb={6}>
                  <SelectField
                    native
                    fullWidth
                    variant='outlined'
                    name={SECTOR}
                    value={values[SECTOR]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.selectField}
                    error={touched[SECTOR] && errors[SECTOR] !== undefined}
                  >
                    <option value='' disabled>
                      Sector
                    </option>
                    {sectors.map((sector, index) => (
                      <option key={index} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </SelectField>
                  {errors[SECTOR] && touched[SECTOR] && (
                    <InputFieldError errorText={errors[SECTOR]} />
                  )}
                </Box>
                <Box mb={6}>
                  <SelectField
                    native
                    fullWidth
                    variant='outlined'
                    name={COUNTRY}
                    value={formValues.country}
                    onChange={handleOnChange}
                    // onBlur={handleBlur}
                    className={classes.selectField}
                    error={touched[COUNTRY] && errors[COUNTRY] !== undefined}
                  >
                    <option value='' disabled>
                      Country
                    </option>
                    {countries.map(({ id, name }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </SelectField>
                  {errors[COUNTRY] && touched[COUNTRY] && (
                    <InputFieldError errorText={errors[COUNTRY]} />
                  )}
                </Box>
                <Box mb={6}>
                  <SelectField
                    native
                    fullWidth
                    variant='outlined'
                    name={STATE}
                    value={formValues.state}
                    onChange={handleOnChange}
                    // onBlur={handleBlur}
                    className={classes.selectField}
                    error={touched[STATE] && errors[STATE] !== undefined}
                  >
                    <option value='' disabled>
                      Merchant state
                    </option>
                    {countryStates?.map(({ id, name }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </SelectField>
                  {/* {errors[STATE] && touched[STATE] && (
                    <InputFieldError errorText={errors[STATE]} />
                  )} */}
                </Box>
                <Box>
                  <SelectField
                    native
                    fullWidth
                    variant='outlined'
                    name='city'
                    value={formValues.city}
                    onChange={handleOnChange}
                    // onBlur={handleBlur}
                    className={classes.selectField}
                    error={
                      touched[MERCHANT_CITY] &&
                      errors[MERCHANT_CITY] !== undefined
                    }
                  >
                    <option value='' disabled>
                      Merchant city
                    </option>
                    {stateCities?.map(({ id, name }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </SelectField>
                  {/* {errors[MERCHANT_CITY] && touched[MERCHANT_CITY] && (
                    <InputFieldError errorText={errors[MERCHANT_CITY]} />
                  )} */}
                </Box>
              </Grid>
              <Grid item lg={6} className={classes.width}>
                <Box mb={6}>
                  <InputField
                    variant='outlined'
                    placeholder='Merchant ID (auto generated)'
                    name={MERCHANT_ID}
                    value={values[MERCHANT_ID]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.textField}
                    error={
                      touched[MERCHANT_ID] && errors[MERCHANT_ID] !== undefined
                    }
                  />
                  {errors[MERCHANT_ID] && touched[MERCHANT_ID] && (
                    <InputFieldError errorText={errors[MERCHANT_ID]} />
                  )}
                </Box>
                <Box mb={6}>
                  <InputField
                    type='email'
                    variant='outlined'
                    placeholder='Enter merchants email'
                    value={values[MERCHANT_EMAIL]}
                    name={MERCHANT_EMAIL}
                    className={classes.textField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched[MERCHANT_EMAIL] &&
                      errors[MERCHANT_EMAIL] !== undefined
                    }
                  />
                  {errors[MERCHANT_EMAIL] && touched[MERCHANT_EMAIL] && (
                    <InputFieldError errorText={errors[MERCHANT_EMAIL]} />
                  )}
                </Box>
                <Box mb={6}>
                  <InputField
                    variant='outlined'
                    placeholder='Merchant URL (auto generated)'
                    className={classes.textField}
                    value={values[MERCHANT_URL]}
                    name={MERCHANT_URL}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched[MERCHANT_URL] &&
                      errors[MERCHANT_URL] !== undefined
                    }
                  />
                  {errors[MERCHANT_URL] && touched[MERCHANT_URL] && (
                    <InputFieldError errorText={errors[MERCHANT_URL]} />
                  )}
                </Box>
                <Box mb={6}>
                  <SelectField
                    native
                    fullWidth
                    variant='outlined'
                    name={CITY_CODE}
                    value={values[CITY_CODE]}
                    onChange={handleChange}
                    className={classes.selectField}
                    error={
                      touched[CITY_CODE] && errors[CITY_CODE] !== undefined
                    }
                  >
                    <option value='' disabled>
                      City code
                    </option>
                    {countries.map(({ id, emoji, phone_code }) => (
                      <option key={id} value={phone_code}>
                        {emoji} {phone_code}
                      </option>
                    ))}
                  </SelectField>
                  {errors[CITY_CODE] && touched[CITY_CODE] && (
                    <InputFieldError errorText={errors[CITY_CODE]} />
                  )}
                </Box>
                <Box>
                  <SelectField
                    native
                    fullWidth
                    variant='outlined'
                    name={CURRENCY}
                    value={values[CURRENCY]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={classes.selectField}
                    error={touched[CURRENCY] && errors[CURRENCY] !== undefined}
                  >
                    <option value='' disabled>
                      Currency
                    </option>
                    {countries.map(({ id, currency_symbol, currency }) => (
                      <option key={id} value={currency}>
                        {currency_symbol} {currency}
                      </option>
                    ))}
                  </SelectField>
                  {errors[CURRENCY] && touched[CURRENCY] && (
                    <InputFieldError errorText={errors[CURRENCY]} />
                  )}
                </Box>
              </Grid>
            </Grid>
            <Box mt={8} mb={5} display='flex' justifyContent='center'>
              <Button
                disableElevation
                disabled={isSubmitting}
                color='primary'
                variant='contained'
                className={classes.buttons}
                type='submit'
              >
                {isSubmitting ? (
                  <CircularProgress className={classes.whiteColor} />
                ) : (
                  'Create merchant'
                )}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default CreateMerchant
