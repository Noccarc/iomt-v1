import './PatientList.css';
import PatientDataNew from 'components/PatientData/PatientDataNew';

// const  data = {
//     patientList: [
//         {
//             patientName: 'patient-1',
//             patientId: '123',
//             hospitalName: 'hospital-1',
//             bedNumber: 'bed-1',
//             critical: false,
//             mode: 'PC-CMV',
//             solidFlag: true,
//             monitoringData: {
//                 pPip: '24',
//                 pPeep: '6',
//                 pPlateau: '22',
//                 vTi: '297',
//                 vTe: '297',
//                 fio2: '21',
//                 rr: '16',
//                 ie: '1:2.0'
//             }
//         },
//         {
//             patientName: 'patient-2',
//             patientId: '234',
//             hospitalName: 'hospital-1',
//             bedNumber: 'bed-2',
//             critical: true,
//             mode: 'PC-test-1',
//             monitoringData: {
//                 pPip: '25',
//                 pPeep: '7',
//                 pPlateau: '22',
//                 vTi: '297',
//                 vTe: '297',
//                 fio2: '21',
//                 rr: '16',
//                 ie: '1:2.0'
//             }
//         },
//         {
//             patientName: 'patient-3',
//             patientId: '345',
//             hospitalName: 'hospital-1',
//             bedNumber: 'bed-3',
//             critical: true,
//             mode: 'PC-test-2',
//             monitoringData: {
//                 pPip: '26',
//                 pPeep: '8',
//                 pPlateau: '22',
//                 vTi: '297',
//                 vTe: '297',
//                 fio2: '21',
//                 rr: '16',
//                 ie: '1:2.0'
//             }
//         }
//     ]
// }

const handlePatientRendering = (data) => {
    console.log("data in patient list:: " + JSON.stringify(data));
    if (data && data.patientList) {
        return data.patientList.map((patient) => {
            return <PatientDataNew patientData={patient} key={patient.patientId}/>
        })
    } else {
        return <div className="no-patient-text">Please register at least one device for remote monitoring.</div>;
    }
}

const PatientList = (props) => {
    // console.log("data in patientList: " + JSON.stringify(props.data));
    return (
      <>
        <div>
            <div className='patient-list-box'>
                {
                    handlePatientRendering(props.data)
                }
            </div>
        </div>
      </>
    );
  };
  
  export default PatientList;