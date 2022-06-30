import React from 'react'
import Box from '@material-ui/core/Box'
import { NavLink, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import HomeIcon from './vectors/home-icon'
import GroupIcon from './vectors/group-icon'
import MoneyIcon from './vectors/money-icon'
import {
  DAASHBOARD_ROUTE,
  MERCHANTS_ROUTE,
  TRANSACTIONS_ROUTE
} from '../utils/routes'

const useStyles = makeStyles(theme => ({
  container: {
    background: '#f8f8f8',
    padding: '8rem 0.75rem 0rem',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  textStyles: {
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  flexStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem'
  },
  active: {
    color: '#ED7E81'
  },
  inActive: {
    color: '#6F6F6F'
  }
}))

const pink = '#ED7E81'
const grey = '#f8f8f8'

const navLinks = [
  {
    id: 1,
    text: 'Home',
    icon: <HomeIcon />,
    activeIcon: <HomeIcon fill={pink} />,
    path: DAASHBOARD_ROUTE
  },
  {
    id: 2,
    text: 'Merchants',
    icon: <GroupIcon />,
    activeIcon: <GroupIcon fill={pink} fill2={grey} />,
    path: MERCHANTS_ROUTE
  },
  {
    id: 3,
    text: 'Transactions',
    icon: <MoneyIcon />,
    activeIcon: <MoneyIcon fill={pink} />,
    path: TRANSACTIONS_ROUTE
  }
]

const SideNav = () => {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <Box className={classes.container}>
      {navLinks.map(({ id, text, icon, activeIcon, path }) => (
        <NavLink key={id} to={path} className={classes.flexStyles}>
          {pathname === path ? activeIcon : icon}
          <Box
            component='p'
            mt={0}
            textAlign='center'
            className={`${classes.textStyles} ${
              pathname === path ? classes.active : classes.inActive
            }`}
          >
            {text}
          </Box>
        </NavLink>
      ))}
    </Box>
  )
}

export default SideNav
