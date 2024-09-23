import React from 'react'
import HomeCareMainNav from '../component/divisions/home-care/navigations/HomeCareMainNav'
import { Outlet } from 'react-router-dom'
import GlobalTopNav from '../component/globals/navigations/GlobalTopNav'



const HomeCareLayout = () => {
  return (
    <>
        <GlobalTopNav />
        <HomeCareMainNav />
        <Outlet />
    </>
  )
}

export default HomeCareLayout