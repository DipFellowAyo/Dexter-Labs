import React from 'react'
import Box from '@material-ui/core/Box'

const InputFieldError = ({ errorText, ...props }) => {
  return (
    <Box pt='2px' fontSize='12px' color='red' {...props}>
      {errorText}
    </Box>
  )
}

export default InputFieldError
