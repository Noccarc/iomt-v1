import "./HomePage.css";

import PatientList from "../PatientList/PatientList";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import SubHeader from "../../components/Headers/SubHeader/SubHeader"
import {HeaderConfig} from "../../constants/ParamConstants";



const HomePage = (props) => {
    return (
        <>
            {
                console.log("rendering HomePage" + new Date())
            }
            <div className="home-page">
                <div className="headers">
                    <MainHeader 
                        headerConfig={HeaderConfig.GraphPage && HeaderConfig.HomePage.mainHeader} 
                    />
                    <SubHeader headerConfig={HeaderConfig.HomePage.subHeader}
                    />
                </div>
                <div className="home-page-content">
                    <PatientList/>
                </div>
            </div>    
        </>
    );
};

export default HomePage;
