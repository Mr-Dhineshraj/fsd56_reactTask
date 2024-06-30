import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='container'>
      <ul className="nav nav-tabs d-flex justify-content-center">
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/all"
          >
            All
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/fullstackdevelopment"
          >
            Full Stack Development
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/datascience"
          >
            Data Science
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/cybersecurity"
          >
            Cyber Security
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/cloudcomputing"
          >
            Cloud Computing
          </NavLink>
        </li>
      </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar