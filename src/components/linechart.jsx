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
                labels: Code.data.coins.map(x => x.name),
                // labels: [],
                datasets: [
                    {
                        label: "Rank",
                        backgroundColor: "red",
                        data: Code.data.coins.map(x => x.sparkline),
                        borderColor: "red",
                        fill: true,
                        tension: 0.3

                    },

                    {
                        label: "Solo",
                        backgroundColor: "green",
                        data: Code.data.coins.map(x => x.btcPrice),
                        borderColor: "red",
                        fill: true,
                        tension: 0.5
                    }
                ]
            }
        }
    }

    componentDidMount() {

        function grd(color) {
            const c = document.createElement("canvas")
            var ctx = c.getContext("2d");
            const grd = ctx.createLinearGradient(0, 0, 1000, 1500);
            grd.addColorStop(0, color);
            grd.addColorStop(0.5, "white");
            grd.addColorStop(1, color);
            ctx.fillStyle = grd;
            ctx.fillRect(10, 10, 150, 80);
            return grd;
        }

        let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 0, 255 ,0.75)"];

        const data = this.state.data
        if (data.datasets) {
            data.datasets.forEach((set, i) => {
                set.backgroundColor = grd(colors[i]);
                console.log(grd(colors[i]));
                // set.backgroundColor = colors[i]
            })
        }

        return data;

    }





    render() {

        for (let i = 0; i < 2; i++) {
            console.log(this.state.data.datasets[i].backgroundColor);

        }
        return (
            <div style={{ width: 1000, height: 1500 }}>
                <h3>Sample</h3>
                <Line ref={this.colorPickerRef} options={{ responsive: true }} data={this.componentDidMount()} />
            </div>
        )
    }

}