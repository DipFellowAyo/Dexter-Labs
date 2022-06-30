import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

import AuthPageLayout from '../layouts/authpage.layout'
import ButtonBase from '../components/buttons/button-base'

const useStyles = makeStyles(theme => ({
  textStyles: {
    color: '#6f6f6f',
    fontSize: '1.25rem',
    letterSpacing: '2px',
    fontWeight: '300',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  },
  flexStyles: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  }
}))

const RegistrationSuccessful = () => {
  const classes = useStyles()

  return (
    <AuthPageLayout title='Congrats'>
      <Box
        component='p'
        fontSize='1.25rem'
        fontWeight='300'
        color='#6f6f6f'
        letterSpacing='2px'
        textAlign='center'
        mt={0}
        mb={10}
        className={classes.text}
      >
        You have registered a new user &amp; an email has been sent to you and
        them
      </Box>
      <Box
        display='block'
        margin='0 auto'
        component='img'
        src='/vectors/happy.svg'
        alt='happy'
      />
      <Box textAlign='center' mt={9}>
        <Box component='p' mb={0} className={classes.textStyles}>
          User name: UI_MONK
        </Box>
        <Box component='p' mt={0} className={classes.textStyles}>
          Email: abbas@limestart.com
        </Box>
      </Box>
      <Box mt={5} className={classes.flexStyles}>
        <ButtonBase color='primary' text='Continue' variant='contained' />
      </Box>
    </AuthPageLayout>
  )
}

export default RegistrationSuccessful
