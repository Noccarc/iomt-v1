import './PatientData.css';
import PatientDataCard from './PatientDataCard';

const PatientList = (props) => {
    

    console.log('props in patient data: ' + JSON.stringify(props.data));
    return (
      <>
        <div className='patient'>
            <p className="patient-name">
                {props.patientName}
                <span className="details-link">
                    View Details
                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
                </span>
            </p>

            <div className="patient-data-container">
                { props.data && props.data.monitoringData.pPip && <PatientDataCard name={'pPip'} value={props.data.monitoringData.pPip}/>}
                { props.data && props.data.monitoringData.pPeep && <PatientDataCard name={'pPeep'} value={props.data.monitoringData.pPeep}/>}
                { props.data && props.data.monitoringData.pPlateau && <PatientDataCard name={'pPlateau'} value={props.data.monitoringData.pPlateau}/>}
                { props.data && props.data.monitoringData.vTi && <PatientDataCard name={'vTi'} value={props.data.monitoringData.vTi}/>}
                { props.data && props.data.monitoringData.vTe && <PatientDataCard name={'vTe'} value={props.data.monitoringData.vTe}/>}
                { props.data && props.data.monitoringData.fio2 && <PatientDataCard name={'fio2'} value={props.data.monitoringData.fio2}/>}
                { props.data && props.data.monitoringData.rr && <PatientDataCard name={'rr'} value={props.data.monitoringData.rr}/>}
                { props.data && props.data.monitoringData.ie && <PatientDataCard name={'i:e'} value={props.data.monitoringData.ie}/>}
                {/* { props.data.monitoringData.ie && <PatientDataCard name={'dummy'} value={props.data.monitoringData.ie}/>}
                { props.data.monitoringData.ie && <PatientDataCard name={'dummy'} value={props.data.monitoringData.ie}/>}
                { props.data.monitoringData.ie && <PatientDataCard name={'dummy'} value={props.data.monitoringData.ie}/>}
                { props.data.monitoringData.ie && <PatientDataCard name={'dummy'} value={props.data.monitoringData.ie}/>}
                { props.data.monitoringData.ie && <PatientDataCard name={'dummy'} value={props.data.monitoringData.ie}/>} */}
                {/* { props.data.monitoringData.ie && <PatientDataCard name={'ie'} value={props.data.monitoringData.ie}/>} */}
                {/* { props.data.monitoringData.ie && <PatientDataCard name={'ie'} value={props.data.monitoringData.ie}/>}
                { props.data.monitoringData.ie && <PatientDataCard name={'ie'} value={props.data.monitoringData.ie}/>}
                { props.data.monitoringData.ie && <PatientDataCard name={'ie'} value={props.data.monitoringData.ie}/>} */}
            </div>

        </div>
      </>
    );
  };
  
  export default PatientList;