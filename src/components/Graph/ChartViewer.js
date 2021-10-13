import moment from "moment";
import React from "react";
import Chart from "react-apexcharts";

const tempData = [{"name":"xx","data":[[{"x":'1632738489051',"y":"881"},{"x":'1632738492028',"y":"891"}]]}];
const ApexChart = (props) => {

    const data = {
        name: "xx",
        data: props.dataList
    }
    const series = [data];

    const options = {
        chart: {
            id: 'realtime',
            type: 'line',
            zoom: {
                enabled: false
            },
            animations: {
              enabled: false,
              easing: 'linear',
              animateGradually: {
                enabled: true,
                // speed: 150
              },
            //   dynamicAnimation: {
            //     speed: 500
            //   }
            },
            toolbar: {
                show: false,
                tools:{
                    download:false
                  }
            }
        },
        grid: {
            show: false,      // can either change here to disable all grids
            xaxis: {
                lines: {
                    show: true
                }
            },  
            yaxis: {
                lines: { 
                    show: true
                }
            },   
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: [props.lineColor],
            width: 2,
            dashArray: 0,      
        },
        xaxis: {
            tickAmount: 8,
            // forceNiceScale: true,
            type: "datetime",
            range: props.range,
            // tickPlacement: 'between',
            position: 'bottom',
            labels: {
                show: true,
                formatter: function (value, timestamp) {
                    // return moment(timestamp).format("MMM DD, hh:MM:ss a"); // The formatter function overrides format property
                    return moment(timestamp).format("hh:mm:ss a");
                },
                style: {
                    colors: ['#707070'],
                    // fontSize: '12px',
                    // fontFamily: 'Open Sans',
                    font: 'normal normal 600 20px/30px Open Sans',
                    letterSpacing: '0px',
                    fontWeight: 400,
                    // cssClass: 'apexcharts-xaxis-label',
                }     
            }
        },
        yaxis: {
            showAlways: true,
            showForNullSeries: true,
            tickAmount: props.yTickPoint,
            min: props.yMin,
            max: props.yMax,
            forceNiceScale: false,
            labels: {
                align: 'right',
                formatter: val => val.toFixed(0),
                style: {
                    colors: ['#707070'],
                    // fontSize: '12px',
                    // fontFamily: 'Open Sans',
                    font: 'normal normal 600 20px/30px Open Sans',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                }  
            },
            title: {
                text: props.yTitle,
                rotate: -45,
                offsetX: 0,
                offsetY: 0,
                align: 'right',
                // marginLeft: '700px',
                style: {
                    color: props.yColor,
                    fontSize: '12px',
                    fontFamily: 'Open Sans',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
            axisBorder: {
                show: true,
                // color: '#707070',
                offsetX: 0,
                offsetY: 0
            }
        }
    };

  return (
    <>
        <Chart type="line" options={options} series={series} width={props.width} height={props.height}/>
        {/* <div>
            {JSON.stringify(series)}
        </div> */}
    </>
  );
};

export default ApexChart;

