import Icons from 'views/examples/Icons';
import './PatientDataCard.css';
import pressureIcon from '../../assets/img/theme/pressure.svg';

const PatientDataCard = (props) => {
    
    return (
      <>
        <div className="patient-card">
            <h2 className="patient-card-header">{props.name}</h2>
            <h2 className="patient-card-data"> {props.value} </h2>
            <img className="icon" src={pressureIcon} alt="pressure icon" />
        </div>
      </>
    );
  };
  
  export default PatientDataCard;