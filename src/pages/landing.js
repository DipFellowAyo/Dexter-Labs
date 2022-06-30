import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import { LOGIN_ROUTE } from '../utils/routes'

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '70%',
    margin: '10rem auto 0rem'
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#c1b8b8',
    letterSpacing: 4,
    fontWeight: 'bold',
    fontSize: '2rem'
  },
  colorWhite: {
    color: 'white'
  },
  flexStyles: {
    display: 'flex',
    backgroundColor: '#EBEBEB',
    height: 170,
    width: 170,
    margin: '0 auto',
    boxShadow: '0.2rem 0.2rem 10px 1px #bbb, -0.2rem -0.2rem 10px 1px #fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  centerButton: {
    justifyContent: 'center'
  },
  textStyles: {
    justifyContent: 'flex-end',
    marginTop: 5,
    color: '#6f6f6f',
    fontWeight: '600'
  },
  mainWrapper:{
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5vh 0',
    alignItems: 'center',
    backgroundColor: '#e2e1df',
  },
  platform: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',   
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#e2e1df',
    color: '#707070',
    width: 700,
    minWidth: 500,
    height: 600,
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0.5rem 0.5rem 15px 1px #bbb, -0.5rem -0.5rem 15px 1px #fff',
    [theme.breakpoints.down('sm')]:{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      border: 0,
      width: '100%',
    },
  },
  heading: {
    fontSize: '41px',
    margin: "0px",
  },
  copyright:{
      position: 'absolute',
      bottom: '30px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
      },
  },
  white: {
    color: '#fff',
    marginBottom: 0,
    fontSize: '20px',
    [theme.breakpoints.down('sm')]:{
      marginBottom: '4.4rem',
      fontWeight: 500,
    },
  },
  smallText: {
      fontSize: '12px',
      margin: 0,
      [theme.breakpoints.down('sm')]:{
        width: '200px',
        margin: '0 auto',
        fontSize: '9px',
      },
  },
  progressArea: {
    textAlign: 'center',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  progressLabel: {
    fontSize: '10px',
  },
  ldsEllipsis: {
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '10px',
    '& div': {
      position: 'absolute',
      top: '10px',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#fff',
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
      '&:nth-child(1)':{
        left: '8px',
        animation: `$ldsEllipsis1 0.6s infinite`,
      },
      '&:nth-child(2)': {
        left: '8px',
        animation: `$ldsEllipsis2 0.6s infinite`,
      },
      '&:nth-child(3)': {
        left: '32px',
        animation: `$ldsEllipsis2 0.6s infinite`,
      },
      '&:nth-child(4)': {
        left: '56px',
        animation: `$ldsEllipsis3 0.6s infinite`,
      },
    },
  },
  '@keyframes ldsEllipsis1': {
    '0%': {
      transform: 'scale(0)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  '@keyframes ldsEllipsis3': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(0)',
    },
  },
  '@keyframes ldsEllipsis2': {
    '0%': {
      transform: 'translate(0, 0)',
    },
    '100%': {
      transform: 'translate(24px, 0)',
    },
  },
}));


const Landing = () => {
  const classes = useStyles()

  return (
    <Box className={classes.mainWrapper}>
        <Paper className={classes.platform} elevation={5}>
            <Link to={LOGIN_ROUTE}>
                <Box className={classes.flexStyles}>
                    <Box component='img' src='/vectors/JUST_ELEMENT-grey.svg' alt='logo' />  
                </Box>
            </Link>
            <h1 className={classes.heading}>DEXTER</h1>

            <div className={classes.copyright}>
                <h2 className={classes.white}>Partner Dashboard</h2>
                <p className={classes.smallText}><b>Dexter</b> is a <b>copyright &copy; </b>of the <b>Dukka Inc.</b> <b>Terms of use</b> apply to the use of Dexter</p>
            </div>
        </Paper>
        <div className={classes.progressArea}>
          <small className={classes.progressLabel}>25%</small>

          <div className={classes.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    </Box>
  )
}

export default Landing
