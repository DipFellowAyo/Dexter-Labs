import React from 'react'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { makeStyles } from '@material-ui/styles'

import HomeIcon from './vectors/home-icon'
import GroupIcon from './vectors/group-icon'
import MoneyIcon from './vectors/money-icon'
import MessageBadge from './message-badge'
import {
  DAASHBOARD_ROUTE,
  MERCHANTS_ROUTE,
  MESSAGES_ROUTE,
  TRANSACTIONS_ROUTE
} from '../utils/routes'

const useStyles = makeStyles(theme => ({
  muiBackDrop: {
    '& .MuiBackdrop-root': {
      top: 125,
      background: 'rgba(255, 255, 255, 0.7)'
    }
  },
  paper: {
    top: 125,
    height: 'max-content',
    width: 254,
    borderRadius: '0px 15px 15px 0px',
    boxShadow: 'none',
    border: '1px solid #C1B8B8'
  },
  borderBottom: {
    borderBottom: '1px solid #B8B8B8',
    '&:last-child': {
      borderBottom: 0
    }
  },
  active: {
    color: '#ED7E81'
  },
  inActive: {
    color: '#6F6F6F'
  },
  linkStyle: {
    height: 72,
    width: 90,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    alignItems: 'center'
  },
  root: {
    top: '10rem !important'
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
    text: 'Inbox',
    icon: <MessageBadge img='/vectors/message.svg' />,
    activeIcon: <MessageBadge img='/vectors/active-message.svg' />,
    path: MESSAGES_ROUTE
  },
  {
    id: 3,
    text: 'Merchants',
    icon: <GroupIcon />,
    activeIcon: <GroupIcon fill={pink} fill2={grey} />,
    path: MERCHANTS_ROUTE
  },
  {
    id: 4,
    text: 'Transactions',
    icon: <MoneyIcon />,
    activeIcon: <MoneyIcon fill={pink} />,
    path: TRANSACTIONS_ROUTE
  }
]

const Menu = ({ openMenu, setOpenMenu }) => {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <Drawer
      open={openMenu}
      onClose={() => setOpenMenu(false)}
      anchor='left'
      className={classes.muiBackDrop}
      classes={{ paper: classes.paper, root: classes.root }}
    >
      {navLinks.map(({ id, text, icon, activeIcon, path }) => (
        <Box key={id} className={classes.borderBottom}>
          <NavLink
            to={path}
            className={classes.linkStyle}
            onClick={() => setOpenMenu(false)}
          >
            {pathname === path ? activeIcon : icon}
            <Box
              my={0}
              component='p'
              fontSize='0.5rem'
              className={`${
                pathname === path ? classes.active : classes.inActive
              }`}
            >
              {text}
            </Box>
          </NavLink>
        </Box>
      ))}
    </Drawer>
  )
}

export default Menu
