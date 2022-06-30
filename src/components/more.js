import React from 'react'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'

import { menuLinks } from '../pages/dashboard/merchants'

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
    borderRadius: '15px 0px 0px 15px',
    boxShadow: 'none',
    border: '1px solid #C1B8B8'
  },
  active1: {
    color: '#ed7e81'
  },
  inActive1: {
    color: '#6f6f6f'
  },
  boxContainer: {
    height: 72,
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderBottom: {
    borderBottom: '1px solid #B8B8B8',
    '&:last-child': {
      borderBottom: 0
    }
  },
  root: {
    top: '10rem !important'
  }
}))

const More = ({ openMore, setOpenMore, page, setPage }) => {
  const classes = useStyles()

  return (
    <Drawer
      style={{ width: 254 }}
      className={classes.muiBackDrop}
      classes={{ paper: classes.paper, root: classes.root }}
      onClose={() => setOpenMore(false)}
      open={openMore}
      anchor='right'
    >
      {menuLinks.slice(0, 4).map(({ id, text }) => (
        <Box
          key={id}
          fontSize='1rem'
          fontWeight='600'
          onClick={() => {
            setPage(id)
            setOpenMore(false)
          }}
          className={`${classes.boxContainer} ${classes.borderBottom} ${
            id === page ? classes.active1 : classes.inActive1
          }`}
        >
          {text}
        </Box>
      ))}
    </Drawer>
  )
}

export default More
