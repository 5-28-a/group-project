import React, { Component } from 'react';
import Search from './Search';
import { Provider } from 'react-redux';
import Result from './Result';
import './App.css';
import { store } from './Result';

class App extends Component {

  render() {
    return(
      <div>
        <Provider store={store}>
          <Search />
        </Provider>
          <Result />
      </div>
    );
  }
}

export default App;
