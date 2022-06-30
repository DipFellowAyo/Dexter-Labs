import React from 'react'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, withStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  iconButtonStyle: {
    margin: '0 40px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 0 0'
    }
  }
}))

const StyledBadge = withStyles(theme => ({
  badge: {
    right: 5,
    top: 25,
    padding: '0 4px',
    color: 'white'
  }
}))(Badge)

const NotificationBadge = () => {
  const classes = useStyles()

  return (
    <IconButton aria-label='notification' className={classes.iconButtonStyle}>
      <StyledBadge badgeContent={3} color='secondary'>
        <Box
          component='img'
          src='/vectors/notification.svg'
          alt='notification'
        />
      </StyledBadge>
    </IconButton>
  )
}

export default NotificationBadge
