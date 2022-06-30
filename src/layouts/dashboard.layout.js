import React from 'react'
import Box from '@material-ui/core/Box'
import { useLocation } from 'react-router'
import { makeStyles } from '@material-ui/core'

import NavBar from '../components/navbar'
import SideNav from '../components/side-nav'
import SideNavBar from '../components/side-nav-bar'
import { MERCHANTS_ROUTE } from '../utils/routes'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    background: '#fff'
  },
  main: {
    paddingTop: '5rem',
    paddingBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      paddingTop: 0
    }
  }
}))

const DashboardLayout = ({ children }) => {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <>
      <NavBar />
      <SideNav />
      {pathname === MERCHANTS_ROUTE ? null : <SideNavBar />}
      <Box className={classes.root}>
        <Box margin='0 1.5rem 0 8rem' className={classes.main}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default DashboardLayout
