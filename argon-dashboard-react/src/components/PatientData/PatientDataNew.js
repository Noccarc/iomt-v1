import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './PatientDataNew.css';
import PatientDataCardNew from './PatientDataCardNew';
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

    if (props.patientData && props.patientData.monitoringData) {
        const patientData = props.patientData;
        const monitoringData = props.patientData.monitoringData;
        return (
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
                        { <PatientDataCardNew name={'P'} nameSub={'pip'} baseText="cmH2O"  value={monitoringData.pPip}/>}
                        { <PatientDataCardNew name={'P'} nameSub={'peep'} baseText="cmH2O" value={monitoringData.pPeep}/>}
                        { <PatientDataCardNew name={'P'} nameSub={'plateau'} baseText="cmH2O" value={monitoringData.pPlateau} />}
                        { <PatientDataCardNew name={'V'} nameSub={'ti'} sub={'insp'} baseText="cmH2O" value={monitoringData.vTi} />}
                        { <PatientDataCardNew name={'V'} nameSub={'te'} sub={'insp'} baseText="cmH2O" value={monitoringData.vTe} />}
                        { <PatientDataCardNew name={'fio2'} nameSub={''} sub={'insp'} baseText="cmH2O" value={monitoringData.fio2} />}
                        { <PatientDataCardNew name={'rr'} nameSub={''} sub={'insp'} baseText="cmH2O" value={monitoringData.rr} />}
                        { <PatientDataCardNew name={'ie'} nameSub={''} sub={'insp'} baseText="cmH2O" value={monitoringData.ie} />}
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
                        <li className="more-item" onClick={() => handleMoreItemsClick('PACS')}>PACS</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('EMR')}>EMR</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('ECG')}>ECG</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('Medicines')}>Medicines</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('Risk_Score')}>Risk Score</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('History')}>History</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('Notes')}>Notes</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('Lab_Reports')}>Lab Reports</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('Additional_Settings')}>Additional Settings</li>
                        <li className="more-item" onClick={() => handleMoreItemsClick('Set_Custom_Alarms')}>Set Custom Alarms</li>
                    </ul>
                </div>}
                

            </div>
        );
    } else {
        return null;
    }
};
  
  export default PatientDataNew;