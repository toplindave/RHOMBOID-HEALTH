import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../component/globals/footer/Footer';


const Layout = () => {
    return (

        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout