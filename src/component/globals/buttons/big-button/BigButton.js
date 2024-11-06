import './big-button.css'

const BigButton = ({hasIcon, btnText, action, cName, Icon }) => {

  const makeBtnStyle = (isIcon) => {
      if(isIcon){
          return `big-btn-has-icon ${cName}`;
      }
      else{
        return `big-btn ${cName}`;

        //   if(btnActive){
        //       return `"btn active-btn" ${cName}`;
        //   }
        //   else{
        //       return `"btn inActive-btn" ${cName}`;
        //   }
      }
  }
  
return (
  <div 
      className={makeBtnStyle(hasIcon)}
      onClick={action}
  >
      { hasIcon &&
          <div className="big-btn-icon">
              <Icon />
          </div>
      }

      <div className="btn-text">
          {btnText}
      </div>
  </div>
)
}

export default BigButton;