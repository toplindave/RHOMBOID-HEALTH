const StoreManager = {
    
    setHomeAddress(data){
        localStorage.setItem("addresses", data);
    },

    getHomeAddress(){
        const addresses = sessionStorage.getItem('addresses');
        if (addresses) return addresses;
        else return null;
    },


}

export default StoreManager;