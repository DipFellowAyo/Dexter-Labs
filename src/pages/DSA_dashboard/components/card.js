import React from 'react';
import { Box } from '@material-ui/core';

function CardComp(props) {
    return (
        <Box className='mainBoardCard'>
            <div style={{display: 'flex', justifyContent:'space-between', padding: '0 5%', alignItems: 'center'}}>
                <h2 style={{fontWeight: '500'}}>{props.cardTitle}</h2>
                <Box 
                sx={{
                    width: '25px',
                    height: '25px'
                }}
                    component='img'
                    src={props.icon}
                    alt='icon'
                />
            </div>
            <h1 style={{color: '#6f6f6f', fontSize: '2rem', fontWeight: '500'}}>{props.number}</h1>
            <div style={{width: '180px', margin: 'auto', marginTop: '18%'}}>{props.cardFooter}</div>
        </Box>
    )
}

export default CardComp;