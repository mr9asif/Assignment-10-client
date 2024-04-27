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
