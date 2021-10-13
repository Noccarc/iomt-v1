import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import "./SubHeader.css";

import menuIcon from "../../../assets/img/icons/common/menu.png";
import FilterIcon from "../../../assets/img/icons/common/filter.png";
import LockIcon from "../../../assets/img/icons/common/lock.png";
import CrossIcon from "../../../assets/img/icons/common/cross.png";
import Select from 'react-select';

function SubHeader (props) {
    const [isMenuContentActive, setIsMenuContentActive] = useState(false);
    const history = useHistory();
    const actions = [
        { label: "ICU 01 - Darshan Hospital", value: 1 },
        { label: "ICU 02 - Darshan Hospital", value: 2 },
        { label: "ICU 03 - Darshan Hospital", value: 3 }
    ];

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: 'white',
          backgroundColor: '#17395C',
          padding: 10,
          borderBottom: 'white',
          zIndex: '100',
        //   opacity: '1',
          font: 'normal normal normal 16px/24px Open Sans'
        }),
        container: (provided, state) => ({
            ...provided,
            border: 0,
            zIndex: '100',
            padding: 0,
        }),
        menu: (base, state) => ({
            ...base,
            border: 0,
            borderBottom: '1px solid #17395C'
        }),
        control: (base, state) => ({
            ...base,
          // none of react-select's styles are passed to <Control />
          border: 0,
          width: '100%',
          opacity: 1,
          borderBottom: '1px solid #17395C'
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
        //   const opacity = 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
    }

    const handleMenuClick = () => {
        const ele = document.getElementById('menu-container');
        
        if (isMenuContentActive === false) {
            ele.style["border-bottom"] = "2px solid #F2F2F2";
            ele.style["border-radius"] = "0px 30px 0px 0px";
            ele.style["box-shadow"] = "2px 0px 6px #00000029";
            // ele.style["color"] = "white";
        } else {
            ele.style["border"] = "";
            ele.style["border-radius"] = "";
            ele.style["box-shadow"] = "";
        }
        setIsMenuContentActive(!isMenuContentActive);
        // alert('clicked');
    }

    const handleBackClick = () => {
        history.goBack();
    }

    return (
        <>
        {console.log("subHeader rerendring")}
        <div className="sub-header">
            <div className="menu-container" id="menu-container" onClick={()=> handleMenuClick()}>
                <span className="menu-icon-container" >
                    {!isMenuContentActive && <img  className="menu-icon" src={menuIcon} alt="menu icon"/>}
                    {isMenuContentActive && <img  className="menu-icon" src={CrossIcon} alt="cross icon"/>}
                </span>
                <span className="menu-text"> Menu</span>
                {isMenuContentActive && <div className="menu-content" id="menu-content">
                    <ul>
                        <li className="menu-list-item">Staff Assignment</li>
                        <li className="menu-list-item">Analytics</li>
                        <li className="menu-list-item">SOPs</li>
                        <li className="menu-list-item">Import Data</li>
                        <li className="menu-list-item">Resources</li>
                        <li className="menu-list-item">Settings</li>
                    </ul>
                    <div className="menu-contact-item">Contact Admin</div>
                </div>}
            </div>
            {props.headerConfig && props.headerConfig.showFilterContainer && <div className="filter-container">
                <span className="dropdown">
                    <Select options={ actions } styles={customStyles} label="Single select"/>
                </span>
                <span className="filter-icon-container">
                    <img  className="filter-icon" src={FilterIcon} alt="filter icon"/>
                </span>
                <span className="lock-icon-container">
                    <img  className="lock-icon" src={LockIcon} alt="lock icon"/>
                </span>
            </div>}
            {props.headerConfig && props.headerConfig.showBedDetails && <div className="bed-details-container">
                <div className="bed-details">
                    Bed No : <span>{props.patientDetails && props.patientDetails.bedNumber}</span>
                </div>
                <div className="back-button-container">
                    <button className="back-button" onClick={() => {handleBackClick()}}>BACK</button>
                </div>
            </div>}
        </div>
        </>
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
    if (prevProps.patientDetails.bedNumber !== nextProps.patientDetails.bedNumber) return false;

    if (prevProps.headerConfig.showFilterContainer !== nextProps.headerConfig.showFilterContainer) return false;
    if (prevProps.headerConfig.showBedDetails !== nextProps.headerConfig.showBedDetails) return false;

    return true;

}

export default React.memo(SubHeader, comparisonFunc);