import React from 'react';
import { Box } from '@material-ui/core';
import AvatarCard from './avatarCard';
import CardComp from './card';
import SortByWeek from './sortByWeek';



const CardInfos = [
    {
        id: "1",
        title: "My Merchants",
        img: '/vectors/notesIcon.svg',
        numbers: "150",
        footer: <SortByWeek />
    },
    {
        id: "2",
        title: "Earnings",
        img: '/vectors/moneyIcon.svg',
        numbers: "120,000",
        footer: ''
    }
]

function MainBoard() {
    return (
        <Box className='mainBoard'>
            <AvatarCard />
            {CardInfos.map(CardInfo => (
                <CardComp 
                    key = {CardInfo.id}
                    cardTitle = {CardInfo.title}
                    icon = {CardInfo.img}
                    number = {CardInfo.numbers}
                    cardFooter = {CardInfo.footer}
                />
            )
            )}
        </Box>
    )
}

export default MainBoard;