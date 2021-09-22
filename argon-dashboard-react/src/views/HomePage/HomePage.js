import "./HomePage.css";

import PatientList from "../PatientList/PatientList";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import SubHeader from "../../components/Headers/SubHeader/SubHeader"
import { useState, useEffect, useContext } from "react";

import {SocketContext} from '../../context/socket';

const HomePage = (props) => {
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
            <div className="home-page">
                <div className="headers">
                    <MainHeader />
                    <SubHeader />
                </div>
                <div className="home-page-content">
                    <PatientList data={data}/>
                </div>
            </div>    
        </>
    );
};

export default HomePage;
