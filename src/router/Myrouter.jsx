import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Outlet,Route, RouterProvider } from 'react-router-dom'
import Post from '../comp/Post'
import Profile from '../comp/Profile'
import Navbar from '../Navbar/Navbar'
import Comment from '../comp/Comment'
import Layout from '../outlet/Layout'
import UserForm from '../FormData/FormData'
const Myrouter = () => {
    const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<UserForm/>}>
            <Route path='comment' element={<Comment/>}/>
            <Route path='post' element={<Post/>}/>
            <Route path='profile' element={<Profile/>}/>
          </Route>
    ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Myrouter