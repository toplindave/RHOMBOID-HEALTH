import React, { useContext, useState } from 'react'
import { changePwdInputs } from '../../../utils/inputs';
import usePasswordToggle from '../../../hooks/usePasswordToggle';
import FormInput from '../forms/FormInput';
// import useApi from '../../hooks/useApi';
import { DataContext } from '../../../context/DataContext';
import Modal from '../modals/Modal';
import ConfirmationPage from './confirmationModal/ConfirmationPage';
// import '../../../styles/adminStyles/createStaff.css';





const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: ""

}

const ChangePasswordModal = ({ closeModal }) => {

  const { modalOpen, message } = useContext(DataContext);

  // const { adminLogout } = useApi();


  const { InputType } = usePasswordToggle();

  // const { adminChangePassword } = useApi();

  const [values, setValues] = useState(initialValues);



  const [error, setError] = useState(false);
  

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  };




  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.currentPassword === "" || values.newPassword === "" || values.confirmNewPassword === "") {
      setError(true);

    }


    else {

      console.log(values);

      // adminChangePassword(values);

    }


  }


  // const handleOk = () => {
  //   console.log(values);

  // }



  return (
    <>
      {  modalOpen &&
            <Modal                     
              modalBody={ <ConfirmationPage/> }
              modalType={message.type}
              closeModal={closeModal}
                
            />
        }
      <div className="s-acc-container">

        <div className="s-acc-title">Change Password</div>

        <div className="addr-inp-container">
          {
            changePwdInputs.map((input, index) => (
              <FormInput
                key={index}
                inputType={input.isPassword ? InputType : input.isNum ? "number" : "text"}
                {...input}
                icon={null}
                value={values[input.name]}
                handleChange={handleChange}
                isPassword={input.isPassword}
                isNum={input.isNum}
                validate={input.validate}
                errorMessage={input.errorMessage}
                error={error}
                cName="addr-input"
                values={values}

              />
            ))
          }

        </div>

        <div className="s-acc-footer">
          <div className="s-acc-btns s-acc-cancel-btn" onClick={closeModal}>Cancel</div>
          <div className="s-acc-btns s-acc-add-btn" onClick={handleSubmit}>Change Password</div>
        </div>

      </div>
    </>
  )
}

export default ChangePasswordModal;