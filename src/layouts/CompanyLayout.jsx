import React from 'react'
import TopNav from '../component/company/nav/TopNav'
import MainNav from '../component/company/nav/MainNav'
import { Outlet } from 'react-router-dom'


const CompanyLayout = () => {
  return (
    <>
        <TopNav />
        <MainNav />
        <Outlet />
    
    </>
  )
}

export default CompanyLayout;