import React, { useState } from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Navbar from '../components/Navbar';
import LineChart from '../components/linechart';
import CodeJson from "../components/code.json"


const Code = CodeJson;


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourCoin: "",
            startYourCoin: "",
        }
    }

    render() {
        const data = Code;
        this.state.yourCoin = parseFloat(data.data.coins[1].price).toFixed(3)
        this.state.startYourCoin = (parseFloat(data.data.coins[1].btcPrice).toFixed(6) * 100).toFixed(4)
        let Percent = parseFloat(this.state.yourCoin) / (parseFloat(this.state.yourCoin) / 100) * 2
        Percent = Percent.toString()
        return (
            <div className='home' >
                <Navbar />
                <div className='mainBlock'>
                    <div className="assets">
                        <h3>Sample</h3>
                        <p style={{ color: "white " }} className="balance">Your total balance</p>
                        <div className="total">
                            <span style={{ color: "white" }} className="youcoin">$ {this.state.yourCoin}</span>
                            <span style={{ color: "white" }} className="startcoin">$ {this.state.startYourCoin}</span>
                            <span className="percent"><ArrowDropUpIcon /> {Percent}% </span>
                        </div>


                        <LineChart />
                    </div>
                </div>
            </div>
        )
    }
}

