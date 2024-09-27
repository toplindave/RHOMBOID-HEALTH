import React from 'react'
import HomeCareMainNav from '../component/divisions/home-care/navigations/HomeCareMainNav'
import { Outlet } from 'react-router-dom'
import GlobalTopNav from '../component/globals/navigations/GlobalTopNav'



const HomeCareLayout = () => {
  return (
    <div style={{background: "#fff"}}>
        <GlobalTopNav />
        <HomeCareMainNav />
        <Outlet />
    </div>
  )
}

export default HomeCareLayout