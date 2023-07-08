import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import ContactMe from './ContactMe'
import Projects from './Projects'
import React from 'react'
import { AnimatePresence } from "framer-motion"


const Main = () => {
      const location = useLocation()

      return (
            <AnimatePresence>
                  <Routes location={location} key={location.pathname}>
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
            </AnimatePresence>
      )
}

export default Main