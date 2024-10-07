import { createContext, useEffect, useRef, useState } from 'react';
import useGeolocation from '../hooks/useGeolocation';


export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [currentCity, setCurrentCity] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [currentState, setCurrentState] = useState("");


    const openKey = process.env.REACT_APP_OPEN_CAGE_ID;

    // get location
    useEffect(() => {




        function getLocationInfo(lat, long) {

            const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=${openKey}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {

                    if (data.status.code === 200) {

                        setCurrentCity(data.results[0].components.city);
                        setCurrentState(data.results[0].components.state);
                        setCurrentLocation(data.results[0].formatted);

                    } else {
                        console.log("Reverse geolocation request failed");
                    }


                })
                .catch((error) => console.error(error));


        }


        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {

            let crd = pos.coords;

            getLocationInfo(crd.latitude, crd.longitude);

        };


        function errors(err) {
            console.warn(`Error(${err.code}): ${err.message}`);
        };


        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then((result) => {

                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);

                    } else if (result.state === "denied") {

                    }



                });

        } else {
            console.log("Geolocation is not supported by this browser");

        }


    }, [openKey])






    return (
        <DataContext.Provider value={{
            currentCity, setCurrentCity,
            currentLocation, setCurrentLocation,
            currentState, setCurrentState

        }}
        >
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;