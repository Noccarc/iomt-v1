import "./HomePage.css";

import { useState, useEffect, React} from "react";
import PubSub from 'pubsub-js';

import PatientList from "../PatientList/PatientList";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import SubHeader from "../../components/Headers/SubHeader/SubHeader"
import {HeaderConfig} from "../../constants/ParamConstants";



const HomePage = (props) => {

    const [data, setData] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        let tempToken = PubSub.subscribe('monitoring_data', handleData);
        setToken(tempToken);
        console.log('tokenId: ' + tempToken);
        
        return function cleanup() {
            console.log("token in homepage unsubscribe: " + tempToken);
            PubSub.unsubscribe(tempToken);
        }
    }, []);

    function handleData (msg, data) {
        console.log("HomePage: " + " msg: " + msg + " data: " + JSON.stringify(data));
        setData(data);
    };

    return (
        <>
            <div className="home-page">
                <div className="headers">
                    <MainHeader 
                        headerConfig={HeaderConfig.GraphPage && HeaderConfig.HomePage.mainHeader} 
                    />
                    <SubHeader headerConfig={HeaderConfig.HomePage.subHeader}
                    />
                </div>
                <div className="home-page-content">
                    <PatientList data={data}/>
                </div>
            </div>    
        </>
    );
};

export default HomePage;
