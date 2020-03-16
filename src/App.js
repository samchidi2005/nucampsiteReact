import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">    {/* The tell sign of this Component(Navbar) is its' first letter "If it's capitalized, then it's a React" or "If it's a lowercase, then it's JSX" */} 
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

export default App;
