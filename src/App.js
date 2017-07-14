import React, { Component } from 'react';
import logo from './img/flexgrid-pxlogo.jpg';
// import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js';
import Flex from './Components/Flex.js';
import Grid from './Components/Grid.js';
import Combo from './Components/Combo.js';
import './App.css';
import './styles/NavBar.css'

class App extends Component {
  constructor(props) {
  super(props)
    this.state = {
      screenIndex: 1
    }
  }

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex
    });
  }

  render() {

    let ActiveScreen
    // <Sidebar posts={this.state.posts.posts}/>
    if(this.state.screenIndex === 1) {
      ActiveScreen = <Home />
      // ActiveScreen = <Blog posts={this.state.posts.posts}/>
    }
    if(this.state.screenIndex === 2) {
      ActiveScreen = <Flex />
    }
    if(this.state.screenIndex === 3) {
      ActiveScreen = <Grid />
    }
    if(this.state.screenIndex === 4) {
      ActiveScreen = <Combo />
    }

    return (
      <div className="App">
        {/*<NavBar />*/}
        <div className="navbar">
          <div className="logo-brand">Styling With Style</div>
          <div className="navButtons">
              <div className="navButton" onClick={() => { this.updateScreen(1)}}>Home</div>
              <div className="navButton" onClick={() => { this.updateScreen(2)}}>Flexbox</div>
              <div className="navButton" onClick={() => { this.updateScreen(3)}}>CSS Grid</div>
              <div className="navButton" onClick={() => { this.updateScreen(4)}}>Combo</div>
          </div>
        </div>
        <div>
          {ActiveScreen}
        </div>
      </div>
    );
  }
}

export default App;
