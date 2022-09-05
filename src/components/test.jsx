// import React from "react";
// import ReactApexChart from "react-apexcharts";

// import dateFormat from 'dateformat';


// class ApexChart extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state =






//     render() {





//         return (


//             <div id="chart" >
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
//             </div>)
//     }
// }

// export default ApexChart

import React from "react";
import ReactApexChart from "react-apexcharts";

import dateFormat from 'dateformat';

import Code from "./code.json"

const Test = () => {
    const data = {

        series: [{
            name: 'candle',
            data: []
        }],
        options: {
            chart: {
                height: 350,
                type: 'candlestick',
            },
            title: {
                text: 'CandleStick Chart - Category X-axis',
                align: 'left'
            },
            annotations: {
                xaxis: [
                    {
                        x: 'Oct 06 14:00',
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                fontSize: '12px',
                                color: '#fff',
                                background: '#00E396'
                            },
                            orientation: 'horizontal',
                            offsetY: 7,
                            text: 'Annotation Test'
                        }
                    }
                ]
            },
            tooltip: {
                enabled: true,
            },
            xaxis: {
                type: 'category',
                labels: {
                    formatter: function (val) {
                        return dateFormat(val, ' mm,  dd,  hh mm')
                    }
                }
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        },


    };
    const code = Code.data.coins[0].sparkline;
    console.log(code);
    const jsonNumber = [];

    for (let k = 0; k < code.length; k++) {
        jsonNumber.push(parseFloat(code[k]).toFixed(0))

    };
    for (let k = 0; k < code.length; k++) {
        jsonNumber.push(parseFloat(code[k]).toFixed(0))

    };
    for (let l = 0; l < jsonNumber.length; l++) {
        if (jsonNumber[l + 1] < jsonNumber[l]) {
            let one = jsonNumber[l]
            let second = jsonNumber[l + 1]
            let third = jsonNumber[l + 2]
            let fourth = jsonNumber[l + 3]
            const sonlar = [one, second, third, fourth]
            data.series[0].data.push({
                x: new Date(1641215145200 + (l * 1000)),
                y: sonlar
            })
        } else {
            let one = jsonNumber[l]
            let second = jsonNumber[l - 1]
            let third = jsonNumber[l - 2]
            let fourth = jsonNumber[l - 3]
            const sonlar = [one, second, third, fourth]
            data.series[0].data.push({
                x: new Date(1641215145200 + (l * 1000)),
                y: sonlar
            })

        }


    }
    console.log(jsonNumber);




    return (
        <div>
            <ReactApexChart options={data.options} series={data.series} type="candlestick" height={350} />
        </div>
    )
}

export default Test