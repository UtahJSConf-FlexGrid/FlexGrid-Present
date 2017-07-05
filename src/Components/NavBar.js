import React, { Component } from 'react';
import '../styles/NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-brand">Styling With Style</div>
        <div className="navButtons">
            <div className="navButton">FlexBox</div>
            <div className="navButton">CSS Grid</div>
            <div className="navButton">Combined</div>
        </div>
      </div>
    );
  }
}

export default NavBar;