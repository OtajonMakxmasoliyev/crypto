import React, { useState } from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Navbar from '../components/Navbar';
import LineChart from '../components/LineChart';
import CryptoBalance from '../components/CryptoBalance';
import Assets from '../components/Assets';
import CandleStick from '../components/CandleStick';





export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className='home' >
                <Navbar />
                <div className='mainBlock'>
                    <Assets />
                    <div className="mainBlock_CryptoMain">
                        <CryptoBalance nechta={6} />
                    </div>
                    <CandleStick />
                </div>
            </div>
        )
    }
}

