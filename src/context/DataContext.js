import { createContext, useEffect, useRef, useState } from 'react';


export const DataContext = createContext({});

export const DataProvider = ({ children }) => {


    const [user, setUser] = useState("Stout");


    //location
    const [currentCity, setCurrentCity] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [regionPending, setRegionPending] = useState(true);



    
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

    const [progress, setProgress] = useState(0);
    







    return (
        <DataContext.Provider value={{
            currentCity, setCurrentCity,
            currentLocation, setCurrentLocation,
            currentState, setCurrentState,
            regionPending, setRegionPending,
            user, setUser,
            message, setMessage,
            closeModal,
            modalOpen, setModalOpen,
            confirmation, setConfirmation,
            isNavigate, setIsNavigate,
            navDestination, setNavDestination,
            doubleBtn, setDoubleBtn,
            progress, setProgress

        }}
        >
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;