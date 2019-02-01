import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";

class NewCampForm extends React.Component {
  state = {
    title: "",
    location: "",
    photo: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div style={{ margin: "2em" }}>
         <h5 onClick={this.props.closeCampsForm}>x</h5> 
        <i class="close" onClick={this.props.closeCampsForm}>
          {" "}
        </i>

        <h1>Register a new camp</h1>
        <TextField
          id="TitleInput"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
          name="title"
        />
        <br />
        <TextField
          id="locationInput"
          label="Location"
          value={this.state.location}
          onChange={this.handleChange}
          margin="normal"
          name="location"
          type="location"
        />
        <br />
        <TextField
          id="photoInput"
          label="Photo"
          value={this.state.photo}
          onChange={this.handleChange}
          margin="normal"
          name="photo"
          type="photo"
        />
        <br />
        <TextField
          id="datesInput"
          label="Dates"
          value={this.state.dates}
          onChange={this.handleChange}
          margin="normal"
          name="dates"
          type="dates"
        />
        <br />
        <TextField
          id="datesInput"
          label="Dates"
          value={this.state.dates}
          onChange={this.handleChange}
          margin="normal"
          name="dates"
          type="dates"
        />
      </div>
    );
  }
}
export default NewCampForm;
