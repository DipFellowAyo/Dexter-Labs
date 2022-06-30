import React, { useMemo } from "react";
import { Box } from "@material-ui/core";

import CustomTable from "../../../components/custom-table";

function createData (
    businessName,
    location,
    dateOfOnboarding
) {
    return {
        businessName,
        location,
        dateOfOnboarding
    }
}

const MyReferrals = () => {
    const columns = useMemo (
        () => [
            { id: 'sn', label: 'SN', minWidth: 80, align: 'center' },
            {
                id: 'businessName',
                label: 'Business Name',
                align: 'start'
            },
            {
                id: 'location',
                label: 'Location',
                align: 'start',
                minWidth: 120
            },
            {
                id: 'dateOfOnboarding',
                label: 'Date Of Onboarding',
                align: 'center',
                minWidth: 180
            }
        ],
        []
    )
    const rows = useMemo (
        () => [
            createData(
                'Okoro and Sons Ltd',
                'Ajangbadi',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Crux Apparels',
                'Maroko',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Dukka Merchandise',
                'Olokonla',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Okoro and Sons Ltd',
                'Lekki',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Crux Apparels',
                'Maroko',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Dukka Merchandise',
                'Olokonla',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Okoro and Sons Ltd',
                'Lekki',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Crux Apparels',
                'Maroko',
                'Tue / 28 / Jun.2022'
              ),
              createData(
                'Dukka Merchandise',
                'Olokonla',
                'Tue / 28 / Jun.2022'
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

export default MyReferrals;