import React from "react";

class Error1 extends React.Component {
    render() {
      return(
      <div>
        <h1>Registration Error!</h1>
        <h4>That User Name has already been registered! Lets <a href="#signup">head back and try to pick a different one,</a> shall we?</h4>
      </div>
    );
  }
}

export default Error1;
