import React, { useMemo } from 'react'
import Box from '@material-ui/core/Box'

import CustomTable from '../../../components/custom-table'

function createData (
  name,
  phoneNumber,
  email,
  merchantId,
  cityCode,
  city,
  sector,
  salesSummary,
  expenseSummary
) {
  return {
    name,
    phoneNumber,
    email,
    merchantId,
    cityCode,
    city,
    sector,
    salesSummary,
    expenseSummary
  }
}

const AllMerchants = () => {
  const columns = useMemo(
    () => [
      { id: 'sn', label: 'SN', minWidth: 80, align: 'center' },
      { id: 'checkbox', label: '', minWidth: 170, align: 'center' },
      {
        id: 'name',
        label: 'Name',
        align: 'center'
      },
      {
        id: 'phoneNumber',
        label: 'Phone Number',
        align: 'center',
        minWidth: 180
      },
      {
        id: 'email',
        label: 'Email',
        align: 'center'
      },
      {
        id: 'merchantId',
        label: 'Merchant ID',
        align: 'center',
        minWidth: 120
      },
      {
        id: 'cityCode',
        label: 'City code',
        align: 'center',
        minWidth: 120
      },
      {
        id: 'city',
        label: 'City',
        align: 'center'
      },
      {
        id: 'sector',
        label: 'Sector',
        align: 'center'
      },
      {
        id: 'salesSummary',
        label: 'Sales Summary',
        align: 'center',
        minWidth: 180
      },
      {
        id: 'expenseSummary',
        label: 'Expense Summary',
        align: 'center',
        minWidth: 180
      }
    ],
    []
  )
  const rows = useMemo(
    () => [
      createData(
        'Abubakar',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Habib',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Keturah',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Michelle',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Abbas',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Godspower',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Gabriel',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Mo',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Folake',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Rhema',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Harison',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      ),
      createData(
        'Dukka',
        '08033594899',
        'abubakar@gmail.com',
        '3287263',
        '20034',
        'Ibadan',
        'Education',
        'Sales Summary',
        'Expense Summary'
      )
    ],
    []
  )

  return (
    <Box>
      <CustomTable columns={columns} rows={rows} />
    </Box>
  )
}

export default AllMerchants
