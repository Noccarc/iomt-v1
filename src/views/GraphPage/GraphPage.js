import "./GraphPage.css";

import { useState, useEffect } from "react";
import PubSub from 'pubsub-js';
import moment from "moment";
import { useAlert, positions } from 'react-alert';

import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import SubHeader from "../../components/Headers/SubHeader/SubHeader"
import RealtimeLineChart from "../../components/Graph/ChartViewer";
import {paramList, additionalParamList, HeaderConfig} from "../../constants/ParamConstants";
import {PubSubNameConstants as PubSubConstants, PubSubNameConstants} from '../../constants/PubSubConstants';

const GraphPage = (props) => {
    // const [token, setToken] = useState(null);
    const [patientId, setPatientId] = useState(null);
    const [dataObj, setDataObj] = useState(() => {
        console.log("in graph data Obj");

        return {
            patientDetails: {},
            pressureDataList: [],
            volumeDataList: [],
            flowDataList: []
        }
    });

    const TIME_RANGE_IN_MILLISECONDS = 50 * 1000;
    const alert = useAlert();

    if (!patientId) {
        setPatientId(props.history && props.history.location && props.history.location.state && props.history.location.state.patient.patientId);
    }

    useEffect(() => {

        let tempToken = PubSub.subscribe(patientId, (msg, data) => handleData(PubSubConstants.TYPE_MONITORING, msg, data));
        let tempTokenAlarm = PubSub.subscribe('alarm_trigger_data', (msg, data) => handleData(PubSubConstants.TYPE_ALARM, msg, data));
        // setToken(tempToken);
        
        console.log('subscribed graph tokenId: ' + tempToken);
        return function cleanup() {
            console.log("token in graph unsubscribe: " + tempToken);
            PubSub.unsubscribe(tempToken);
            PubSub.unsubscribe(tempTokenAlarm);
        };
    }, []);

    function handleData(type, msg, patientData) { 
        
        if (type === PubSubNameConstants.TYPE_ALARM) {
            renderAlert(patientData);
            return;
        }
        const pGraph = patientData && patientData.monitoringData && patientData.monitoringData.pGraph;
        const vGraph = patientData && patientData.monitoringData && patientData.monitoringData.vGraph;
        const fGraph = patientData && patientData.monitoringData && patientData.monitoringData.fGraph;

        setDataObj((prevDataObj) => {
            let pDataList = prevDataObj.pressureDataList;
            let vDataList = prevDataObj.volumeDataList;
            let fDataList = prevDataObj.flowDataList;

            pDataList.push({x: pGraph.time, y: pGraph.value });
            vDataList.push({x: vGraph.time, y: vGraph.value });
            fDataList.push({x: fGraph.time, y: fGraph.value });

            if (pDataList.length > 500) pDataList.splice(0, 30);
            if (vDataList.length > 500) vDataList.splice(0, 30);
            if (fDataList.length > 500) fDataList.splice(0, 30);
            
            return {
                ...prevDataObj,
                patientDetails: patientData,
                pressureDataList: pDataList,
                volumeDataList: vDataList,
                flowDataList: fDataList
            }
        })
    };

    const renderAlert = (data) => {
        alert.show(
            (<div className="patient-param-alert">Alarm Triggered for patientId - ({data.patientId}) at {data.addedAt} because of {data.cause}</div>), {
            timeout: 5000,
            width: '3000px',
            position: positions.MIDDLE,
            containerStyle: {
                zIndex: '100',
                width: "50%"
            },
            onOpen: () => {
            },
            onClose: () => {
            }
        });
    }


    return (
        <>
            {console.log("graph page rerendering")}
            <div className="graph-page">
                <div className="headers">
                    <MainHeader 
                        headerConfig={HeaderConfig.GraphPage && HeaderConfig.GraphPage.mainHeader} 
                        patientDetails= {
                            {
                                patientName: (dataObj.patientDetails && dataObj.patientDetails.patientName) || 'XXXXX XXXXX',
                                patientId: (dataObj.patientDetails  && dataObj.patientDetails.patientId) || 'XX-XX',
                                date: moment(new Date()).format("DD-MM-YYYY"),
                                time: moment(new Date()).format("HH:mm")
                            }
                        }
                    />
                    <SubHeader headerConfig={HeaderConfig.GraphPage && HeaderConfig.GraphPage.subHeader}
                        patientDetails= {
                            {
                                bedNumber: dataObj.patientDetails && dataObj.patientDetails.bedNumber
                            }
                        }
                    />
                </div>
                <div className="data-container">
                    <div className="graph-container">
                        <div className="chart-1">
                            <RealtimeLineChart className="chart"
                                dataList={dataObj.pressureDataList}
                                range={TIME_RANGE_IN_MILLISECONDS}
                                yMin={0}
                                yMax={80}
                                yTickPoint={4}
                                width={"100%"}
                                height={"100%"}
                                lineColor={'#20BBC1'}
                                yTitle={['Pressure',  '(cmH20)']}
                                yColor={'#20BBC1'}
                            />
                        </div>
                        <div className="chart-2">
                            <RealtimeLineChart className="chart"
                                dataList={dataObj.flowDataList}
                                range={TIME_RANGE_IN_MILLISECONDS}
                                yMin={-150}
                                yMax={150}
                                yTickPoint={6}
                                width={"100%"}
                                height={"100%"}
                                lineColor={'#FF508B'}
                                yTitle={['Flow', '(I/min)']}
                                yColor={'#FF508B'}
                            />
                        </div>
                        <div className="chart-3">
                            <RealtimeLineChart className="chart"
                                dataList={dataObj.volumeDataList}
                                range={TIME_RANGE_IN_MILLISECONDS}
                                yMin={0}
                                yMax={900}
                                yTickPoint={9}
                                width={"100%"}
                                height={"100%"}
                                lineColor={'#A459D6'}
                                yTitle={['Volume', '(ml)']}
                                yColor={'#A459D6'}
                            />
                        </div>
                    </div>
                    <div className="param-container">
                        <div className="main-param-container">
                            {
                                paramList.map((param) =>
                                    param.html &&
                                        <div key = {param.paramName} className="main-param-data">
                                            <div className="param-name">
                                                <div className="main-name">
                                                    {param.html.name}<sub>{param.html.nameSub}</sub>{param.html.nameSuccessor}
                                                </div>
                                                <div className="sub-name">
                                                    {param.html.sub}<sub>{param.html.subSub}</sub>{param.html.subSuccessor}
                                                </div>
                                            </div>
                                            <div className="param-value">
                                                {(dataObj.patientDetails && dataObj.patientDetails.monitoringData && dataObj.patientDetails.monitoringData[`${param.paramName}`]) || 'XX'}
                                            </div>
                                        </div>)
                            }
                        </div>
                        <div className="additional-param-container">
                            {
                                additionalParamList.map((param) =>
                                    (param.html) &&
                                    <div key = {param.paramName} className="additional-param-data">
                                        <div className="param-name">
                                            <div className="main-name">
                                                {param.html.name}<sub>{param.html.nameSub}</sub>{param.html.nameSuccessor}
                                            </div>
                                            <div className="sub-name">
                                                {param.html.sub}<sub>{param.html.subSub}</sub>{param.html.subSuccessor}
                                            </div>
                                        </div>
                                        <div className="param-value">
                                            {(dataObj.patientDetails && dataObj.patientDetails.monitoringData && dataObj.patientDetails.monitoringData[`${param.paramName}`]) || 'XX'}
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GraphPage;
