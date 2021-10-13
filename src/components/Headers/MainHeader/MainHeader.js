import React from "react";

import "./MainHeader.css";
import imgsrc from "../../../assets/img/brand/nocca-white.png";
import bellIcon from "../../../assets/img/icons/common/bell.png";
import attachmentIcon from "../../../assets/img/icons/common/attachments.png";
import profileIcon from "../../../assets/img/icons/common/profile.png";

function HeaderNew (props) {
    // console.log('props in patient data: ' + JSON.stringify(props.data));

    return (
        <div className="top-header">
            {console.log("main header rendering")}
            {/* headers  */}

            {props.headerConfig.logo && <div className="brand-img-container">
                <span>
                    <img className="brand-img" src={imgsrc} alt="brand icon"/>
                </span>
            </div>}
            {props.headerConfig.showHeaderItems && <div className="header-items">
                <div className="search-container">
                    <input className="searchBox" type="search" name="search" placeholder="Search..." />
                </div>
                <div className="header-icons">
                    <span className="attachment-icon-container">
                        <img  className="attachment-icon" src={attachmentIcon} alt="attachment icon"/>
                    </span>
                    <span className="bell-icon-container">
                        <img  className="attachment-icon" src={bellIcon} alt="bell icon"/>
                    </span>
                    <span className="profile-icon-container">
                        <img  className="attachment-icon" src={profileIcon} alt="profile icon"/>
                    </span>
                </div>
            </div>}
            {props.headerConfig.showPatientDetails && <div className="patient-details-container">
                <div className="patient-details">
                    {props.patientDetails && props.patientDetails.patientName && <div className="patient-name">
                        Patient Name : <span>&emsp;{props.patientDetails.patientName.trim()}</span>
                    </div>}
                    {props.patientDetails && props.patientDetails.patientId && <div className="patient-id">
                        Patient ID&emsp;&nbsp;&nbsp;:<span>&nbsp;&emsp;{props.patientDetails.patientId.trim()}</span>
                    </div>}
                </div>
                <div className="date-details">
                    <div className="date">
                        <span>{props.patientDetails.date}</span>
                    </div>
                    <div className="time">
                        <span>{props.patientDetails.time}</span>
                    </div>
                </div>
            </div>}
        </div>
    );
};

/**
 *  to compare the previousProps and nextProps.
 *  return type
 *  false -  the function component will be executed like it normally would
 *  true - the function component will not be executed and the previous result will be used instead
 */
const comparisonFunc = function(prevProps, nextProps) {

    if (!prevProps.patientDetails || !nextProps.patientDetails) return true;
    if (prevProps.patientDetails.date !== nextProps.patientDetails.date) return false;
    if (prevProps.patientDetails.time !== nextProps.patientDetails.time) return false;
    if (prevProps.patientDetails.patientName !== nextProps.patientDetails.patientName) return false;
    if (prevProps.patientDetails.patientId !== nextProps.patientDetails.patientId) return false;

    if (prevProps.headerConfig.logo !== nextProps.headerConfig.logo) return false;
    if (prevProps.headerConfig.showHeaderItems !== nextProps.headerConfig.showHeaderItems) return false;
    if (prevProps.headerConfig.showPatientDetails !== nextProps.headerConfig.showPatientDetails) return false;

    return true;

}

export default React.memo(HeaderNew, comparisonFunc);