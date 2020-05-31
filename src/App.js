/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./App.css";



import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx'
import ProfileContent from './components/ProfileContent/MyPosts/ProfileContent.jsx'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="total">
        <Nav />
        <ProfileContent />
       
      </div>
        
      
        
      
    </div>
  );
};





export default App;
