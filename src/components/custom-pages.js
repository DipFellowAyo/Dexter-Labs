import React from 'react'
import Box from '@material-ui/core/Box'

import BatchCreate from '../pages/dashboard/components/batch-create'
import CreateMerchant from '../pages/dashboard/components/create-merchant'
import MessageMerchant from '../pages/dashboard/components/message-merchant'
import AllMerchants from '../pages/dashboard/components/all-merchants'
import InactiveMerchants from '../pages/dashboard/components/inactive-merchants'
import DeleteMerchant from '../pages/dashboard/components/delete-merchant'

const CustomPages = ({ page }) => {
  return (
    <Box>
      {page === 1 ? (
        <CreateMerchant />
      ) : page === 2 ? (
        <BatchCreate />
      ) : page === 3 ? (
        <DeleteMerchant />
      ) : page === 4 ? (
        <MessageMerchant />
      ) : page === 5 ? (
        <AllMerchants />
      ) : (
        <InactiveMerchants />
      )}
    </Box>
  )
}

export default CustomPages
