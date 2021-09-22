import "./MainHeader.css";
import imgsrc from "../../../assets/img/brand/nocca-white.png";
import bellIcon from "../../../assets/img/icons/common/bell.png";
import attachmentIcon from "../../../assets/img/icons/common/attachments.png";
import profileIcon from "../../../assets/img/icons/common/profile.png";

const HeaderNew = (props) => {
    console.log('props in patient data: ' + JSON.stringify(props.data));
    return (
        <div className="top-header">
            {/* headers  */}

            <div className="brand-img-container">
                <span>
                    <img className="brand-img" src={imgsrc} />
                </span>
            </div>
            <div className="header-items">
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
            </div>
        </div>
    );
  };
  
  export default HeaderNew;