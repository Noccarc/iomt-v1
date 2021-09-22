import React, { useState } from 'react';

import "./SubHeader.css";

import menuIcon from "../../../assets/img/icons/common/menu.png";
import FilterIcon from "../../../assets/img/icons/common/filter.png";
import LockIcon from "../../../assets/img/icons/common/lock.png";
import CrossIcon from "../../../assets/img/icons/common/cross.png";
import Select from 'react-select';

const SubHeader = (props) => {
    const [isMenuContentActive, setIsMenuContentActive] = useState(false);

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
        const ele = document.getElementById('menu-content');
        setIsMenuContentActive(!isMenuContentActive);
        // alert('clicked');
    }

    return (
        <div className="sub-header">
            <div className="menu-container"  onClick={()=> handleMenuClick()}>
                <span className="menu-icon-container" >
                {!isMenuContentActive && <img  className="menu-icon" src={menuIcon}/>}
                {isMenuContentActive && <img  className="menu-icon" src={CrossIcon}/>}
                </span>
                <span className="menu-text"> Menu</span>
                {isMenuContentActive && <div className="menu-content" id="menu-content">
                    test
                </div>}
            </div>
            <div className="filter-container">
                <span className="dropdown">
                    <Select options={ actions } styles={customStyles} label="Single select"/>
                </span>
                <span className="filter-icon-container">
                    <img  className="filter-icon" src={FilterIcon} />
                </span>
                <span className="lock-icon-container">
                    <img  className="lock-icon" src={LockIcon} />
                </span>
            </div>
        </div>
    );
  };
  
  export default SubHeader;