import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h1>Portfolio</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src="../../public/assets/images/profilePicture.jpg" alt='profile' alt-text="profile" className="img-thumbnail"></img>
            </div>
            <div className="col-md-9">
              <p className="">
                <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1"
                  width="32" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                  </path>
                </svg><a className="largerLinks" target="_blank" rel='noopener noreferrer' href="https://github.com/julianvanost">My Github Page</a>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
                <a className="largerLinks" target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/julian-b-van-ost-ab3a5262">My
                Linkedin Page</a>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M21 9c.552 0 1 .449 1 1v9c0 .551-.448 1-1 1h-18c-.552 0-1-.449-1-1v-9c0-.551.448-1 1-1h18zm0-2h-18c-1.657 0-3 1.343-3 3v9c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3v-9c0-1.657-1.343-3-3-3zm-12-5c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm10.5 9h-15c-.276 0-.5.224-.5.5s.224.5.5.5h15c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 3h-15c-.276 0-.5.224-.5.5s.224.5.5.5h15c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 3h-15c-.276 0-.5.224-.5.5s.224.5.5.5h15c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z" />
                </svg>
                <a className="largerLinks" target="_blank" rel='noopener noreferrer' href="https://www.returntoworksolutions.com/julian-van-ost">My Web
                Portfolio</a>
              </p>
              <p className="text-center">
                <img className="logoCryp" src="./ci-logo.png" alt="CrypIt Logo"></img>
                <p>
                  <a className="text center largerLinks" target="_blank" rel='noopener noreferrer' href="https://preyx.github.io/bcprj1-api/">
                    <p>Our Team Application, CrypIt</p>
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Portfolio