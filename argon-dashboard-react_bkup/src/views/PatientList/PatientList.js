import './PatientList.css';
import PatientData from 'components/PatientData/PatientData';

const  data = {
    monitoringData: {
        pPip: '24',
        pPeep: '6',
        pPlateau: '22',
        vTi: '297',
        vTe: '297',
        fio2: '21',
        rr: '16',
        ie: '1:2.0'
    }
}

const PatientList = (props) => {

    const data = props.data;

    console.log("data in patientList: " + JSON.stringify(data));
    return (
      <>
        <div>
            this is the patient List page
            <div className='patient-list-box'>
                <PatientData patientName="patient-1" data={data}/>
                <PatientData patientName="patient-2" data={data}/>
                <PatientData patientName="patient-3" data={data}/>
                <PatientData patientName="patient-4" data={data}/>
                <PatientData patientName="patient-5" data={data}/>
            </div>
        </div>
      </>
    );
  };
  
  export default PatientList;