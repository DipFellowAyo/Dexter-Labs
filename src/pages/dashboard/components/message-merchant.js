import React, { useRef, useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core'

import makeFileChangeHandler from '../../../utils/make-file-change-handler'
import InputFieldError from '../../../components/forms/input-field-error'
import mailFormValidator, {
  BC,
  CC,
  FROM,
  IMAGE,
  MESSAGE,
  SUBJECT,
  TO
} from '../../../utils/validators/mail-form-validator'

const useStyles = makeStyles(theme => ({
  wrapper: {
    [theme.breakpoints.up('lg')]: {
      background: '#f2f2f2',
      borderRadius: 26,
      padding: '24px 116px'
    }
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      width: '60%',
      margin: '0 auto'
    }
  },
  inputStyles: {
    width: '100%',
    border: 'none',
    borderRadius: 31,
    padding: '1rem',
    background: '#fff',
    fontSize: '1rem',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      background: '#f2f2f2'
    }
  },
  buttonStyles: {
    boxShadow: '0px 0px 0px 0px',
    textTransform: 'capitalize',
    width: '225px',
    height: 44,
    borderRadius: 30,
    color: '#fff',
    fontWeight: '500',
    fontSize: '1rem',
    position: 'absolute',
    right: '1rem',
    bottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: 150
    }
  },
  uploadStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    fontSize: 100
  },
  uploadContainer: {
    height: 40,
    width: 40,
    background: '#EC7E81',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailStyles: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  headingStyles: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginBottom: 13
    }
  },
  fontFamily: {
    fontFamily: 'Poppins'
  },
  imgContainer: {
    [theme.breakpoints.down('sm')]: {
      right: '11rem'
    }
  },
  ccText: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  visibility: {
    display: 'none'
  }
}))

const initialValues = {
  [FROM]: '',
  [TO]: '',
  [SUBJECT]: '',
  [MESSAGE]: '',
  [CC]: '',
  [BC]: '',
  [IMAGE]: null
}

