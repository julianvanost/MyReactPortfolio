import React from 'react'
import './navbar.css'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-1 h1">Julian Van Ost</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="./index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <h1>{props.person}</h1>
    </nav>
  )
}

export default Navbar