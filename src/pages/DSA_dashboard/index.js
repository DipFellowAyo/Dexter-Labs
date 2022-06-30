import React from "react";
import HeroImg from "./components/hero.img";
import MainBoard from "./components/mainBoard";
import ProfileIcon from "./components/profileIcon";
import MyReferrals from "./components/my-referrals";
import { Box } from "@material-ui/core";

function DSADashboard() {
    return (
        <Box>
            <div className="header">
                <HeroImg />
                <div style={{position: 'relative', right: '14%'}}><ProfileIcon /></div>
            </div>
            <h1 className="welcomeText">GOOD MORNING, Ikenna</h1>
            <div className="mainBody"><MainBoard /></div>
            <h1 style={{width: '70%', margin: '100px auto 0', color: '#6f6f6f', fontWeight: '500'}}>MY REFERRALS</h1>
            <div style={{width: '70%', margin: '10px auto'}}>
                <MyReferrals />
            </div>
           
            
        </Box> 
    )
}

export default DSADashboard;