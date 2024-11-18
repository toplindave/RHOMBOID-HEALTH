import { createContext, useEffect, useRef, useState } from 'react';



export const HomeCareContext = createContext({});

export const HomeCareProvider = ({ children }) => {



    
    
    //confirmation
    const [confirmation, setConfirmation] = useState(false);
    const [isNavigate, setIsNavigate] = useState(false);
    const [navDestination, setNavDestination] = useState("");
    const [doubleBtn, setDoubleBtn] = useState(false);
    

    //modals       
    const [modalOpen, setModalOpen] = useState(false);

    const [message, setMessage] = useState({
        body: "",
        type: ""
    });


    const closeModal = () => {
        setModalOpen(false);
    }


    //indicator

    const [selectedLocation, setSelectedLocation] = useState("");
    const [progress, setProgress] = useState(0);
    const [adultCardValues, setAdultCardValues] = useState(null);
    const [nannyCardValues, setNannyCardValues] = useState(null);
    const [babysitterCardValues, setBabysitterCardValues] = useState(null);

    const handleProgressIndicator = (value) => {
        setProgress(value);
    };
    

   



 



    return (
        <HomeCareContext.Provider value={{
           
            message, setMessage,
            closeModal,
            modalOpen, setModalOpen,
            confirmation, setConfirmation,
            isNavigate, setIsNavigate,
            navDestination, setNavDestination,
            doubleBtn, setDoubleBtn,

            progress, setProgress,
            handleProgressIndicator,
            adultCardValues, setAdultCardValues,
            nannyCardValues, setNannyCardValues,
            babysitterCardValues, setBabysitterCardValues,
            selectedLocation, setSelectedLocation

        }}
        >
            {children}
        </HomeCareContext.Provider>
    )

}

export default HomeCareContext;