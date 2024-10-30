import { createContext, useEffect, useRef, useState } from 'react';


export const DataContext = createContext({});

export const DataProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [currentCity, setCurrentCity] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [regionPending, setRegionPending] = useState(true);









    return (
        <DataContext.Provider value={{
            currentCity, setCurrentCity,
            currentLocation, setCurrentLocation,
            currentState, setCurrentState,
            regionPending, setRegionPending,
            user, setUser

        }}
        >
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;