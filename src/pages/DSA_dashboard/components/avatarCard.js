import React from 'react';
import { Box } from '@material-ui/core';
import AvatarIcon from './avatarIcon';
import Ellipse from './ellipse';


function AvatarCard() {
    return (
        <Box className='mainBoardCard'
            sx={{
                width: '280px'
            }}>
            <div style={{width: 'fit-content', position: 'relative', left: '40%', bottom: '15%', display: 'flex', alignItems: 'end'}}>
                <AvatarIcon />
                <div style={{position: 'relative', right: '25%'}}><Ellipse /></div>
            </div>
            <div style={{position: 'relative', bottom: '5%', textAlign: 'start', padding: '0 10px', lineHeight: '0.6'}}>
                <p style={{fontSize: '1.2rem'}}><span>Name: </span>Ikenna Obi</p>
                <p style={{fontSize: '1.2rem'}}><span>User ID: </span>DSA0001</p>
                <h2 style={{fontWeight: '500'}}>Referral code: DSA0001</h2>
            </div>
            <div style={{backgroundColor: '#ed7e81', padding: '12px', color: '#ffffff', borderRadius: '0 0 15px 15px'}}>Copy Code</div>
        </Box>
    )
}


export default AvatarCard;