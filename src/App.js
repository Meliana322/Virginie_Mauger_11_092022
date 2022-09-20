import './App.css'
import './style.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/404/404'
import { Routes, Route } from 'react-router-dom'
import Lodging from './pages/Lodging/Lodging'
import Footer from './components/Footer/Footer'

function App() {
  const [locationList, setLocationList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false)
        setLocationList(data)
      })
  }, [])

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home locationList={locationList} />} />
            <Route
              path="/lodging/:userId"
              element={<Lodging locationList={locationList} />}
            />
            <Route path="About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
