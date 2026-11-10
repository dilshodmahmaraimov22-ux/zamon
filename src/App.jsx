import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Tour from './Pages/Tour/Tour'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
                     <Routes>
                             <Route>
                                     <Route path='/home' element={<Home/>}/>
                                     <Route path='/about' element={<About/>}/>
                                     <Route path='/tour' element={<Tour/>}/>
                                     <Route path='contact' element={<Contact/>}/>
                             </Route>
                     </Routes>
      </BrowserRouter>
    </>
  )
}

export default App