import "./GraphPage.css";

import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import SubHeader from "../../components/Headers/SubHeader/SubHeader"
import { useState, useEffect, useContext } from "react";

import {SocketContext} from '../../context/socket';

const GraphPage = (props) => {
    const [data, setData] = useState();

    console.log("props: " + JSON.stringify(props));
    return (
        <>
            <div className="graph-page">
                <div className="headers">
                    <MainHeader />
                    <SubHeader />
                </div>
            </div>
            <div className="data">
                {JSON.stringify(props.history && props.history.location && props.history.location.state && props.history.location.state.patient)}
            </div>
        </>
    );
};

export default GraphPage;
