import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

import DashboardLayout from '../../layouts/dashboard.layout'
import AllTransactions from './components/all-transactions'
import Orders from './components/orders'
import Sales from './components/sales'

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    background: '#f2f2f2',
    padding: '0 1.5rem'
  },
  borderRadius: {
    borderRadius: '15px 15px 0px 0px'
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
    cursor: 'pointer'
  },
  active2: {
    backgroundColor: '#EC7E81'
  },
  inActive: {
    backgroundColor: '#6f6f6f'
  },
  lgStyles: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileStyles: {
    height: 65,
    border: '1px solid #A4A2A5',
    borderRadius: 10,
    margin: '0 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '0.5rem',
    placeContent: 'center',
    padding: '0 0.5rem',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mobileButtonStyle: {
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#fff',
    cursor: 'pointer'
  },
  seondaryContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem'
    }
  },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 1rem',
    borderRadius: 36,
    border: '0.5px solid #C3CFE2',
    height: 29,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  inputStyle: {
    border: 'none',
    background: 'none',
    color: '#6B7688'
  }
}))

const menuLinks = [
  {
    id: 1,
    text: 'All Transactions'
  },
  {
    id: 2,
    text: 'Orders'
  },
  {
    id: 3,
    text: 'Sales'
  }
]

const Transactions = () => {
  const classes = useStyles()
  const [page, setPage] = useState(1)

  return (
    <DashboardLayout>
      <Box>
        <Box className={classes.mobileStyles}>
          {menuLinks.map(({ id, text }) => (
            <Box
              key={id}
              onClick={() => setPage(id)}
              className={`${classes.mobileButtonStyle} ${
                id === page ? classes.active2 : classes.inActive
              }`}
            >{`${id === 1 ? text.slice(0, 3) : text}`}</Box>
          ))}
        </Box>
        <Box>
          <Box
            className={`${classes.wrapper} ${classes.borderRadius} ${classes.lgStyles}`}
          >
            <Box marginLeft='auto' marginRight='16rem'>
              <form>
                <Box className={classes.searchField}>
                  <input placeholder='Search' className={classes.inputStyle} />
                  <Box component='img' src='/vectors/search.svg' alt='search' />
                </Box>
              </form>
            </Box>
          </Box>
          <Box my={2} className={`${classes.wrapper} ${classes.lgStyles}`}>
            {menuLinks.map(({ id, text }) => (
              <Box
                key={id}
                onClick={() => setPage(id)}
                mr={2}
                className={`${classes.buttonStyles} ${
                  id === page ? classes.active2 : classes.inActive
                }`}
              >
                {text}
              </Box>
            ))}
          </Box>
          <Box className={classes.seondaryContainer}>
            {page === 1 ? (
              <AllTransactions />
            ) : page === 2 ? (
              <Orders />
            ) : (
              <Sales />
            )}
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default Transactions
