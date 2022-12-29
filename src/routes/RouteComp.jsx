import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../componenets/about us/About'
import Blog from '../componenets/blogs/Blog'
import Contact from '../componenets/contact/Contact'
import Home from '../componenets/home/Home'
import Login from '../componenets/Login/Login'
import Signup from '../componenets/signUp/Signup'


const RouteComp = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/contacts' element={<Contact/> } />
        <Route path='/blogs' element={<Blog/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/signUp' element={<Signup /> } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default RouteComp
