import React, { useState } from 'react'
import { PersonalInfoInputs } from '../../../utils/inputs';
import FormInput from '../forms/FormInput';
import usePasswordToggle from '../../../hooks/usePasswordToggle';




const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: ""

}






const EditPersonalInfo = ({ closeModal }) => {


  const { InputType } = usePasswordToggle();


    const [values, setValues] = useState(initialValues);



    const [error, setError] = useState(false);


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });

    };




    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.firstName === "" || values.lastName === "" || values.phoneNumber === "") {
            setError(true);

        }


        else {

            console.log(values);

            // adminChangePassword(values);

        }


    }


    return (
        <div className="s-acc-container">

            <div className="s-acc-title">Edit personal information</div>

            <div className="addr-inp-container">
                {
                    PersonalInfoInputs.map((input, index) => (
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
                <div className="s-acc-btns s-acc-add-btn" onClick={handleSubmit}>Save Information</div>
            </div>

        </div>
    )
}

export default EditPersonalInfo