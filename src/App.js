import React from 'react'
import Navbar from './components/Navbar'
import About from './views/About'
import Footer from './components/Footer'
// import Home from './views/Home'
// import Portfolio from './views/Portfolio'
// import Contact from './views/Contact'
import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom"
let name = 'Julian Van Ost'

const App = () => {
  return (
    <html lang="en-us">
      <Navbar person={name} />
      <About />
      {/* <Footer /> commented out to get rid of annoyance temporarily*/}
    </html>
  )
}

export default App;
