import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'

function App() {

  return (
    <div className='app'>
      <div className='app-header'>
        <Header />
      </div>

      <div className='app-main'>
        <Main />
      </div>
    </div>
  )
}

export default App
