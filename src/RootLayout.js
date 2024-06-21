import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './components/navigationbar/Navigationbar';
function RootLayout() {
  return (
    <div>
       <Navigationbar/>
       <Outlet/>
       
    </div>
  )
}

export default RootLayout
