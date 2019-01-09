import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";
import API from "../API";

class NewTeacherForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  registerTeacher = () => {
    const { username, password } = this.state;
    API.registerNewTeacher(username, password).then(data => {
      if (data.error) {
        alert("!");
      } else {
        // this.props.selectCV(data);
        // this.props.saveNewTeacher(data);
        this.props.showTeacher(data);
      }
    });
  };

  render() {
    const { name, nationality, bio, skills, photo } = this.state;

    return (
      <div style={{ margin: "2em" }}>
        <h5 onClick={this.props.close}> x </h5>
        <h1>Register as new teacher</h1>

        <TextField
          id="NameInput"
          label="Username"
          value={this.state.username}
          onChange={this.handleChange}
          margin="normal"
          name="username"
        />
        <br />

        <br />
        <TextField
          id="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />

        <Button color="violet" onClick={() => this.registerTeacher()}>
          Save
        </Button>

        <br />
      </div>
    );
  }
}
export default NewTeacherForm;
