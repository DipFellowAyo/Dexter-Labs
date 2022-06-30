import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Form, Formik } from 'formik'
import { Persist } from 'formik-persist'
import { CircularProgress, makeStyles } from '@material-ui/core'

import InputFieldError from '../../../components/forms/input-field-error'
import mailFormValidator, {
  ATTACHMENT,
  BC,
  CC,
  FROM,
  MESSAGE,
  SUBJECT,
  TO
} from '../../../utils/validators/mail-form-validator'

const useStyles = makeStyles(theme => ({
  inputStyles: {
    borderRadius: 31
  },
  textareaStyles: {
    marginTop: 12,
    borderRadius: 13
  },
  generalStyles: {
    width: '100%',
    border: 'none',
    background: '#f2f2f2',
    padding: '1rem'
  },
  buttonStyles: {
    boxShadow: '0px 0px 0px 0px',
    textTransform: 'capitalize',
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',
    color: 'white',
    width: 150,
    borderRadius: 10
  },
  uploadStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    fontSize: 100
  },
  uploadContainer: {
    height: 36,
    width: 36,
    background: '#EC7E81',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    width: 20
  },
  ccText: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  visibility: {
    display: 'none'
  },
  circularProgress: {
    color: 'white'
  },
  filewrapper: {
    overflowY: 'hidden'
  },
  fileContainer: {
    background: 'rgb(225 221 221)'
  },
  cancelIcon: {
    cursor: 'pointer'
  },
  disabled: {
    background: 'rgba(0, 0, 0, 0.12)'
  },
  pointerEvents: {
    pointerEvents: 'none'
  }
}))

const initialValues = {
  [FROM]: '',
  [TO]: '',
  [SUBJECT]: '',
  [MESSAGE]: '',
  [CC]: '',
  [BC]: '',
  [ATTACHMENT]: []
}

