import React from "react";
import { Box } from '@material-ui/core';

function SortByWeek() {
    return (
        <Box
            sx={{
            backgroundColor: '#ffffff',
            color: '#929292',
            textAlign: 'start',
            border: '0.05px solid #929292',
            borderRadius: '15px',
            padding: '5px 10px'
        }}
        >
            ▼ Sort by week
        </Box>
    )
}

export default SortByWeek;