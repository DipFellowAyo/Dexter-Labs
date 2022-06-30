import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const SelectField = ({ name, onChange, children, ...props }) => {
  return (
    <FormControl fullWidth>
      <Select name={name} onChange={onChange} {...props}>
        {children}
      </Select>
    </FormControl>
  )
}

export default SelectField
