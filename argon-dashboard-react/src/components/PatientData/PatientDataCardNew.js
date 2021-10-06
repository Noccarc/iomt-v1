import './PatientDataCardNew.css';

const PatientDataCardNew = (props) => {
    
    return (
      <>
        <div className="patient-card">
            <h2 className="patient-card-name">{props.name} <sub className="sub"> {props.nameSub}</sub></h2>
            <h2 className="patient-card-value"> {props.value || 'XX'} </h2>
            <h2 className="patient-card-subName"> {props.baseText || 'cmH2O'} </h2>
        </div>
      </>
    );
  };
  
  export default PatientDataCardNew;