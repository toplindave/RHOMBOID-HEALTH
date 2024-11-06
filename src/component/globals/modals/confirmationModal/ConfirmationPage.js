import React, { useContext } from 'react'
import { MdError } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { DataContext } from '../../../../context/DataContext';
import './confirmationPage.css';
import { useNavigate } from 'react-router-dom';










const ConfirmationPage = (props) => {

    // const { handleAction } = props;



    const { message, doubleBtn, setConfirmation, isNavigate, navDestination } = useContext(DataContext);



    const navigate = useNavigate();



    const handleOk = () => {
        setConfirmation(false);
        console.log("ok");
        // if(isNavigate){
        //     navigate(navDestination);
        // }
    }




  return (


    <div className='confirmation-background'>
            
        <div 
            className={message.type === "error" ? "error-confirmation-container" :  "confirmation-container"}
        >
            
            <div className="confirmation-header">
                {/* <div className="confirmation_title">Add Staff</div> */}
                <div className="confirmation-return" onClick={() => setConfirmation(false)}>Back</div>
            </div>
            

            <div className="confirmation-body">
                
                <div className='confirmation-page'>
                    <div className="con-icon">
                        {
                            message.type === "error" ? 
                            <MdError className='con-icons con-error-icon' />
                            :
                            <IoMdCheckmarkCircle className='con-icons con-success-icon' />
                        }

                    </div>

                    <div className={`con-body ${message.type === "error" ? "err-msg" : "success-msg"}`}>
                        {/* An admin is successfully created. A confirmation email has been sent to their email address */}
                        { message.body }
                    </div>


                    {
                        doubleBtn ? 
                        <div className="con-btn-flex">

                            <div className='con-btns con-error-btn' onClick={() => setConfirmation(false)}>Back</div>

                            <div className='con-btns con-success-btn'
                                onClick={handleOk}
                            >
                                Ok
                            </div>

                        </div>


                        :

                        <div className="con-btn">
                            {
                                message.type === "error"  ? 
                                <div className='con-btns con-error-btn' onClick={() => setConfirmation(false)}>Back</div>
                                :
                                <div className='con-btns con-success-btn'
                                    onClick={handleOk}
                                >
                                    Ok
                                </div>

                            }
                        </div>
                    }

                </div>


            </div>
            {/* confirmation body */}

        

        </div>

    </div>


   


  )
}

export default ConfirmationPage;