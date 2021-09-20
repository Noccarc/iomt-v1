import PatientList from "./PatientList/PatientList";
import { useState, useEffect, useContext } from "react";

import {SocketContext} from '../context/socket';

const Index = (props) => {
    const [data, setData] = useState();

    const socket = useContext(SocketContext);

    // const _dataList = data;
    useEffect(() => {
        socket.on("monitoring_data", (data) => {
            console.log(data);
            console.log("recieved message");

            setData(data.data);
        });
        return () => {
            socket.off('monitoring_data');
        };
    });

    return (
        <>
        {/* <div className="d-flex justify-content-center"> */}
        <PatientList data={data}/>
        {/* <PatientDashboard/> */}
        {/* </div> */}
        
        
        </>
    );
};

export default Index;
