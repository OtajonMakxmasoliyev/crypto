import React, { Component, createRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import Code from "./code.json"
import { borderRadius } from "@mui/system";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, Filler
);

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: Code.data.coins.map((x) => x.price),
                // labels: [],
                datasets: [
                    {
                        label: Code.data.stats.totalCoins,
                        backgroundColor: "red",
                        data: Code.data.stats.total24hVolume,
                        borderColor: "#15A9FE",
                        fill: true,
                        tension: 0.3

                    }
                ]
            }
        }
    }

    componentDidMount() {

        function grd(color) {
            const c = document.createElement("canvas")
            var ctx = c.getContext("2d");
            const grd = ctx.createLinearGradient(0, -15, 150, 1500);
            // const grd = ctx.createRadialGradient(0, 15, 0, 15 1000, 0);
            grd.addColorStop(0, "#15A9fe");
            grd.addColorStop(0.5, "transparent");
            grd.addColorStop(0.25, "#000000");
            grd.addColorStop(0.2, "transparent");
            ctx.fillStyle = grd;
            ctx.fillRect(10, 10, 135, 80);
            return grd;
        }

        let colors = ["#1573FE", "#1573FE"];

        const data = this.state.data
        // if (data.datasets) {
        //     data.datasets.forEach((set, i) => {
        //         set.backgroundColor = grd(colors[i]);
        //         console.log(typeof colors[i]);
        //         // set.backgroundColor = colors[i]
        //     })
        // }
        data.datasets.map(x => {
            x.backgroundColor = grd("#1573FE")

        })


        return data;

    }





    render() {

        // for (let i = 0; i < 2; i++) {
        //     console.log(this.state.data.datasets[i].backgroundColor);

        // }
        return (
            <div style={{ width: "150%", height: "53%", boxSizing: "border-box", overflow: "hidden", }} >
                <Line width={"130%"} height={50} ref={this.colorPickerRef} options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            ticks: false
                        },
                        y: {
                            beginAtZero: true,
                            display: false,
                            drawBorder: true
                        }

                    }
                }} data={this.componentDidMount()} />
            </div>
        )
    }

}