import React from 'react';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Cloud from './components/Cloud.jsx';
import Cyber from "./components/Cyber.jsx";
import FSD from "./components/FSD.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DataScienece from './components/DataScience.jsx';
import coursesData from './assets/courses.json'






const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children:[
      {
        path: "all",
        element: <Home alldata={coursesData.allData}/>
      },
      {
        path: "fullstackdevelopment",
        element: <FSD fsddata={coursesData.fsddata}/>
      },
      {
        path: "datascience",
        element: <DataScienece dsdata={coursesData.dsdata}/>
      },
      {
        path: "cybersecurity",
        element: <Cyber csdata={coursesData.csdata}/>
      },
      {
        path: "cloudcomputing",
        element: <Cloud clouddata={coursesData.clouddata}/>
      },
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
