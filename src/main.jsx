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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element:<AddTourists></AddTourists>
      },
      {
        path:'/myList',
        element:<MyList></MyList>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
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
