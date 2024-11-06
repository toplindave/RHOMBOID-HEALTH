import { useContext, useEffect, useState } from "react"
import { addAddressInputs, states } from "../../../utils/inputs";

import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect";
// import useApi from "../../hooks/useApi";
// import { useNavigate } from "react-router-dom"
import Modal from "../modals/Modal";
import ConfirmationPage from "./confirmationModal/ConfirmationPage";
import { DataContext } from "../../../context/DataContext";
// import SessionManager from "../../../files/SessionManager"


const initialValues = {
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
    state: "",
   

}



const EditAddressModal = ({ admin, closeModal }) => {



    const [values, setValues] = useState(initialValues);

    const [error, setError] = useState(false);
    // const user = SessionManager.getUser();


    
    const { modalOpen, message } = useContext(DataContext);


    // const { addAdminAddress } = useApi();

 

    // const navigate = useNavigate();

    // const [addressLine1, setAddressLine1] = useState("");
    // const [addressLine2, setAddressLine2] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");

    // const {user} = useContext(AuthContext);
    // const { apppAdmin, setAppAdmin } = useContext(DataContext);

    

    // const {data: admin } = useFetch(`/access-auth/business/admin/profile/${user}`);



    // useEffect(() => {

    //     if(!admin){
    //         return;
    //     }
    //     else{

    //         setValues({
    //             addressLine1: admin.AddressLine1,
    //             addressLine2: admin.AddressLine2,
    //             postalCode: admin?.PostalCode,
    //             city: admin.City,
    //             state: admin.State
    //         })

        
    //     }

    // }, [admin])



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

        if(values.addressLine1 === "" || values.city === "" || values.postalCode === ""  || values.state === ""){
            setError(true);
        }

        if(values.addressLine1 === null || values.city === null || values.postalCode === null || values.state === null){
            setError(true);
        }
  
    
        else{
            
            console.log(values);
            // addAdminAddress(values, admin.AdminId);

            //adminChangePassword(values);
  
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
            <div className="s-acc-title">Edit Address</div>
            <div className="addr-inp-container">
                {
                    addAddressInputs.map((input, index) => (
                        <FormInput 
                            key={index }
                            inputType={input.isNum ? "number" : "text"}
                            {...input}
                            icon={null}    
                            value={values[input.name] ?? ""} 
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

export default EditAddressModal