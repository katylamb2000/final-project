import React from "react";

import API from "../API";

import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";

class AuthForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    if (this.props.location.pathname === "/signin") {
      const { username, password } = this.state;
      API.signin(username, password).then(data => {
        if (data.error) {
          console.log(data, data.error, "errrror");
          alert("The problem is with the sign in!");
        } else {
          this.props.authenticate(data);
        }
      });
    } else {
      const { username, password } = this.state;
      API.signup(username, password).then(data => {
        if (data.error) {
          alert("Wrong signup issue!");
        } else {
          this.props.authenticate(data);
        }
      });
    }
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <TextField
          id="usernameInput"
          label="username"
          value={username}
          onChange={handleChange}
          margin="normal"
          name="username"
        />
        <br />
        <TextField
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />
        <Button onClick={handleSubmit}>Log in</Button>
      </div>
    );
  }
}

export default AuthForm;
