import Icons from 'views/examples/Icons';
import './PatientDataCard.css';

const PatientDataCard = (props) => {
    
    return (
      <>
        <div className="patient-card">
            <h2 className="patient-card-header">{props.name}</h2>
            <h2 className="patient-card-data"> {props.value} </h2>
        </div>
      </>
    );
  };
  
  export default PatientDataCard;