import React from 'react'
import './Navigationbar.css'
import {NavLink} from "react-router-dom"
import { HiUsers } from "react-icons/hi";
import { FaUsersSlash } from "react-icons/fa";

function Navigationbar() {

  // const activelink={
  //   color:"#EEF0F1",
  //   fontSize:"1.2rem",
  //   fontWeight:"bold",
  // }
  // const inactivelink={
  //   color:"#00000",
  //   fontSize:"1.2rem",
    
  // }

  return (
   
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link " to="/users"><HiUsers className='icon1'/>Users</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink nk className="nav-link " to="/removeusers" 
        // style={({isActive})=>{
        //     return isActive?activelink:inactivelink;}}
        >
        <FaUsersSlash className='icon2'/>Removeusers</NavLink>
        </li>
      </ul>
     
    </div>
    </div>
 
</nav>




   
  )
}

export default Navigationbar