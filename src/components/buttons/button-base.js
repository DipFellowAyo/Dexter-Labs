import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  buttonStyles: {
    width: 280,
    height: 50,
    textTransform: 'none',
    borderRadius: 0
  }
})

/**
 *
 * @param {string} text
 * @param {string} color
 * @param {string} variant
 * @returns button element
 */

const ButtonBase = ({ text, color, variant, ...props }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.buttonStyles}
      color={color}
      variant={variant}
      disableElevation
      {...props}
    >
      {text}
    </Button>
  )
}

export default ButtonBase
