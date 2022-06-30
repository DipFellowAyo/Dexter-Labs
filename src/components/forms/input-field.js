import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const InputField = ({ name, onChange, ...props }) => {
  return (
    <FormControl fullWidth>
      <TextField name={name} onChange={onChange} {...props} />
    </FormControl>
  )
}

export default InputField
