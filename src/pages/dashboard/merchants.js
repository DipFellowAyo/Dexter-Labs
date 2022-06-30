import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

import DashboardLayout from '../../layouts/dashboard.layout'
import CustomPages from '../../components/custom-pages'
import SideNavBar from '../../components/side-nav-bar'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem'
    }
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      height: 90,
      background: '#f2f2f2',
      padding: '0 1.5rem'
    }
  },
  borderRadius: {
    borderRadius: '15px 15px 0px 0px'
  },
  textStyles: {
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer'
  },
  active1: {
    color: '#ed7e81'
  },
  inActive1: {
    color: '#6f6f6f'
  },
  buttonStyles: {
    height: 55,
    width: 205,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    boxShadow: '6px 6px 4px #C1B8B8',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  active2: {
    background: '#ec7e81'
  },
  inActive2: {
    background: '#6f6f6f'
  },
  lgStyles: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

export const menuLinks = [
  {
    id: 1,
    text: 'Create merchant'
  },
  {
    id: 2,
    text: 'Batch create'
  },
  {
    id: 3,
    text: 'Delete merchant'
  },
  {
    id: 4,
    text: 'Message merchant'
  },
  {
    id: 5,
    text: 'All Merchants'
  },
  {
    id: 6,
    text: 'Inactive Merchants'
  }
]

const Merchants = () => {
  const classes = useStyles()
  const [page, setPage] = useState(5)

  return (
    <DashboardLayout>
      <SideNavBar page={page} setPage={setPage} menuLinks={menuLinks} />
      <Box className={classes.mainContainer}>
        <Box
          className={`${classes.wrapper} ${classes.borderRadius} ${classes.lgStyles}`}
        >
          {menuLinks.slice(0, 4).map(({ id, text }) => (
            <Box
              key={id}
              onClick={() => setPage(id)}
              component='p'
              marginRight='2.6rem'
              className={`${classes.textStyles} ${
                id === page ? classes.active1 : classes.inActive1
              }`}
            >
              {text}
            </Box>
          ))}
        </Box>
        <Box my={2} className={`${classes.wrapper}`}>
          {menuLinks.slice(4).map(({ id, text }) => (
            <Box
              key={id}
              onClick={() => setPage(id)}
              mr={2}
              className={`${classes.buttonStyles} ${
                id === page ? classes.active2 : classes.inActive2
              }`}
            >
              {text}
            </Box>
          ))}
        </Box>
        <CustomPages page={page} />
      </Box>
    </DashboardLayout>
  )
}

export default Merchants
