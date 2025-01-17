import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Container/Layout/Layout'
import BlogList from './Container/BlogList/BlogList'
import BlogCreate from './Container/BlogCreate/BlogCreate'
import Login from './Container/Login/Login'
import { createContext, useEffect } from 'react'
import { useState } from 'react'

export const userCtx = createContext(); 

function App() {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    photoUrl: "",
    uid: "",
  })

  useEffect(()=>{
    const userDet = localStorage.getItem("UserDetails");
    if(userDet){
      const userDetails = JSON.parse(userDet);
      setUser(userDetails);
    }
  },[])

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children:[
        {
          path: "/home",
          element: <BlogList />
        },
        {
          path: "/create",
          element: <BlogCreate />
        },
      ]
    },
    {
      path: "/",
      element: <Login />

    }
  ])
  return (
    <userCtx.Provider value={{user,setUser}}>
      <RouterProvider router={router} />
    </userCtx.Provider>
  )
}

export default App;
