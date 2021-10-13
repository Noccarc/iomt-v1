import PubSub from 'pubsub-js';
import { useState, useEffect, React} from "react";
import { useAlert, positions } from 'react-alert';

import './PatientList.css';
import PatientDataNew from 'components/PatientData/PatientDataNew';
import {PubSubNameConstants as PubSubConstants} from '../../constants/PubSubConstants';

function PatientList (props) {
    
    const [data, setData] = useState();

    const alert = useAlert();

    useEffect(() => {
        let tempTokenMonitoring = PubSub.subscribe('monitoring_data', (msg, data) => handleData(PubSubConstants.TYPE_MONITORING, msg, data));
        let tempTokenAlarm = PubSub.subscribe('alarm_trigger_data', (msg, data) => handleData(PubSubConstants.TYPE_ALARM, msg, data));

        
        return function cleanup() {
            PubSub.unsubscribe(tempTokenMonitoring);
            PubSub.unsubscribe(tempTokenAlarm);
        }
    }, []);

    function handleData (type, msg, data) {
        console.log("type: " + type);
        if (type === PubSubConstants.TYPE_MONITORING) {
            setData(data);
        } else if (type === PubSubConstants.TYPE_ALARM){
            renderAlert(data);
        }
    };

    const handlePatientRendering = (data) => {
        if (data && data.patientList) {
            return data.patientList.map((patient) => {
                return <PatientDataNew patientData={patient} key={patient.patientId}/>
            })
        } else {
            return <div className="no-patient-text">Please register at least one device for remote monitoring.</div>;
        }
    }

    const renderAlert = (data) => {
        alert.show(
            (<div className="patient-param-alert">Alarm Triggered for patientId - ({data.patientId}) at {data.addedAt} because of {data.cause}</div>), {
            timeout: 5000,
            width: '3000px',
            position: positions.MIDDLE,
            containerStyle: {
                zIndex: '100',
                width: "50%"
            },
            onOpen: () => {
            },
            onClose: () => {
            }
        });
    }

    return (
      <>
        {console.log("rendering PatientList")}
        <div>
            <div className='patient-list-box'>
                {/* <button onClick={() => renderAlert("test")} text="button">Test</button> */}
                {
                    handlePatientRendering(data)
                }
            </div>
        </div>
      </>
    );
  };
  
  export default PatientList;