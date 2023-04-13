import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './About'
import Project from './Projects'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
