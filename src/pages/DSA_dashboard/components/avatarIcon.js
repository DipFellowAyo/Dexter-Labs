import React from "react";
import { Box } from "@material-ui/core";


function AvatarIcon() {
    return (
        <Box
        sx={{
            width: '60px',
            height: '60px'
        }}
            component='img'
            src='/vectors/avatarIcon.svg'
            alt='avatar_logo'
        />
    )
}

export default AvatarIcon;