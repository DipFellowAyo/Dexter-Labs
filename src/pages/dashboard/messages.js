import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'

import DashboardLayout from '../../layouts/dashboard.layout'
import Inbox from './components/inbox'
import ComposeMail from './components/compose-mail'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0 1rem',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  active: {
    background: '#ED7E81',
    color: '#fff',
    boxShadow: '2px 2px 2px #ED7E8164'
  },
  inActiive: {
    color: '#ED7E81',
    border: '0.5px solid #ED7E81'
  },
  boxStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    height: 45,
    cursor: 'pointer',
    padding: '0.5rem',
    textAlign: 'center'
  },
  wrapper: {
    height: 55,
    border: '0.5px solid #A4A2A5',
    margin: '0 auto',
    borderRadius: 9,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: 8,
    placeContent: 'center',
    padding: '0 6px'
  }
}))

const Messages = () => {
  const classes = useStyles()
  const [page, setPage] = useState(false)

  return (
    <DashboardLayout>
      <Box className={classes.container}>
        <Box className={classes.wrapper}>
          <Box
            className={`${classes.boxStyle} ${
              page === false ? classes.active : classes.inActiive
            }`}
            onClick={() => setPage(false)}
          >
            Inbox
          </Box>
          <Box
            className={`${classes.boxStyle} ${
              page === true ? classes.active : classes.inActiive
            }`}
            onClick={() => setPage(true)}
          >
            Compose mail
          </Box>
        </Box>
        {page === false ? <Inbox setPage={setPage} /> : <ComposeMail />}
      </Box>
    </DashboardLayout>
  )
}

export default Messages
