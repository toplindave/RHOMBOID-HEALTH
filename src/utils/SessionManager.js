const SessionManager = {

    getRegion(){
        const region = sessionStorage.getItem('region');
        if (region) return region;
        else return null;
    },

    setRegion(city, state){
        // sessionStorage.setItem('firstName', firstName);

        const region = `${city}, ${state}`;
        sessionStorage.setItem('region', region);
      
       
    },
    setAddress(address){
   
        sessionStorage.setItem('addr', address);
      
       
    },

    removeRegion(){
        sessionStorage.removeItem('region');
        
    },
    removeaddress(){
        sessionStorage.removeItem('addr');
        
    },


}

export default SessionManager;