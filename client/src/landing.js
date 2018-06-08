import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
       <Jumbotron>
        <h1>Hello, world!</h1>
            <p>
                Welcome to our app, <img src="mvlogopng.png" alt="smooth" height={40}/>ovieFive!
            </p>
            <p>
                <Button bsStyle="info">About Us</Button>
            </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default Landing;
