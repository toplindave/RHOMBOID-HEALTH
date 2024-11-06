import { useState } from 'react';






const usePasswordToggle = () => {

    // const location = useLocation();   
  
    const [visible, setVisibility] = useState(false);
   

    const handleVisibility = (e) => {
        
        setVisibility(!visible)
    }




    const Icon = (
        visible ? 
           
            <span 
                className='password-icon' 
                onClick={handleVisibility}
            >
                Hide
            </span>
            : 

            <span 
                className='password-icon'
                onClick={handleVisibility}
            >
                Show
            </span>
            
        );

    // const Icon = (
    //     visible ? 
    //         <FaEyeSlash 
    //             className={isDark ? 'password-icon iconLight' : 'password-icon iconDark'} 
    //             name=''
    //             onClick={handleVisibility}
    //         /> 
    //         : 
    //         <FaEye 
    //             className={isDark ? 'password-icon iconLight' : 'password-icon iconDark'}  
    //             onClick={handleVisibility}
    //         />
    // );



    const InputType = visible ? "text" : "password";

    return { InputType, Icon};
}

export default usePasswordToggle;