const ComposeMail = () => {
  const classes = useStyles()
  const [openCCField, setOpenCCField] = useState(false)
  const [openBCField, setOpenBCField] = useState(false)
  const [selectedFile, setSelectedFile] = useState([])

  const handleOpenCCField = () => setOpenCCField(prevState => !prevState)
  const handleOpenBCField = () => setOpenBCField(prevState => !prevState)
  const handleCancel = index =>
    setSelectedFile(selectedFile.filter((_, i) => i !== index))

  const handleFileChange = event =>
    setSelectedFile(files => [...files, ...event.target.files])

  console.log({ openBCField })

  return (
    <Box mt={5}>
      <Formik
        initialValues={initialValues}
        validationSchema={mailFormValidator}
        onSubmit={values => {
          console.log(values)
        }}
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
            <Box mb={0.5}>
              <input
                placeholder='From'
                className={`${classes.inputStyles} ${classes.generalStyles}`}
                type='email'
                name={FROM}
                disabled={isSubmitting}
                onBlur={handleBlur}
                error={touched[FROM] && errors[FROM] !== undefined}
                onChange={handleChange}
                value={values[FROM]}
              />
              {errors[FROM] && touched[FROM] && (
                <InputFieldError errorText={errors[FROM]} />
              )}
            </Box>
            <Box mb={0.5} position='relative'>
              <input
                placeholder='To'
                className={`${classes.inputStyles} ${classes.generalStyles}`}
                type='email'
                name={TO}
                disabled={isSubmitting}
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
                top='0.75rem'
                color='#6B7688'
                fontWeight='300'
                onClick={handleOpenCCField}
                className={`${classes.ccText} ${(openCCField || openBCField) &&
                  classes.visibility} ${isSubmitting && classes.pointerEvents}`}
              >
                {values[CC] === '' && values[BC] === '' ? 'CC' : ''}
              </Box>
              <Box
                component='p'
                my={0}
                position='absolute'
                right='1rem'
                top='0.75rem'
                color='#6B7688'
                fontWeight='300'
                onClick={handleOpenBCField}
                className={`${classes.ccText} ${
                  openCCField === true || openBCField === true
                    ? classes.visibility
                    : ''
                } ${isSubmitting && classes.pointerEvents}`}
              >
                {values[BC] === '' && values[CC] === '' ? 'BC' : ''}
              </Box>
            </Box>
            {(openCCField ||
              JSON.parse(localStorage.getItem('compose-mail-form'))?.values[
                `"CC"`
              ].length > 0) && (
              <Box mb={0.5} position='relative'>
                <input
                  placeholder='Cc'
                  className={`${classes.inputStyles} ${classes.generalStyles}`}
                  type='email'
                  name={CC}
                  disabled={isSubmitting}
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
                  className={`${classes.ccText} ${openBCField &&
                    classes.visibility} ${isSubmitting &&
                    classes.pointerEvents}`}
                  onClick={handleOpenBCField}
                >
                  {values[BC] === '' ? 'BC' : ''}
                </Box>
              </Box>
            )}
            {(openBCField ||
              JSON.parse(localStorage.getItem('compose-mail-form'))?.values[
                `"BC"`
              ].length > 0) && (
              <Box mb={0.5} position='relative'>
                <input
                  placeholder='Bc'
                  className={`${classes.inputStyles} ${classes.generalStyles}`}
                  type='email'
                  name={BC}
                  disabled={isSubmitting}
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
                  className={`${classes.ccText} ${openCCField &&
                    classes.visibility} ${isSubmitting &&
                    classes.pointerEvents}`}
                  onClick={handleOpenCCField}
                >
                  {values[CC] === '' || openBCField === true ? 'CC' : ''}
                </Box>
              </Box>
            )}
            <input
              placeholder='Subject'
              className={`${classes.inputStyles} ${classes.generalStyles}`}
              name={SUBJECT}
              disabled={isSubmitting}
              onBlur={handleBlur}
              error={touched[SUBJECT] && errors[SUBJECT] !== undefined}
              onChange={handleChange}
              value={values[SUBJECT]}
            />
            {errors[SUBJECT] && touched[SUBJECT] && (
              <InputFieldError errorText={errors[SUBJECT]} />
            )}
            <Box mt={2} position='relative'>
              <textarea
                rows='27'
                className={`${classes.generalStyles} ${classes.textareaStyles}`}
                name={MESSAGE}
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                disableElevation
                variant='contained'
                color='secondary'
                className={classes.buttonStyles}
              >
                {isSubmitting ? (
                  <CircularProgress
                    className={classes.circularProgress}
                    size='25px'
                  />
                ) : (
                  'Send'
                )}
              </Button>
              <Box position='absolute' bottom='0.75rem' right='11rem'>
                <Box
                  position='relative'
                  overflow='hidden'
                  display='inline-block'
                >
                  <input
                    type='file'
                    disabled={isSubmitting}
                    name={ATTACHMENT}
                    className={classes.uploadStyle}
                    onChange={handleFileChange}
                    multiple
                  />
                  <Box
                    className={`${classes.uploadContainer} ${isSubmitting ===
                      true && classes.disabled}`}
                  >
                    <Box
                      component='img'
                      src='/vectors/file-upload.svg'
                      alt='file upload'
                      className={classes.imgStyle}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                flexDirection='column'
                position='absolute'
                bottom='3rem'
                left='0.5rem'
              >
                {selectedFile?.map((item, index) => (
                  <Box
                    key={index}
                    justifyContent='space-between'
                    marginBottom='0.5rem'
                    display='flex'
                    className={classes.fileContainer}
                  >
                    <Box
                      padding='4px 4px 4px 8px'
                      border='1px solid transparent'
                      fontWeight='bold'
                      maxWidth='200px'
                      whiteSpace='nowrap'
                      textOverflow='ellipsis'
                      className={classes.filewrapper}
                    >
                      {item.name}
                    </Box>
                    <Box
                      component='img'
                      src='/vectors/cancel.svg'
                      alt='cancel'
                      className={`${classes.cancelIcon} ${isSubmitting ===
                        true && classes.pointerEvents}`}
                      ml={1}
                      onClick={() => handleCancel(index)}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
            <Persist name='compose-mail-form' />
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default ComposeMail
