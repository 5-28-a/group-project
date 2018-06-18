import React from "react";
import { Button } from 'react-bootstrap';
import './index.css';
import './landing.css';

class Landing extends React.Component {

  render() {
    return(
      <div className="Landing">
        <img height={200} src="mvlogopng.png" alt="wtf" />
        <h1>MovieFive</h1>
        <p> Welcome to our app, MovieFive! Find out about the developers here.</p>
        <Button bsStyle="info" href="#about">About Us</Button>
      </div>
    );
  }
}

export default Landing;
