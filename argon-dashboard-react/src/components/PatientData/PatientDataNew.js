import './PatientDataNew.css';
import PatientDataCard from './PatientDataCard';
import PatientDataCardNew from './PatientDataCardNew';

const PatientDataNew = (props) => {
    console.log('props in patient data: ' + JSON.stringify(props.data));
    return (
      <>
        <div className='patient-data'>
            <div className={`patient-data-upper-bar ${props.critical ? "critical-background": "non-critical-background"}`}>
                Mode: PC-CMV  
            </div>

            <div className="patient-data-container">
                <div className="patient-info">
                    <div>
                        <span className="info-name">BED No. :</span> 
                        <span className="info-value name-color">XXXX--XXX-01</span>
                    </div>
                    <div>
                        <span className="info-name">Patient Name :</span> 
                        <span className="info-value">XXXXX-XXXXX</span>
                    </div>
                    <div>
                        <span className="info-name">Patient ID :</span> 
                        <span className="info-value">XXXXX-XXXXX-XXXXX</span>
                    </div>
                </div>
                {/* <div className="data-card"> */}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} value={16} baseText="cmH2O"/>}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                    { <PatientDataCardNew name={'P'} nameSub={props.nameSub || 'insp'} sub={'insp'} />}
                {/* </div> */}
                <div className="patient-calling">
                    <div className="video-calling">
                        testtesttest
                        testtesttest
                        testtesttest
                        testtesttest
                        testtesttest
                        testtesttest
                        testtesttest
                    </div>
                </div>
            </div>
            

        </div>
      </>
    );
  };
  
  export default PatientDataNew;