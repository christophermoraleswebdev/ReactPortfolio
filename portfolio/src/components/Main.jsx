import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ContactMe from './ContactMe'
import Projects from './Projects'
import React from 'react'



const Main = () => {

  return (
    <Routes>
      <Route      
            path='/' 
            element={<Home />}
      />
      <Route 
            path='/contactMe' 
            element={<ContactMe />}
      />
      <Route 
            path='/projects' 
            element={<Projects />}
      />
    </Routes>
  )
}

export default Main