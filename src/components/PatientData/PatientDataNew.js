import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './PatientDataNew.css';
import PatientDataCardNew from './PatientDataCardNew';
import {PatientDataCardConfig, HomePageMoreItemConfig} from "../../constants/ParamConstants";
import VideoCallIcon from "../../assets/img/icons/common/video-call.png";
import RightDirIcon from "../../assets/img/icons/common/right-dir.png";
import EmptyFlagIcon from "../../assets/img/icons/common/empty-flag.png";
import SolidFlagIcon from "../../assets/img/icons/common/solid-flag.png";

const PatientDataNew = (props, context) => {
    const history = useHistory();
    const [isMoreContentActive, setIsMoreContentActive] = useState(false);

    const handleMoreClick = () => {
        console.log('more clicked');
        setIsMoreContentActive(!isMoreContentActive);
        // alert('clicked');
    }

    const handleMoreItemsClick = () => {
        setIsMoreContentActive(!isMoreContentActive);
    }

    const handleDataContainerClick = (patientData) => {
        console.log('data container clicked');
        console.log("context: " + context);
        history.push({ 
            pathname: '/admin/home',
            state: {
                'patient': patientData
            }
        });
    }

    const handlePatientDataCardRendering = (monitoringData) => {

        return <PatientDataCardNew monitoringData={monitoringData}/>
        // if (monitoringData) {
        //     return PatientDataCardConfig.map((config) => {
        //         return <PatientDataCardNew key={config.value} name={config.name} nameSub={config.nameSub} sub={config.sub} baseText={config.baseText}  value={monitoringData[config.value]}/>
        //     })
        // }

        // return null;
    }

    const handleMoreItemsRendering = () => {
        return HomePageMoreItemConfig.map((config) => {
            return <li key={config.value} className="more-item" onClick={() => handleMoreItemsClick(config.value)}>{config.name}</li>
        }) 
    }

    if (props.patientData && props.patientData.monitoringData) {
        const patientData = props.patientData;
        const monitoringData = props.patientData.monitoringData;
        return (
            <>
            {console.log("rendering PatientDataNew")}
                <div className='patient-data'>
                    <div className={`patient-data-upper-bar ${patientData.critical ? "critical-background": "non-critical-background"}`}>
                        {patientData.mode} 
                    </div>

                    <div className="test-div">
                        <div className="patient-data-container" onClick={() => handleDataContainerClick(patientData)}>
                            <div className="patient-info">
                                <div>
                                    <span className="info-name">BED No. :</span> 
                                    <span className="info-value name-color">{patientData.bedNumber}</span>
                                </div>
                                <div>
                                    <span className="info-name">Patient Name :</span> 
                                    <span className="info-value">{patientData.patientName}</span>
                                </div>
                                <div>
                                    <span className="info-name">Patient ID :</span> 
                                    <span className="info-value">{patientData.patientId}</span>
                                </div>
                            </div>
                            {handlePatientDataCardRendering(monitoringData)}
                        </div>
                        <div className="patient-calling" onClick={() => console.log('patient-calling clicked')}>
                            <div className="video-icon-container" >
                                <div className="flag-container">
                                    {!patientData.solidFlag && <img className="empty-flag-icon" src={EmptyFlagIcon} alt="flag-icon"/>}
                                    {patientData.solidFlag && <img className="solid-flag-icon" src={SolidFlagIcon} alt="flag-icon" />}
                                </div>
                                <img  className="video-icon" src={VideoCallIcon} alt="video-icon"/>
                            </div>
                            <div className="more-text-container" onClick={() => handleMoreClick()}>
                                {!isMoreContentActive && 'More'}
                                {isMoreContentActive && 'Less'}
                                <img className="right-dir-icon" src={RightDirIcon} alt="ight-dir-icon"/>
                            </div>
                        </div>
                    </div>
                    { isMoreContentActive && <div className="more-items-container">
                        <ul className="more-list-items">
                            {handleMoreItemsRendering()}
                        </ul>
                    </div>}
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default PatientDataNew;