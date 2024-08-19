import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
// import Read from './pages/Read';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/create" element={<Create/>}></Route>
    <Route path="/update/:id" element={<Update/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
