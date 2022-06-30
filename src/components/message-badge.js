import React from 'react'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core'

const StyledBadge = withStyles(theme => ({
  badge: {
    right: 2,
    top: 19,
    color: 'white',
    padding: '0 4px'
  }
}))(Badge)

const MessageBadge = ({ img, ...probs }) => {
  return (
    <IconButton aria-label='message' {...probs}>
      <StyledBadge badgeContent={1} color='secondary'>
        <Box component='img' src={img} alt='message' />
      </StyledBadge>
    </IconButton>
  )
}

export default MessageBadge
