import { createContext, useEffect, useRef, useState } from 'react';
import StoreManager from '../utils/StoreManager';



export const DataContext = createContext({});

export const DataProvider = ({ children }) => {



    const [user, setUser] = useState("Stout");


    //location
    const [currentCity, setCurrentCity] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [regionPending, setRegionPending] = useState(true);

    // const [addressess, setAddresses] = useState(null);


    // useEffect(() => {
    //     const adrs = JSON.parse(StoreManager.getHomeAddress('addresses'));

    //     if(adrs){
    //         setAddresses(adrs);
    //     }else{
    //         setAddresses([])
    //     }

    // }, [])




   



 



    return (
        <DataContext.Provider value={{
            currentCity, setCurrentCity,
            currentLocation, setCurrentLocation,
            currentState, setCurrentState,
            regionPending, setRegionPending,
            user, setUser,
                    

        }}
        >
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;