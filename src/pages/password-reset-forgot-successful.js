import React from 'react'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import ButtonBase from '../components/buttons/button-base'
import { LOGIN_ROUTE } from '../utils/routes'

const useStyles = makeStyles(theme => ({
  flexStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      letterSpacing: 2
    }
  }
}))

const PasswordResetForgotSuccessful = () => {
  const classes = useStyles()

  return (
    <AuthPageLayout title='Forgot Password'>
      <Box
        component='p'
        color='#6f6f6f'
        textAlign='center'
        letterSpacing='2px'
        fontWeight='300'
        fontSize='20px'
        mt={0}
        mb={8}
        className={classes.text}
      >
        Well done a mail has been sent to you to help you get a new password
      </Box>
      <Box
        component='img'
        src='/vectors/success.svg'
        alt='success'
        display='block'
        margin='0 auto'
      />
      <Box mt={9} className={classes.flexStyles}>
        <ButtonBase color='primary' text='Go to mail' variant='contained' />
      </Box>
      <Box component='p' textAlign='center' color='#6f6f6f' mt={6}>
        You remember your password?{' '}
        <Box
          component={Link}
          to={LOGIN_ROUTE}
          fontWeight='bolder'
          fontSize='1rem'
        >
          Sign In
        </Box>
      </Box>
    </AuthPageLayout>
  )
}

export default PasswordResetForgotSuccessful
