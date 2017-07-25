import React, { Component } from 'react';
import logo from '../img/flexgrid-pxlogo.jpg';
import '../App.css';
import '../styles/Flex.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Flex and CSS Grid: Styling with Style</h2>
        </div>
        <p className="App-intro">
          Before we begin we'd like to ask a couple of <code>coder</code> questions...
        </p>
        <p>Who has heard of Flexbox? Used it?</p>
        <p>Who has heard of CSS Grid? Used it?</p>
        <p>Well, today Brian/Josh and I are going to descripe Flex and Grid. <br />We'll talk about their independent concepts and also how they can work well together. <br />Let's get started with Brian and the world of Flexbox.</p>
      </div>
    );
  }
}

export default Home;
