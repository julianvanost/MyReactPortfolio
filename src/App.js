import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './views/About'
import Footer from './components/Footer'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom"

// TODO: Need to fix NavBar to add reactRouter or add it here to link to Portfolio and Contact pages

let name = 'Julian Van Ost'

const App = () => {
  return (
    <div>
      <Navbar person={name} />
      <About />
      <Footer />
    </div>
  )
}

export default App;
