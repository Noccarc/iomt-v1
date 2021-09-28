import "./GraphPage.css";

import { useState, useEffect, useContext } from "react";
import {SocketContext} from '../../context/socket';
import PubSub from 'pubsub-js';
import moment from "moment";

import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import SubHeader from "../../components/Headers/SubHeader/SubHeader"
import RealtimeLineChart from "../../components/Graph/ChartViewer";
import {paramList, additionalParamList, HeaderConfig} from "../../constants/ParamConstants";

const GraphPage = (props) => {
    const [token, setToken] = useState(null);
    const [patientId, setPatientId] = useState(null);
    const [dataList, setDataList] = useState([]);
    const [data, setData] = useState(null);

    const TIME_RANGE_IN_MILLISECONDS = 50 * 1000;

    if (!patientId) {
        setPatientId(props.history && props.history.location && props.history.location.state && props.history.location.state.patient.patientId);
    }

    useEffect(() => {
        function handleData(msg, patientData) {    
            const fio2 = patientData && patientData.monitoringData && patientData.monitoringData.pPeep;

            dataList.push({
                x: new Date(),
                y: fio2 
            })

            if (dataList.length > 600) dataList.splice(0, 200);
            setDataList([...dataList]);
            setData(patientData);
        };

        let tempToken = PubSub.subscribe(patientId, handleData);
        setToken(tempToken);
        
        console.log('subscribed graph tokenId: ' + tempToken);
        return function cleanup() {
            console.log("token in graph unsubscribe: " + tempToken);
            PubSub.unsubscribe(tempToken);
        };
    }, []);

    // useEffect(() => {
    //     console.log('updated effect')
    // }, [dataList]);


    return (
        <>
            <div className="graph-page">
                <div className="headers">
                    <MainHeader 
                        headerConfig={HeaderConfig.GraphPage && HeaderConfig.GraphPage.mainHeader} 
                        patientDetails= {
                            {
                                patientName: data && data.patientName || 'XXXXX XXXXX',
                                patientId: data && data.patientId || 'XX-XX',
                                date: moment(new Date).format("DD-MM-YYYY"),
                                time: moment(new Date).format("HH:mm")
                            }
                        }
                    />
                    <SubHeader headerConfig={HeaderConfig.GraphPage && HeaderConfig.GraphPage.subHeader}
                        patientDetails= {
                            {
                                bedNumber: data && data.bedNumber
                            }
                        }
                    />
                </div>
                <div className="data-container">
                    <div className="graph-container">
                        <div className="chart-1">
                            <RealtimeLineChart className="chart"
                                dataList={dataList}
                                range={TIME_RANGE_IN_MILLISECONDS}
                                width={"100%"}
                                height={"100%"}
                                lineColor={'#20BBC1'}
                                yTitle={['Pressure',  '(cmH20)']}
                                yColor={'#20BBC1'}
                            />
                        </div>
                        <div className="chart-2">
                            <RealtimeLineChart className="chart"
                                dataList={dataList}
                                range={TIME_RANGE_IN_MILLISECONDS}
                                width={"100%"}
                                height={"100%"}
                                lineColor={'#FF508B'}
                                yTitle={['Flow', '(I/min)']}
                                yColor={'#FF508B'}
                            />
                        </div>
                        <div className="chart-3">
                            <RealtimeLineChart className="chart"
                                dataList={dataList}
                                range={TIME_RANGE_IN_MILLISECONDS}
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
                                                {data && data.monitoringData && data.monitoringData[`${param.paramName}`] || 'XX'}
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
                                            {data && data.monitoringData && data.monitoringData[`${param.paramName}`] || 'XX'}
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
