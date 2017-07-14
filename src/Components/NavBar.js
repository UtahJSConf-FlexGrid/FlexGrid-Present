import React, { Component } from 'react';
import '../styles/NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-brand">Styling With Style</div>
        <div className="navButtons">
            <div className="navButton" onClick={() => { this.updateScreen(1)}}>Home</div>
            <div className="navButton" onClick={() => { this.updateScreen(2)}}>Flexbox</div>
            <div className="navButton" onClick={() => { this.updateScreen(3)}}>CSS Grid</div>
            <div className="navButton" onClick={() => { this.updateScreen(4)}}>Combo</div>
        </div>
      </div>
    );
  }
}

export default NavBar;
