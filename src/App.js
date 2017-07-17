import React, { Component } from 'react';
import logo from './img/flexgrid-pxlogo.jpg';
import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js';
import Flex from './Components/Flex.js';
import Grid from './Components/Grid.js';
import Combo from './Components/Combo.js';
import './App.css';
import './styles/NavBar.css'

class App extends Component {
  constructor(props) {
    
    super(props)
    this.updateScreen = this.updateScreen.bind(this)
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
        <NavBar updateScreen={this.updateScreen} active={this.state.screenIndex}/>
        <div>
          {ActiveScreen}
        </div>
      </div>
    );
  }
}

export default App;
