import React from "react";
import { Box } from "@material-ui/core";
import AvatarIcon from './avatarIcon';
import Polygon from './polygon';

function ProfileIcon() {
    return (
        <Box 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <AvatarIcon />
            <Polygon />
        </Box>
    )
}

export default ProfileIcon;