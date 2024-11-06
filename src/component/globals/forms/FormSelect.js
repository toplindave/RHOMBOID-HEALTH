import { useState } from 'react';
import './form-select.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const FormSelect = ({ options, error, onChange, value }) => {

    const [open, setOpen] = useState(false);
    // const [value, setSelectedState] = useState("");
    const [touched, setTouched] = useState(false);


    const handleChange = (e) => {
        onChange(e);
        setOpen(false);
    }


    const handleHover = () => {
        if(open && value === ""){
            setTouched(true);
            // setOpen(false);

        }
    }


    const isValid = value !== "";


  return (
    <>

        <div className="dropdown-container">
            <div 
                // className="dropdown-input"
                className={`dropdown-input ${(touched && !isValid) || (error && !isValid) ? "inp-error" : ""}`}

                onClick={() => setOpen(!open)}
                onMouseLeave={handleHover}
            >
                {isValid ? <div className='dropdown-value' >{value}</div> : <div className='dropdown-placeholder'>Select a state</div> }


               {open ? <FiChevronUp className='dropdown-icon'/> : <FiChevronDown className='dropdown-icon'/>}
                

            </div>
                        
            {(touched && !isValid) || (error && !isValid) ? <span className="inp-error-msg">Please select a state</span> : <div></div> }

            <div className={open ? "dropdown-options open" : "dropdown-options"}>
                {options.map((option, index) => (
                    <div 
                        className={open ? "option open" : "option"}
                        key={index}
                        onClick={handleChange}
                        
                    >
                        {option.name}
                    </div>
                ))}

            </div>
        </div>

    </>
  )
}

export default FormSelect