import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../component/globals/footer/Footer';


const Layout = () => {

    const location = useLocation();

    const [bgColor, setBgColor] = useState("");

    useEffect(() => {

        const pathName = location.pathname;

        console.log(pathName);

        if(pathName === "/"){
            setBgColor("#337364");
        }

        if(pathName.includes ("/rhomboid/home-care")){
            setBgColor("#526354");
        }

        if(pathName.includes ("/rhomboid/pharma")){
            setBgColor("#006f80");
        }




    }, [location])

    return (

        <>
            <Outlet />
            <Footer
                bg={bgColor}
             />
        </>
    )
}

export default Layout