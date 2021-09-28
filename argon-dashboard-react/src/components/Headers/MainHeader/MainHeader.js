import moment from "moment";

import "./MainHeader.css";
import imgsrc from "../../../assets/img/brand/nocca-white.png";
import bellIcon from "../../../assets/img/icons/common/bell.png";
import attachmentIcon from "../../../assets/img/icons/common/attachments.png";
import profileIcon from "../../../assets/img/icons/common/profile.png";

const HeaderNew = (props) => {
    // console.log('props in patient data: ' + JSON.stringify(props.data));

    console.log(props.headerConfig);
    return (
        <div className="top-header">
            {/* headers  */}

            {props.headerConfig.logo && <div className="brand-img-container">
                <span>
                    <img className="brand-img" src={imgsrc} />
                </span>
            </div>}
            {props.headerConfig.showHeaderItems && <div className="header-items">
                <div className="search-container">
                    <input className="searchBox" type="search" name="search" placeholder="Search..." />
                </div>
                <div className="header-icons">
                    <span className="attachment-icon-container">
                        <img  className="attachment-icon" src={attachmentIcon} />
                    </span>
                    <span className="bell-icon-container">
                        <img  className="attachment-icon" src={bellIcon} />
                    </span>
                    <span className="profile-icon-container">
                        <img  className="attachment-icon" src={profileIcon} />
                    </span>
                </div>
            </div>}
            {props.headerConfig.showPatientDetails && <div className="patient-details-container">
                <div className="patient-details">
                    {props.patientDetails && props.patientDetails.patientName && <div className="patient-name">
                        Patient Name : <span>&emsp;{props.patientDetails.patientName}</span>
                    </div>}
                    {props.patientDetails && props.patientDetails.patientId && <div className="patient-id">
                        Patient ID&emsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span>&emsp;&nbsp;{props.patientDetails.patientId}</span>
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


  
  export default HeaderNew;