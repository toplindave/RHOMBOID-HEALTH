import React, { useState } from 'react'
import FormInput from '../forms/FormInput';




const EditEmail = ({ closeModal }) => {


    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");


    const handleChange = (e) => {
        setEmail(e.target.value);

    };




    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {

            setError(true);

        }


        else {

            console.log(email);

            // adminChangePassword(values);

        }


    }



    return (
        <>

            <div className="s-acc-container">

                <div className="s-acc-title">Edit email address</div>

                <div className="addr-inp-container">

                    <FormInput

                        inputType="text"
                        icon={null}
                        value={email}
                        handleChange={handleChange}
                        error={error}
                        cName="addr-input"
                        values={email}
                        label="Email"
                        name="email"
                        placeholder="Email"
                        isPassword={false}
                        isNum={false}
                        validate={true}
                        errorMessage="Please enter a valid email to continue."

                    />


                </div>

                <div className="s-acc-footer">
                    <div className="s-acc-btns s-acc-cancel-btn" onClick={closeModal}>Cancel</div>
                    <div className="s-acc-btns s-acc-add-btn" onClick={handleSubmit}>Change Email</div>
                </div>

            </div>

        </>
    )
}

export default EditEmail