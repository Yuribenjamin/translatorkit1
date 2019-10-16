import React from 'react';
import Darkmode from './darkmode/Darkmode';
import logo from '../src/logo.png'

// The function that toggles between themes
function Header() {
  return (
    <div className="header">
       <div className="header-logo">
            <img src={logo} alt="Transaltor-kit"></img>
            <h6>Free Translator Kit</h6>
        </div>
        <div className="header-title">
            <a className="editor-link" href="">Single Editor</a>
            <a className="editor-link" href="">Double Editor</a>
           <Darkmode/>
        </div>
    </div>
  );
}

export default Header;
