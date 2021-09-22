import moment from "moment";
import React from "react";
import Chart from "react-apexcharts";

export default props => {
  const options = {
    chart: {
      id: 'realtime',
      type: 'linear',
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false,
        easing: 'linear',
        animateGradually: {
          enabled: true,
          speed: 150
        },
        dynamicAnimation: {
          speed: 500
        }
      }
    },
    grid: {
      show: false,      // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: true  //or just here to disable only x axis grids
         }
       },  
      yaxis: {
        lines: { 
          show: true  //or just here to disable only y axis
         }
       },   
    },
    stroke: {
        curve: 'smooth'
    },
    tooltip: {
      x: {
        format: "yyyy/MM/dd HH:mm:ss.f",
      }
    },
    xaxis: {
        tickAmount: 20,
        type: "datetime",
        range: props.range,
        // tickPlacement: 'between',
        labels: {
            formatter: function (value, timestamp) {
                // return moment(timestamp).format("MMM DD, hh:MM:ss a"); // The formatter function overrides format property
                return moment(timestamp).format("MMM DD, hh:MM:ss a");
            }      
        }
    },
    yaxis: {
      labels: {
        formatter: val => val.toFixed(0)
      },
      title: { text: "Pressure (cmH20)" }
    }
  };
  return <Chart type="line" options={options} series={props.dataList} />;
};

