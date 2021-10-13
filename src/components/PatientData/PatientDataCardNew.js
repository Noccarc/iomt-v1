import React from "react";

import './PatientDataCardNew.css';
import {PatientDataCardConfig} from "../../constants/ParamConstants";

function PatientDataCardNew (props) {
    

    const handlePatientDataCardRendering = (monitoringData) => {
        let html = "";
        if (monitoringData) {
            html =  PatientDataCardConfig.map((config) => {
                return (<div key={config.value} className="patient-card">
                        <h2 className="patient-card-name">{config.name} <sub className="sub"> {config.nameSub}</sub></h2>
                        <h2 className="patient-card-value"> {monitoringData[config.value] || 'XX'} </h2>
                        <h2 className="patient-card-subName"> {config.baseText || 'cmH2O'} </h2>
                    </div>)
            })
        }

        return html;
    }

    return (
        <>
            {console.log("rendering PatientDataCardNew")}
            {handlePatientDataCardRendering(props.monitoringData)}
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

        if (!nextProps.monitoringData) return true;
        
        if (prevProps.monitoringData.pPip !== nextProps.monitoringData.pPip ) return false;
        if (prevProps.monitoringData.pPeep !== nextProps.monitoringData.pPeep) return false;
        if (prevProps.monitoringData.pPlateau !== nextProps.monitoringData.pPlateau) return false;
        if (prevProps.monitoringData.vTi !== nextProps.monitoringData.vTi) return false;
        if (prevProps.monitoringData.vTe !== nextProps.monitoringData.vTe) return false;
        if (prevProps.monitoringData.fio2 !== nextProps.monitoringData.fio2) return false;
        if (prevProps.monitoringData.rr !== nextProps.monitoringData.rr) return false;
        if (prevProps.monitoringData.ie !== nextProps.monitoringData.ie) return false;
    
        return true;
    }

    // const comparisonFunc = function(prevProps, nextProps) {
    //     if (!prevProps.name || !nextProps.name) return true;
    //     if (prevProps.name !== nextProps.name) return false;
    //     if (prevProps.nameSub !== nextProps.nameSub) return false;
    //     if (prevProps.value !== nextProps.value) return false;
    //     if (prevProps.baseText !== nextProps.baseText) return false;

    //     return true;
    // }

export default React.memo(PatientDataCardNew, comparisonFunc);