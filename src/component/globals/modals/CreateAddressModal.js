import { useContext, useState } from "react"
import FormInput from "../forms/FormInput";
import { addAddressInputs, states } from "../../../utils/inputs";

import FormSelect from "../forms/FormSelect";
// import useApi from "../../hooks/useApi";
import Modal from "./Modal";
import ConfirmationPage from "./confirmationModal/ConfirmationPage";

import { DataContext } from "../../../context/DataContext";

const initialValues = {
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
    state: "",
   

}





const CreateAddressModal = ({ adminId, closeModal }) => {

    const [values, setValues] = useState(initialValues);

    const { modalOpen, message } = useContext(DataContext);


    // const { addAdminAddress } = useApi();

   
    const [error, setError] = useState(false);

    // const navigate = useNavigate();


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
        
    }

    const selectChange = (e) => {
        const value =  e.target.textContent;
        setValues({...values, state: value});
        // setOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.addressLine1 === "" || values.city === "" || values.zipCode === "" || values.state === ""){
            setError(true);
        }
        
      
        else{

            
            console.log(values);
            // addAdminAddress(values, adminId);
            // registerStaff(values);
        }


    }

    const handleOk = () => {
        window.location.reload();
        
    }


  return (
    <>

        {  modalOpen &&
            <Modal                     
              modalBody={ <ConfirmationPage handleOk={handleOk} /> }
              modalType={message.type}
              closeModal={closeModal}
                
            />
        }
        

        <div className="s-acc-container" noValidate>
                <div className="s-acc-title">Add Address</div>
                <div className="addr-inp-container">
                    {
                        addAddressInputs.map((input, index) => (
                            <FormInput 
                                key={index }
                                inputType={input.isNum ? "number" : "text"}
                                {...input}
                                icon={null}    
                                value={values[input.name]} 
                                handleChange={handleChange}  
                                isPassword={input.isPassword}
                                isNum={input.isNum}
                                validate = {input.validate}
                                errorMessage = {input.errorMessage}
                                error = {error}
                                cName = "addr-input"
                            />
                        ))
                    }

                    <div className="inp-control">
                        
                        <label className='inp-lbl'>State</label>
                        <FormSelect 
                            options={states}
                            setError={setError}
                            error={error}
                            value={values.state}
                            onChange={selectChange}
                            
                        />


                    </div>


                </div>

                <div className="s-acc-footer">
                    <div className="s-acc-btns s-acc-cancel-btn" onClick={closeModal}>Cancel</div>
                    <div className="s-acc-btns s-acc-add-btn" onClick={handleSubmit}>Save Address</div>
                </div>
        </div>
    </>
  )
}

export default CreateAddressModal