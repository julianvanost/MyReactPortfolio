import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/navbar/index.js'
import Footer from './components/footer/index.js'
import About from './components/about/index.js'
// import Contact from './components/contact/index.js'
// import Portfolio from './components/portfolio/index.js'
import Head from './components/head/index.js'
import './App.css'

let name = 'Julian Van Ost'

const App = () => {
  return (
    <html lang="en-us">
      <Head />
      <Navbar person={name} />
      <About />
      <Footer />
    </html>
  )
}

export default App;
