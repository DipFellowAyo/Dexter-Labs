import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wrapper: {
    [theme.breakpoints.up('md')]: {
      background: '#f2f2f2',
      borderRadius: 26,
      padding: '24px 116px',
      height: 809
    }
  },
  container: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '18rem auto 0',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  },
  buttonStyles: {
    height: 65,
    border: '1px solid #6F6F6F',
    borderRadius: 10,
    padding: '1rem'
  },
  uploadStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    fontSize: 100
  },
  lgWidth: {
    [theme.breakpoints.up('md')]: {
      width: 679,
      marginRight: '1rem'
    }
  },
  buttons: {
    color: 'white',
    width: 205,
    height: 55,
    background: '#6f6f6f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    boxShadow: '6px 6px 4px #D3C9C9',
    border: 'none',
    cursor: 'pointer',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      margin: '15rem auto 0'
    }
  },
  uploadButton: {
    textTransform: 'none',
    width: 205,
    height: 55,
    borderRadius: 10,
    boxShadow: '6px 6px 4px #D3C9C9'
  },
  mobileMargin: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '10rem'
    }
  },
  instruction: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  displayNone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

const BatchCreate = () => {
  const classes = useStyles()
  const [selectedFile, setSelectedFile] = useState('')

  const handleChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleFileUpload = event => {
    event.preventDefault()
  }

  return (
    <Box className={classes.wrapper}>
      <Box
        component='p'
        my={0}
        fontWeight='600'
        color='#6f6f6f'
        fontSize='1.5rem'
        className={classes.displayNone}
      >
        Upload multiple Merchant at once
      </Box>
      <Box
        my={0}
        component='p'
        color='#6f6f6f'
        fontStyle='italic'
        className={classes.displayNone}
      >
        Note format properly before attaching CSV file, click here to{' '}
        <Box component='a' color='#ed7e81'>
          see formatting instruction
        </Box>
      </Box>

      <Box className={classes.mobileMargin}>
        <Box
          my={0}
          component='p'
          color='#6F6F6F'
          fontWeight='600'
          fontSize='1rem'
          className={classes.instruction}
        >
          Upload multiple Merchant at once
        </Box>
        <form onSubmit={handleFileUpload}>
          <Box className={classes.container}>
            <Box
              position='relative'
              overflow='hidden'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              className={`${classes.buttonStyles} ${classes.lgWidth}`}
            >
              <input
                type='file'
                accept='.csv'
                className={classes.uploadStyle}
                onChange={handleChange}
              />
              <Box my={0} component='p' color='#6f6f6f'>
                {selectedFile === '' ? 'Browse for CSV' : selectedFile?.name}
              </Box>
              <Box
                component='img'
                src='/vectors/arrow-down.svg'
                alt='arrow down'
              />
            </Box>
            <Box
              my={0}
              mt={1}
              component='p'
              color='#6f6f6f'
              fontStyle='italic'
              className={classes.instruction}
            >
              Note format properly before attaching CSV file, click here to{' '}
              <Box component='a' color='#ed7e81'>
                see formatting instruction
              </Box>
            </Box>
            <Button
              type='submit'
              disableElevation
              variant='contained'
              color='primary'
              className={classes.buttons}
            >
              Upload CSV
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default BatchCreate
