import React from 'react';
import 'bulma/css/bulma.css';
import ProfilePhoto from '../css/Portfolio_Photo.jpeg';
import Github from '../css/GitHub.png';
import Linkedin from '../css/Linkedin.png';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <header className="hero-head is-transparent navfont">
      <div className="navbar is-size-5">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img className="photo" src={ProfilePhoto} alt="Profile" />
              <p> Alejandra </p>
            </div>
            <span class="navbar-burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div className="navbar-end">

              <div class="navbar-item px-3">
                <a href="#home"
                  onClick={() => handlePageChange('Header')} class="navbar-item is-active"
                  className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'}>
                  Home
                </a>

              </div>

              <div class="navbar-item px-3">
                <a
                  onClick={() => handlePageChange('Project')}
                  className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                  Projects
                </a>
              </div>

              <div class="navbar-item px-3">
                <a
                  href="#contactme"
                  onClick={() => handlePageChange('ContactMe')}
                  className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
                  Contact Me
                </a>

              </div>

              <span class="navbar-item ">
                <a>
                  <img class="photo" src={Github} />
                </a>
              </span>
              <span class="navbar-item">
                <a>
                  <img class="photo" src={Linkedin} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation; 