import React from 'react'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import { LANDING_ROUTE } from '../utils/routes'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fff'
  },
  gridContainer: {
    height: '100%',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down(992)]: {
      gridTemplateColumns: '1fr'
    }
  },
  leftFrame: {
    padding: '1rem',
    boxShadow: '8px 2px 8px #cec1c1',
    borderRadius: '0px 40px 40px 0px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px 0px 40px 40px',
      boxShadow: '2px 8px 8px #cec1c1'
    }
  },
  imageContainer: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      margin: '6rem 0 2rem'
    }
  },
  rightFrame: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  flexStyles: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '1rem',
      left: '1rem'
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  formContainer: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      margin: '0 auto'
    }
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#c1b8b8',
    letterSpacing: 4,
    fontWeight: 'bold',
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '3rem',
      marginTop: '2rem',
      fontSize: '1rem',
      letterSpacing: 2
    }
  }
}))

const AuthPageLayout = ({ children, title }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root} flexGrow='1'>
      <Box className={classes.gridContainer}>
        <Box className={classes.leftFrame}>
          <Link to={LANDING_ROUTE} className={classes.flexStyles}>
            <Box component='img' src='/vectors/logo.svg' alt='logo' />
          </Link>
          <Box className={classes.imageContainer}>
            <Box
              component='img'
              src='/vectors/office.svg'
              alt='office'
              display='block'
              margin='0 auto'
            />
          </Box>
        </Box>
        <Box className={classes.rightFrame}>
          <Box className={classes.formContainer}>
            <Box component='h2' my={0} className={classes.title}>
              {title}
            </Box>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AuthPageLayout
