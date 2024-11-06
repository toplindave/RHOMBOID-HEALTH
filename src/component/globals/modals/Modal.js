

import './modal.css';







const Modal = ({ modalBody, modalType, closeModal }) => {

  


  return (
    <>
        <div className='modal-background'>
            
            <div 
              className={modalType === "form" ? "form-modal-container"  : modalType === "error" ? "error-modal-container" : modalType === "form-address" ? "form-addr-modal-container" : "modal-container"}
            >
                
                <div className="modal_header">
                    {/* <div className="modal_title">Add Staff</div> */}
                    <div className="modal_return" onClick={closeModal}>Back</div>
                </div>
                

                <div className="modal_body">
                    
                  {modalBody}


                </div>


               

            </div>

        </div>
    
    </>
  )
}

export default Modal