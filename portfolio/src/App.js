//import './App.css';
import Navigation from './components/Navigation';
import Header from './components/pages/Header';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import 'bulma/css/bulma.css';
import '../src/css/style.css';
import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Header');

  const renderPage = () => {
    if (currentPage === 'Header') {
      return <Header />;
    } if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }if (currentPage === 'Project') {
      return <Project />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="color hero is-fullheight">
     
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
    
}

