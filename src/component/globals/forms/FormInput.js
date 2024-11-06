import { useEffect, useRef, useState } from 'react';
import './form-input.css';
import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';



const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const [pwdMatch, setPwdMatch] = useState(true);



    const conRef = useRef();
    const tl = useRef();

    

    const {ref, cName, error, isNum, inputType, values, validate, errorMessage, isPassword, icon, handleChange, ...inputProps} = props;

    const [lowerPassed, setLowerPassed] = useState(false);
    const [numPassed, setNumPassed] = useState(false);
    const [upperPassed, setUpperPassed] = useState(false);
    const [lengthPassed, setLengthPassed] = useState(false);
    const [consPassed, setConsPassed] = useState(false);

    
    
    
    


    const handleTouched = (e) => {
        setTouched(true);
       
    }

    const handleFocus = () => {
        setFocused(true);
        
    }


    const isValid = inputProps.value !== "";
       

  

    useEffect(() => {
        if(inputProps.name === "password" || inputProps.name === "newPassword" || inputProps.name === "currentPassword"  || inputProps.name === "confirmNewPassword"){

            let val = inputProps.value;

            if(/[a-z]/.test(val)){
                setLowerPassed(true);
            }else{
                setLowerPassed(false);
            }

            if(/[A-Z]/.test(val)){
                setUpperPassed(true);
            }
            else{
                setUpperPassed(false);
            }

            if(/[0-9]/.test(val)){
                setNumPassed(true);
            }
            else{
                setNumPassed(false);
            }

            if(val.length >= 6){
                setLengthPassed(true);
            }
            else{
                setLengthPassed(false);
            }
        }
    }, [inputProps])





    useEffect(() => {
        if(lowerPassed && numPassed && upperPassed && lengthPassed){
            setConsPassed(true)
        }
        else{
            setConsPassed(false);
        }
    }, [lowerPassed, numPassed, upperPassed, lengthPassed, setConsPassed]);



    // useEffect(() => {
    //     if(lowerPassed && numPassed && upperPassed && lengthPassed){
    //         setConsPassed(true)
    //     }
    //     else{
    //         setConsPassed(false);
    //     }
    // }, [lowerPassed, numPassed, upperPassed, lengthPassed, setConsPassed]);



    useEffect(() => {
        if(inputProps.name === "confirmNewPassword"){
            if((values.newPassword !== "") && (inputProps.value !== values.newPassword)){
                setPwdMatch(false)
            }
            else{
                setPwdMatch(true);
            }
        }
        else{
            return;
        }
    }, [values, inputProps])



    useGSAP(() => {

        tl.current = gsap.timeline({ paused: true });

        if(!conRef.current){
            return;

        }else{

            tl.current.to(conRef.current, {
                display: "flex",
                top: 0,
                duration: 0.5,
                ease: Power1.easeInOut
            });
        }

    }, {dependencies: [conRef], scope: conRef})
    


   
    useEffect(() => {
        
       conRef.current && (focused || (!consPassed && isValid)) ? tl.current.play() : tl.current.reverse()
   
   
   
    }, [focused, consPassed, isValid]);




  return (
    <>
        { validate ?
            <div className="inp-control">

                {inputProps.hasOwnProperty('label') && <label className={`inp-lbl ${(touched && !isValid) || (error && !isValid) ? "lbl-error" : ""}`}>{inputProps.label}</label>}

                
                <input 
                    type={inputType} 
                    onChange={handleChange}
                    {...inputProps}
                    onBlur={handleTouched}
                    onFocus={handleFocus}
                    className={`${cName} ${(touched && !isValid) || (error && !isValid) ? "inp-error" : ""}`}
                    
                />
                

                {
                    inputProps.name === "email" ?
                    ((touched && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(inputProps.value)) || (touched && !isValid) || (error && !isValid) ? 
                    
                        <span className="inp-error-msg">{errorMessage}</span> : <div></div>
                    )
                    :
                    (touched && !isValid) || (error && !isValid) ? <span className="inp-error-msg">{errorMessage}</span> : <div></div>
                    
                }
        
               {isPassword && <span className={`password-toggle ${inputProps.hasOwnProperty('label') ? "haslbl" : "nolbl"}`}>{icon}</span>}
               {isPassword && (!consPassed && isValid ) && (pwdMatch) ? <span className="inp-error-msg">Please enter a valid password. Follow the hint below</span> : <div></div>}
               {inputProps.name === "confirmNewPassword" && !pwdMatch ? <span className="inp-error-msg">{errorMessage}</span> : <div></div>}

                
                {
                    isPassword &&
                    (
                        <div className="password-cons" ref={conRef}>

                            <span className={lowerPassed ? "pwd-cons passed" : "pwd-cons"}>1 lowercase character</span>
                            <span className={numPassed ? "pwd-cons passed" : "pwd-cons"}>1 number</span>
                            <span className={upperPassed ? "pwd-cons passed" : "pwd-cons"}>1 uppercase character</span>
                            <span className={lengthPassed ? "pwd-cons passed" : "pwd-cons"}>6 character minimum</span>
                        
                        </div>
                        
                    )
                }

            </div>

            :

            <div className="inp-control">

                <label className="inp-lbl">{inputProps.label}</label>

                <input 
                    type={inputType} 
                    onChange={handleChange}
                    {...inputProps}
                    className={cName}
                
                    
                />

            </div>


        }
    </>
  )
}

export default FormInput;