import React, { Component } from 'react';
import './index.css';
import './App.css';
import Navibar from './navbar.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar />
      <div className="AppContent"> Some Stuff </div>
      <Footer />
      </div>
    );
  }
}

export default App;
