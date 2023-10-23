import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
// import HomeLayout from './pages/HomeLayout'
// import Register from './pages/Register'
import { HomeLayout, Landing, DashboardLayout, Error, Login, Register, Admin } from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Landing />
      },
{
    path: 'register',
    element: <Register />
  },

    {
    path: 'login',
    element: <Login />
  },

    {
    path: 'dashboard/admin',
    element: <DashboardLayout />
  }
    
    ]
  },

    

])

const App = () => {
  return (
 <RouterProvider router={router} />
    )
}

export default App
