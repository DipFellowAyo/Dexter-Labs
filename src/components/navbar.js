import React from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
// import useTheme from '@material-ui/styles/useTheme'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import MessageBadge from './message-badge'
import NotificationBadge from './notification-badge'
import { LANDING_ROUTE } from '../utils/routes'

const useStyles = makeStyles(theme => ({
  appBarStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 51,
    backgroundColor: '#f2f2f2',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
      padding: '0 1rem',
      height: 70
    },
    padding: '0 1%',
    zIndex: '10',
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    }
  },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    borderRadius: 36,
    border: '0.5px solid #6f6f6f',
    height: 36,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  inputStyle: {
    border: 'none',
    background: 'none',
    color: '#6B7688'
  },
  iconButtonStyles: {
    marginLeft: 40,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      paddingRight: 0
    }
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mobile: {
    height: '2.5rem',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  message: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

const NavBar = () => {
  const classes = useStyles()
  // const theme = useTheme()
  // const match = useMediaQuery(theme.breakpoints.up(760))

  return (
    <Box component='nav' className={classes.appBarStyles}>
      <Link to={LANDING_ROUTE}>
        <Box
          component='img'
          // src={match ? '/vectors/dexter.svg' : '/vectors/logo.svg'}
          src='/vectors/dexter.svg'
          alt='dexter'
          className={classes.logo}
        />
        <Box
          component='img'
          src='/vectors/logo.svg'
          alt='logo'
          className={classes.mobile}
        />
      </Link>
      <Box display='flex' alignItems='center'>
        <form>
          <Box className={classes.searchField}>
            <input
              type='text'
              placeholder='Search'
              className={classes.inputStyle}
            />
            <Box component='img' src='/vectors/search.svg' alt='search' />
          </Box>
        </form>
        <Box>
          <NotificationBadge />
          <MessageBadge
            className={classes.message}
            img='/vectors/message.svg'
          />
          <IconButton className={classes.iconButtonStyles}>
            <Box component='img' src='/vectors/avatar.svg' alt='avatar' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
