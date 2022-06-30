import React from "react";
import { Box } from "@material-ui/core";


function Polygon() {
    return (
        <Box 
        sx={{
            width: '15px',
            height: '15px' 
        }}  
            component='img'
            src='/vectors/arrowDown.svg'
            alt='polygon'
        />
    )
}

export default Polygon;