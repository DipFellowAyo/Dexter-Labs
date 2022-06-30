import React, { useRef, useState } from 'react'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
import { makeStyles } from '@material-ui/core'

import DashboardLayout from '../../layouts/dashboard.layout'
import BarChart from '../../components/bar-chart'
import DoubleBarChart from '../../components/double-bar-chart'

const useStyles = makeStyles(theme => ({
  boxStyles: {
    padding: '0.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  box: {
    background: '#f8f8f8',
    boxShadow: '6px 6px 4px #C1B8B8',
    borderRadius: 15
  },
  gridStyles: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '1rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      rowGap: '2rem',
      placeItems: 'center'
    }
  },
  text: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  selectStyle: {
    color: '#CE6E70',
    borderBottom: '1px solid #CE6E70',
    padding: '0px'
  },
  iconStyle: {
    color: '#CE6E70'
  },
  muiSelect: {
    padding: 0,
    paddingLeft: 15,
    paddingRight: '20px !important'
  },
  progressStyles: {
    height: 9
  },
  LinerProgressColor: {
    backgroundColor: '#23232E'
  },
  activeLinerProgressColor: {
    backgroundColor: '#ED7E81'
  },
  barColorStyles: {
    background:
      'transparent linear-gradient(92deg, #006A6A 0%, #9C38FF 100%) 0% 0% no-repeat padding-box;'
  },
  headingStyles: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginTop: '0.5rem'
    }
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      placeContent: 'center'
    }
  },
  gridItem: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  container: {
    [theme.breakpoints.down('md')]: {
      padding: '0 1rem'
    }
  },
  merchantStyle: {
    marginBottom: 16,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16
    }
  },
  gridBox: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    placeItems: 'center'
  },
  chartCenter: {
    position: 'relative',
    margin: 'auto',
    width: '95%'
  }
}))

