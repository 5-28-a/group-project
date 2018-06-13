import React, { Component } from 'react';
import './index.css';
import Navibar from './navbar.js';
import Footer from './footer.js';
import Route from './Route';
import Landing from './Landing';
import About from './About';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Navibar />
      <div className="AppContent">
      <Route />
      <About />
      <Landing />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
