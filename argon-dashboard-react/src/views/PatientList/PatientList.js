import './PatientList.css';
import PatientDataNew from 'components/PatientData/PatientDataNew';

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
            <div className='patient-list-box'>
                <PatientDataNew patientName="patient-1" data={data} critical={true}/>
                <PatientDataNew patientName="patient-1" data={data} critical={false}/>
            </div>
        </div>
      </>
    );
  };
  
  export default PatientList;