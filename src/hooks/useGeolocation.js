import { useState, useEffect } from "react";


const useGeolocation = () => {

    const [city, setCity] = useState();
    const [location, setLocation] = useState();
    const [state, setState] = useState();

    const openKey = process.env.REACT_APP_OPEN_CAGE_ID;
    

    useEffect(() => {




        function getLocationInfo(lat, long){

            const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=${openKey}`;
        
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
             
              if(data.status.code === 200){
              
                setCity(data.results[0].components.city);
                setState(data.results[0].components.state);
                setLocation(data.results[0].formatted);
        
              }else{
                console.log("Reverse geolocation request failed");
              }
    
    
            })
            .catch((error) => console.error(error));
    
    
        }
    
    
        let options = {    
            enableHighAccuracy:  true,
            timeout: 5000,
            maximumAge: 0
        };
    
        function success(pos){
    
            let crd = pos.coords;
            
            getLocationInfo(crd.latitude, crd.longitude);
    
        };
    
    
        function errors(err){
            console.warn(`Error(${err.code}): ${err.message}`);
        };


        if(navigator.geolocation){
            navigator.permissions
            .query({ name: "geolocation"})
            .then((result) => {
            
                if(result.state === "granted"){
                navigator.geolocation.getCurrentPosition(success, errors, options);
                }else if(result.state === "prompt"){
                navigator.geolocation.getCurrentPosition(success, errors, options);

                }else if(result.state === "denied"){

                }



            });

        }else{
            console.log("Geolocation is not supported by this browser");

        }


    }, [openKey])




    return { city, state, location}
    
}

export default useGeolocation;