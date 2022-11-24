import React from 'react';
import 'bulma/css/bulma.css';
import ProfilePhoto from '../css/Portfolio_Photo.jpeg';
import Github from '../css/GitHub.png';
import Linkedin from '../css/Linkedin.png';
//import GithubLink from "https://github.com/alejandraquintero018"; 


function Navigation({ currentPage, handlePageChange }) {
  return (
    <header className="hero-head is-transparent navfont">
      <div className="navbar is-size-5">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img className="photo is-large" src={ProfilePhoto} alt="Profile" />
              <p className='navfont' > Alejandra </p>
            </div>
            <span class="navbar-burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">

              <div className="navbar-item px-3 navfont">
                <a href="#home"
                  onClick={() => handlePageChange('Header')} class="navbar-item is-active navfont"
                  className={currentPage === 'Header' ? 'nav-link active' : 'nav-link'}>
                  Home
                </a>

              </div>

              <div class="navbar-item px-3">
                <a href="#about"
                  onClick={() => handlePageChange('About')} class="navbar-item is-active"
                  className={currentPage === 'About' ? 'nav-link active navfont' : 'nav-link'}>
                  About
                </a>

              </div>

              <div class="navbar-item px-3">
                <a href="#projects"
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
              
                <a href='https://github.com/alejandraquintero018'>
                  <img class="photo" alt="github icon"  src={Github} />
                </a>
              </span>
              {/* href={GithubLink} */}
              <span class="navbar-item">
                <a href="https://www.linkedin.com/in/alejandra-quintero-a96669165/">
                  <img class="photo" alt='linkedin icon' src={Linkedin} />
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