const Dashboard = () => {
  const classes = useStyles()
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down(500))
  const todaysDate = useRef(moment().format('MMMM Do, YYYY'))
  const allMonth = useRef(
    moment()
      .format('MMMM')
      .toUpperCase()
  )
  const year = useRef(moment().format('YYYY'))
  const [progress] = useState([
    {
      id: 1,
      month: 'January',
      stat: 50
    },
    {
      id: 2,
      month: 'February',
      stat: 250
    },
    {
      id: 3,
      month: 'March',
      stat: 100
    },
    {
      id: 4,
      month: 'April',
      stat: 300
    },
    {
      id: 5,
      month: 'May',
      stat: 150
    },
    {
      id: 6,
      month: 'June',
      stat: 400
    },
    {
      id: 7,
      month: 'July',
      stat: 50
    },
    {
      id: 8,
      month: 'August',
      stat: 250
    },
    {
      id: 9,
      month: 'September',
      stat: 180
    },
    {
      id: 10,
      month: 'October',
      stat: 200
    },
    {
      id: 11,
      month: 'November',
      stat: 280
    },
    {
      id: 12,
      month: 'December',
      stat: 450
    }
  ])

  return (
    <DashboardLayout>
      <Box className={`${classes.container} ${classes.overlay}`}>
        <Box className={classes.gridContainer}>
          <Box>
            <Box className={classes.gridStyles}>
              <Box className={`${classes.boxStyles} ${classes.box}`}>
                <Box display='flex' justifyContent='space-between'>
                  <Box display='flex' alignItems='center' mt={-2}>
                    <Box
                      component='img'
                      src='/vectors/group.svg'
                      alt='group'
                      mr={1}
                    />
                    <Box my={0} component='p' color='#6f6f6f' fontWeight='500'>
                      MERCHANTS & SALES
                    </Box>
                  </Box>
                  <Box>
                    <Box className={classes.gridBox}>
                      <Box
                        my={0}
                        component='p'
                        color='#1bb108'
                        fontWeight='500'
                      >
                        310 Active
                      </Box>
                      <Box
                        component='img'
                        src='/vectors/active-eye.svg'
                        alt='active eye'
                        ml={1}
                      />
                    </Box>
                    <Box className={classes.gridBox}>
                      <Box
                        my={0}
                        component='p'
                        color='#f00000'
                        fontWeight='500'
                      >
                        31 Inactive
                      </Box>
                      <Box
                        component='img'
                        src='/vectors/inactive-eye.svg'
                        alt='inactive eye'
                        ml={1}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box maxWidth='11rem' margin='2.5rem auto 0'>
                  <Box
                    my={0}
                    component='p'
                    color='#6f6f6f'
                    fontSize='113px'
                    fontWeight='500'
                  >
                    341
                  </Box>
                  <Box mt={-5} mr={0.75}>
                    <Box
                      my={0}
                      component='p'
                      textAlign='right'
                      fontSize='21px'
                      fontWeight='500'
                      color='#151218'
                    >
                      6,782,993
                    </Box>
                    <Box
                      my={0}
                      mt={-0.75}
                      component='p'
                      textAlign='right'
                      color='#aeadaf'
                      fontWeight='500'
                      fontSize='18px'
                    >
                      Made in sales
                    </Box>
                  </Box>
                </Box>
                <Box mt={4.5}>
                  <Box display='flex'>
                    <Box
                      my={0}
                      component='p'
                      fontSize='30px'
                      color='#1bb108'
                      fontWeight='500'
                    >
                      24
                    </Box>
                    <Box
                      component='img'
                      src='/vectors/arrow-up.svg'
                      alt='arrow up'
                      mt={-2.3}
                      ml={0}
                    />
                  </Box>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    mt={-1.5}
                  >
                    <Box
                      my={0}
                      component='p'
                      color='#6f6f6f'
                      fontWeight='500'
                      fontSize='12px'
                    >
                      Merchants onboarded in the past
                    </Box>
                    <Select
                      native
                      className={classes.selectStyle}
                      classes={{
                        icon: classes.iconStyle,
                        select: classes.muiSelect
                      }}
                    >
                      <option>Week</option>
                      <option>Month</option>
                    </Select>
                  </Box>
                </Box>
              </Box>
              <Box
                className={`${classes.boxStyles} ${classes.box}`}
                minHeight='22rem'
              >
                <Box display='flex' alignItems='center'>
                  <Box
                    component='img'
                    src='/vectors/hand.svg'
                    alt='hand'
                    mr={1}
                  />
                  <Box my={0} component='p' color='#6f6f6f' fontWeight='500'>
                    MERCHANT EXPENSESES
                  </Box>
                </Box>
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  mt={8}
                >
                  <Box
                    my={0}
                    component='p'
                    color='#6f6f6f'
                    fontWeight='500'
                    fontSize='100px'
                  >
                    16.3M
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.gridItem}>
            <Box className={classes.box} position='relative'>
              <Box position='absolute' top='0.5rem' right='1rem'>
                <Select
                  native
                  className={classes.selectStyle}
                  classes={{
                    icon: classes.iconStyle,
                    select: classes.muiSelect
                  }}
                >
                  <option>Week</option>
                  <option>Month</option>
                </Select>
              </Box>
              <Box padding='22px'>
                <Box mb={3}>
                  <Box display='flex' alignItems='center'>
                    <Box
                      my={0}
                      mr={3}
                      component='p'
                      fontSize='2rem'
                      color='#6f6f6f'
                      fontWeight='400'
                      className={classes.text}
                    >
                      Week 18
                    </Box>
                    <Box
                      my={0}
                      component='p'
                      fontSize='25px'
                      fontWeight='500'
                      color='#c1b8b8'
                      className={classes.headingStyles}
                    >
                      Weekly Transaction Analysis
                    </Box>
                  </Box>
                  <Box
                    display='flex'
                    alignItems='center'
                    mt={-1}
                    className={classes.text}
                  >
                    <Box
                      my={0}
                      ml={0.5}
                      component='p'
                      color='#6f6f6f'
                      fontWeight='300'
                    >
                      {todaysDate.current}
                    </Box>
                    <Box
                      my={0}
                      ml={2}
                      component='p'
                      color='#6f6f6f'
                      fontWeight='300'
                    >
                      12,780,000 made so far
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.chartCenter}>
                  <BarChart />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className={classes.gridItem}>
            <Box className={classes.box} position='relative'>
              <Box position='absolute' top='0.5rem' right='1rem'>
                <Select
                  native
                  className={classes.selectStyle}
                  classes={{
                    icon: classes.iconStyle,
                    select: classes.muiSelect
                  }}
                >
                  <option>Week</option>
                  <option>Month</option>
                </Select>
              </Box>
              <Box padding='22px'>
                <Box mb={2}>
                  <Box
                    my={0}
                    component='p'
                    color='#6f6f6f'
                    fontWeight='400'
                    fontSize='34px'
                    className={classes.headingStyles}
                  >
                    Expense vs sales chat
                  </Box>
                  <Box
                    my={0}
                    component='p'
                    color='#6f6f6f'
                    fontWeight='300'
                    mt={-0.5}
                  >
                    {todaysDate.current}
                  </Box>
                </Box>
                <Box className={classes.chartCenter}>
                  <DoubleBarChart />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className={classes.box} position='relative'>
              <Box position='absolute' top='0.5rem' right='1rem'>
                <Select
                  native
                  className={classes.selectStyle}
                  classes={{
                    icon: classes.iconStyle,
                    select: classes.muiSelect
                  }}
                >
                  <option>Week</option>
                  <option>Month</option>
                </Select>
              </Box>
              <Box padding='20px'>
                <Box className={classes.merchantStyle}>
                  <Box display='flex' alignItems='center' mr={2}>
                    <Box
                      my={0}
                      component='p'
                      fontSize='55px'
                      color='#6f6f6f'
                      fontWeight='400'
                      className={classes.text}
                    >
                      {/* {allMonth.current} */}
                      JUNE
                    </Box>
                    <Box
                      my={0}
                      component='p'
                      fontSize='18px'
                      fontWeight='700'
                      color='#6f6f6f'
                      className={classes.text}
                    >
                      {year.current.slice(0, 2)} <br /> {year.current.slice(2)}
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      my={0}
                      component='p'
                      fontSize='20px'
                      color='#c1b8b8'
                      fontWeight='500'
                      className={classes.headingStyles}
                    >
                      Monthly Merchant {match && <br />} Onboarding Analysis
                    </Box>
                    <Box
                      my={0}
                      component='p'
                      color='#6f6f6f'
                      fontWeight='300'
                      className={classes.text}
                    >
                      48,550,500 made so far
                    </Box>
                  </Box>
                </Box>
                <Grid container spacing={3}>
                  {progress.map(({ id, month, stat }) => (
                    <Grid key={id} item lg={6} sm={12} xs={12}>
                      <Box>
                        <Box my={0} component='p' mb={0.5} color='#7e7e7e'>
                          {month}
                        </Box>
                        <LinearProgress
                          variant='determinate'
                          value={stat / 5}
                          className={
                            month.toUpperCase() === allMonth.current
                              ? classes.activeLinerProgressColor
                              : classes.LinerProgressColor
                          }
                          classes={{
                            root: classes.progressStyles,
                            barColorPrimary: classes.barColorStyles
                          }}
                        />
                        <Box
                          component='p'
                          my={0}
                          mt={0.5}
                          display='flex'
                          justifyContent='flex-end'
                          color='#7e7e7e'
                          fontWeight='400'
                        >
                          {`${stat}/500`}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default Dashboard
