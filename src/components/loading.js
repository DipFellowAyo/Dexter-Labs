import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  centered: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

const Loading = () => {
  const classes = useStyles()

  return (
    <Box className={classes.centered}>
      <CircularProgress color='secondary' />
    </Box>
  )
}

export default Loading
