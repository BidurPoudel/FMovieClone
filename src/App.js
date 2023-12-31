import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Genre from './pages/Genre'
import Country from './pages/Country'
import NoPage from './pages/NoPage'
import MovieDescription from './pages/movieDescription'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/country" element={<Country />} />
          <Route path='/movie/:id' element={<MovieDescription/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
  )
}

export default App
