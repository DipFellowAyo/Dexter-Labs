import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { useLocation } from 'react-router'
import { makeStyles } from '@material-ui/core'

import More from './more'
import Menu from './menu'
import {
  DAASHBOARD_ROUTE,
  MERCHANTS_ROUTE,
  MESSAGES_ROUTE,
  TRANSACTIONS_ROUTE
} from '../utils/routes'

const useStyles = makeStyles(theme => ({
  sideNavBar: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  lgStyles: {
    display: 'none'
  },
  mobileStyles: {
    display: 'block'
  },
  active: {
    color: '#EC7E81'
  },
  inActive: {
    color: '#6F6F6F'
  },
  searchField: {
    margin: '0 1rem',
    display: 'flex',
    border: '1px solid #6f6f6f',
    height: 29,
    alignItems: 'center',
    borderRadius: 6,
    padding: '1rem 0.5rem',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  inputStyle: {
    width: '100%',
    border: 'none'
  },
  padding: {
    padding: 0
  },
  mobileSection: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

const SideNavBar = ({ page, setPage }) => {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)
  const [openMore, setOpenMore] = useState(false)
  const { pathname } = useLocation()

  const handleOpenMenu = () => {
    setOpenMore(false)
    setOpenMenu(prevState => !prevState)
  }

  const handleOpenMore = () => {
    setOpenMenu(false)
    setOpenMore(prevState => !prevState)
  }

  return (
    <Box>
      <Box className={classes.sideNavBar}>
        <Box
          className={`menu-btn ${openMenu === true ? 'open' : ''}`}
          onClick={handleOpenMenu}
        >
          <Box className='menu-btn__burger'></Box>
        </Box>
        <Box
          className={`${
            pathname === DAASHBOARD_ROUTE ||
            pathname === TRANSACTIONS_ROUTE ||
            pathname === MESSAGES_ROUTE
              ? classes.lgStyles
              : classes.mobileStyles
          }`}
        >
          <IconButton className={classes.padding} onClick={handleOpenMore}>
            <Box component='img' src='/vectors/dots.svg' alt='dots' />
          </IconButton>
        </Box>
      </Box>
      <form
        className={`${
          pathname === DAASHBOARD_ROUTE ||
          pathname === TRANSACTIONS_ROUTE ||
          pathname === MERCHANTS_ROUTE
            ? classes.mobileStyles
            : classes.lgStyles
        }`}
      >
        <Box className={classes.searchField}>
          <input
            type='text'
            placeholder='Search'
            className={classes.inputStyle}
          />
          <Box
            component='img'
            src='/vectors/search.svg'
            alt='search'
            marginLeft='0.5rem'
          />
        </Box>
      </form>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <More
        openMore={openMore}
        setOpenMore={setOpenMore}
        page={page}
        setPage={setPage}
      />
    </Box>
  )
}

export default SideNavBar
