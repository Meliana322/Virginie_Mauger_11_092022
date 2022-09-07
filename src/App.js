import './App.css'
import './style.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/404/404'
import { Routes, Route } from 'react-router-dom'
import Lodging from './pages/Lodging/Lodging'

function App() {
  const [locationList, setLocationList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('data.json')
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false)
        setLocationList(data)
      })
  }, [])

  //

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home locationList={locationList} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Lodging" element={<Lodging />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
