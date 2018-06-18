import React from "react";
import './login.css';

class Login extends React.Component {

  render() {
    return(
      <div className="Login">
        <h1>Login</h1>
        <form action="/login" method="post">
          Username:
          <input type="text" name="username"></input>
          Password:
          <input type="text" name="password"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Login;
