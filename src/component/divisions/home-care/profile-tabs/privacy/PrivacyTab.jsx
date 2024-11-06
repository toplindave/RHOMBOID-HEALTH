import "../../../../../styles/index.scss";


const PrivacyTab = (props) => {

  const {setBtnClass} = props;

  return (
    <div className={`info-display-section-5 ${setBtnClass(5)}`}>
      Privacy


    </div>
  )
}

export default PrivacyTab;