const MessageMerchant = () => {
  const classes = useStyles()
  const [openCCField, setOpenCCField] = useState(false)
  const [openBCField, setOpenBCField] = useState(false)
  const imageInputElRef = useRef(null)

  const handleCCOpenField = () => setOpenCCField(prevState => !prevState)
  const handleBCOpenField = () => setOpenBCField(prevState => !prevState)

  return (
    <Box className={classes.wrapper}>
      <Box
        component='p'
        fontWeight='600'
        fontSize='1.3rem'
        color='#6f6f6f'
        mb={4}
        className={classes.headingStyles}
      >
        Mail Merchant(s)
      </Box>
      <Box className={classes.container}>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='flex-end'
          className={classes.emailStyles}
        >
          <Box
            component='img'
            src='/vectors/message.svg'
            alt='mail'
            marginRight='0.5rem'
          />
          <Box
            component='p'
            mt={0}
            color='#6f6f6f'
            fontWeight='500'
            fontSize='1rem'
          >
            Email
          </Box>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={mailFormValidator}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            setFieldError,
            setFieldValue,
            setFieldTouched
          }) => (
            <Form
              onSubmit={e => {
                e.preventDefault()
                console.log({ values })
              }}
            >
              <Box mb={2}>
                <input
                  type='email'
                  placeholder='From'
                  className={classes.inputStyles}
                  name={FROM}
                  onBlur={handleBlur}
                  error={touched[FROM] && errors[FROM] !== undefined}
                  onChange={handleChange}
                  value={values[FROM]}
                />
                {errors[FROM] && touched[FROM] && (
                  <InputFieldError errorText={errors[FROM]} />
                )}
              </Box>
              <Box mb={2} position='relative'>
                <input
                  type='email'
                  placeholder='To'
                  className={classes.inputStyles}
                  name={TO}
                  onBlur={handleBlur}
                  error={touched[TO] && errors[TO] !== undefined}
                  onChange={handleChange}
                  value={values[TO]}
                />
                {errors[TO] && touched[TO] && (
                  <InputFieldError errorText={errors[TO]} />
                )}
                <Box
                  component='p'
                  my={0}
                  position='absolute'
                  right='2.5rem'
                  top='1rem'
                  color='#6B7688'
                  fontWeight='300'
                  className={`${classes.ccText} ${
                    openCCField === true || openBCField === true
                      ? classes.visibility
                      : ''
                  }`}
                  onClick={handleCCOpenField}
                >
                  CC
                </Box>
                <Box
                  component='p'
                  my={0}
                  position='absolute'
                  right='1rem'
                  top='1rem'
                  color='#6B7688'
                  fontWeight='300'
                  className={`${classes.ccText} ${
                    openCCField === true || openBCField === true
                      ? classes.visibility
                      : ''
                  }`}
                  onClick={handleBCOpenField}
                >
                  BC
                </Box>
              </Box>
              {openCCField && (
                <Box mb={2} position='relative'>
                  <input
                    type='email'
                    placeholder='Cc'
                    className={classes.inputStyles}
                    name={CC}
                    onBlur={handleBlur}
                    error={touched[CC] && errors[CC] !== undefined}
                    onChange={handleChange}
                    value={values[CC]}
                  />
                  {errors[CC] && touched[CC] && (
                    <InputFieldError errorText={errors[CC]} />
                  )}
                  <Box
                    component='p'
                    my={0}
                    position='absolute'
                    right='1rem'
                    top='1rem'
                    color='#6B7688'
                    fontWeight='300'
                    className={`${classes.ccText} ${
                      openBCField === true ? classes.visibility : ''
                    }`}
                    onClick={handleBCOpenField}
                  >
                    BC
                  </Box>
                </Box>
              )}
              {openBCField && (
                <Box mb={2} position='relative'>
                  <input
                    type='email'
                    placeholder='Bc'
                    className={classes.inputStyles}
                    name={BC}
                    onBlur={handleBlur}
                    error={touched[BC] && errors[BC] !== undefined}
                    onChange={handleChange}
                    value={values[BC]}
                  />
                  {errors[BC] && touched[BC] && (
                    <InputFieldError errorText={errors[BC]} />
                  )}
                  <Box
                    component='p'
                    my={0}
                    position='absolute'
                    right='1rem'
                    top='1rem'
                    color='#6B7688'
                    fontWeight='300'
                    className={`${classes.ccText} ${
                      openCCField === true ? classes.visibility : ''
                    }`}
                    onClick={handleCCOpenField}
                  >
                    CC
                  </Box>
                </Box>
              )}
              <Box mb={2}>
                <input
                  placeholder='Subject'
                  className={classes.inputStyles}
                  name={SUBJECT}
                  onBlur={handleBlur}
                  error={touched[SUBJECT] && errors[SUBJECT] !== undefined}
                  onChange={handleChange}
                  value={values[SUBJECT]}
                />
                {errors[SUBJECT] && touched[SUBJECT] && (
                  <InputFieldError errorText={errors[SUBJECT]} />
                )}
              </Box>
              <Box position='relative'>
                <textarea
                  rows='17'
                  className={`${classes.inputStyles} ${classes.fontFamily}`}
                  name={MESSAGE}
                  onBlur={handleBlur}
                  error={touched[MESSAGE] && errors[MESSAGE] !== undefined}
                  onChange={handleChange}
                  value={values[MESSAGE]}
                />
                {errors[MESSAGE] && touched[MESSAGE] && (
                  <InputFieldError errorText={errors[MESSAGE]} />
                )}
                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  className={classes.buttonStyles}
                >
                  Send
                </Button>
                <Box
                  position='absolute'
                  bottom='1.75rem'
                  right='16rem'
                  className={classes.imgContainer}
                >
                  <Box
                    position='relative'
                    overflow='hidden'
                    display='inline-block'
                  >
                    <input
                      type='file'
                      id={IMAGE}
                      ref={imageInputElRef}
                      className={classes.uploadStyle}
                      onChange={makeFileChangeHandler({
                        key: IMAGE,
                        setFieldError,
                        setFieldValue,
                        setFieldTouched
                      })}
                    />

                    <Box className={classes.uploadContainer}>
                      <Box
                        component='img'
                        src='/vectors/file-upload.svg'
                        width='1.2rem'
                      />
                    </Box>
                  </Box>
                </Box>
                {errors[IMAGE] && touched[IMAGE] && (
                  <InputFieldError errorText={errors[IMAGE]} />
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default MessageMerchant
