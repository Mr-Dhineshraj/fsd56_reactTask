import React from 'react';
import './index.css';
import Home from './components/Home.jsx';
import Cloud from './components/Cloud.jsx';
import Cyber from "./components/Cyber.jsx";
import FSD from "./components/FSD.jsx";
import DataScience from "./components/DataScience.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { fsddata,csdata,dsdata,clouddata } from './assets/data.js';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/fullstackdevelopment",
    element: <FSD data={fsddata} />
  },
  {
    path: "/cybersecurity",
    element: <Cyber csdata={csdata} />
  },
  {
    path: "/career",
    element: <Cloud clouddata={clouddata} />
  },
  {
    path: "/datascience",
    element: <DataScience dsdata={dsdata} />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
