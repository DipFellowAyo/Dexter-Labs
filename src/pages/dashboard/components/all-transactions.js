import React, { useState, useMemo } from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import useTheme from '@material-ui/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    boxShadow: 'none'
  },
  container: {
    maxHeight: 600
  },
  center: {
    textAlign: 'center'
  },
  bg1: {
    background: '#E3E0E0'
  },
  bg2: {
    background: '#F2F2F2'
  },
  bg3: {
    background: '#F2F2F2'
  },
  tableCellStyle: {
    background: '#E3E0E0',
    color: '#151218'
  },
  tableCell: {
    background: '#f2f2f2',
    color: '#6F6F6F',
    fontWeight: '300'
  },
  minWidth: {
    minWidth: props => props.minWidth
  },
  tableHead: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  table: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%'
    }
  },
  tableRow: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      '&:last-child': {
        marginBottom: 0
      },
      position: 'relative'
    }
  },
  tableDec: {
    [theme.breakpoints.down('sm')]: {
      borderTop: '7px solid #e3e0e0'
    }
  },
  tableDec2: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      wordBreak: 'break-word',
      paddingLeft: '50%',
      position: 'relative',
      borderBottom: '5px solid #fff',
      '&:last-child': {
        borderBottom: 'none'
      }
    }
  },
  tableDec3: {
    [theme.breakpoints.down('sm')]: {
      '&:before': {
        content: 'attr(data-label)',
        position: 'absolute',
        left: 0,
        width: '50%',
        paddingLeft: 15,
        textAlign: 'left',
        color: '#151218',
        fontWeight: '500'
      }
    }
  },
  checkboxStyle: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '-3.3rem',
      right: 0
    }
  }
}))

function createData (
  transactionsType,
  transactionOrigin,
  amount,
  transactionDate,
  transactionTime,
  merchant,
  transactionStatus,
  paymentChannel,
  cityCode
) {
  return {
    transactionsType,
    transactionOrigin,
    amount,
    transactionDate,
    transactionTime,
    merchant,
    transactionStatus,
    paymentChannel,
    cityCode
  }
}

const AllTransactions = () => {
  const classes = useStyles()
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('sm'))
  const [page, setPage] = useState(0)
  const [selected, setSelected] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const columns = useMemo(
    () => [
      { id: 'sn', label: 'SN', minWidth: 80, align: 'center' },
      { id: 'checkbox', label: '', minWidth: 170, align: 'center' },
      {
        id: 'transactionsType',
        label: 'Transactions Type',
        align: 'center',
        minWidth: 200
      },
      {
        id: 'transactionOrigin',
        label: 'Transaction Origin',
        align: 'center',
        minWidth: 200
      },
      {
        id: 'amount',
        label: 'Amount',
        align: 'center'
      },
      {
        id: 'transactionDate',
        label: 'Transaction Date',
        align: 'center',
        minWidth: 200
      },
      {
        id: 'transactionTime',
        label: 'Transaction Time',
        align: 'center',
        minWidth: 200
      },
      {
        id: 'merchant',
        label: 'Merchant',
        align: 'center'
      },
      {
        id: 'transactionStatus',
        label: 'Transaction Status',
        align: 'center',
        minWidth: 200
      },
      {
        id: 'paymentChannel',
        label: 'Payment Channel',
        align: 'center',
        minWidth: 200
      },
      {
        id: 'cityCode',
        label: 'City Code',
        align: 'center',
        minWidth: 120
      }
    ],
    []
  )
  const rows = useMemo(
    () => [
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transaction dates',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transactions date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transacion date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Tranaction Origin',
        'Amount',
        'Traansaction date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Trasaction Origin',
        'Amount',
        'Transaction date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Trnsacton date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transactione date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transactionq date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transactionn date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      ),
      createData(
        'Transactions Type',
        'Transaction Origin',
        'Amount',
        'Transactionr date',
        'Transaction time',
        'Merchant',
        'Transaction status',
        'Payment channel',
        'City code'
      )
    ],
    []
  )

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.transactionDate)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const rowCount = rows.length
  const numSelected = selected.length
  const isSelected = name => selected.indexOf(name) !== -1

  return (
    <Paper className={classes.root}>
      {match && (
        <Box display='flex' alignItems='center' justifyContent='flex-end'>
          <Box component='p' my={0} color='#151218' fontWeight='300'>
            Select all
          </Box>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </Box>
      )}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table' className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {columns.map(column => (
                <>
                  {column.id === 'checkbox' ? (
                    <TableCell padding='checkbox' className={classes.bg1}>
                      <Checkbox
                        color='primary'
                        indeterminate={
                          numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={handleSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                      />
                    </TableCell>
                  ) : (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      className={`${classes.tableCellStyle}`}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  )}
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={`${classes.table}`}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.transactionDate)
                return (
                  <TableRow
                    className={`${classes.table} ${classes.tableRow}`}
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    aria-checked={isItemSelected}
                    onClick={event => handleClick(event, row.transactionDate)}
                    selected={isItemSelected}
                  >
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <>
                          {column.id === 'sn' ? (
                            <TableCell
                              key={column.id}
                              className={`${classes.center} ${classes.tableCell} ${classes.table} ${classes.tableDec} ${classes.tableDec2} ${classes.tableDec3}`}
                              data-label={column.label}
                            >
                              {index + 1}
                            </TableCell>
                          ) : column.id === 'checkbox' ? (
                            <TableCell
                              key={column.id}
                              padding='checkbox'
                              className={`${classes.bg2} ${classes.table} ${classes.tableDec2}`}
                            >
                              <Checkbox
                                color='primary'
                                checked={isItemSelected}
                                className={classes.checkboxStyle}
                                inputProps={{
                                  'aria-label': 'select all desserts'
                                }}
                              />
                            </TableCell>
                          ) : (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={`${classes.tableCell} ${classes.table} ${classes.tableDec2} ${classes.tableDec3}`}
                              data-label={column.label}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )}
                        </>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className={classes.bg3}
      />
    </Paper>
  )
}

export default AllTransactions
