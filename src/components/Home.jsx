import React from 'react'
import { NavLink } from 'react-router-dom';
import { allData } from '../assets/data'


function Home() {
  
 
    return (
    <>
      <div className='container'>
        <ul className="nav nav-tabs d-flex justify-content-center">
          <li className="nav-item">
            <NavLink 
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
              to="/"
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
              to="/career"
            >
              Cloud Computing
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {allData.map((item, index) => (
          <div className="card m-5" style={{ width: "18rem" }} key={index}>
            <img src={item.imgLink} className="card-img-top" alt="fsd img" />
            <div className="card-body">
              <h4 className="card-text">{item.headline}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home