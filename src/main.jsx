import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Components/Home.jsx';
import Root from './Components/Root.jsx';
import AllTourists from './Components/AllTourists.jsx';
import AddTourists from './Components/AddTourists.jsx';
import MyList from './Components/MyList.jsx';
import About from './Components/About.jsx';
import Provider, {  } from './Components/Provider/Provider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Errorpage from './Components/Errorpage.jsx';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import Update from './Components/Update.jsx';
import SouthAsia from './Components/WorldTour/SouthAsia.jsx';
import America from './Components/WorldTour/America.jsx';
import Africa from './Components/WorldTour/Africa.jsx';
import MiddleEast from './Components/WorldTour/MiddleEast.jsx';
import CenteralAsia from './Components/WorldTour/CenteralAsia.jsx';
import Europe from './Components/WorldTour/Europe.jsx';

import Countries from './Components/WorldTour/Countries.jsx';
import AddCountry from './Components/WorldTour/AddCountry.jsx/AddCountry.jsx';
import Bangladesh from './Components/WorldTour/Bangladesh.jsx';
import ViewDetailsCountry from './Components/WorldTour/ViewDetailsCountry.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allTourists',
        element:<AllTourists></AllTourists>
      },
      {
        path:'/addTourists',
        element:<PrivetRoute>
        <AddTourists></AddTourists>
        </PrivetRoute>
      },
      {
        path:'/myList',
        element:<PrivetRoute>
        <MyList></MyList>
        </PrivetRoute>
      },
      {
        path:`/viewDetails/:id`,
        element:<PrivetRoute>
        <ViewDetails></ViewDetails>
        </PrivetRoute>
      },
      {
        path:`/Details/:id`,
        element:
        <ViewDetailsCountry></ViewDetailsCountry>
      
      },
      {
        path:`/update/:id`,
        element:<PrivetRoute>
        <Update></Update>
        </PrivetRoute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/countries',
        element:<Countries></Countries>
      },
      {
        path:'/countries/Bangladesh',
        element:<America></America>
      },
      {
        path:'/countries/Thailand',
        element:<SouthAsia></SouthAsia>
      },
      {
        path:'/countries/Indonesia',
        element:<Europe></Europe>
      },
      {
        path:'/countries/Malaysia',
        element:<Africa></Africa>
      },
      {
        path:'/countries/Vietnam',
        element:<MiddleEast></MiddleEast>
      },
      {
        path:'/countries/Combodia',
        element:<CenteralAsia></CenteralAsia>
      },
      {
        path:'/addcountry',
        element:<AddCountry></AddCountry>
      },
      {
        path:'/countries',
        element:<Countries></Countries>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
