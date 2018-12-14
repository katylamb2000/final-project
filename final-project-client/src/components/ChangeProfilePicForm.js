import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/TextField";
import API from "../API";

class ChangeProfilePicForm extends React.Component {
  state = {
    image: null
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  // };

  handelChangeImage = e => {
    const file = e.target.files[0];

    this.setState({ image: file });
    console.log(e);
    console.log(this.state.image);
  };

  UploadProfilePicture = e => {
    const { image } = this.state;
    API.ChangeProfilePicture(image).then(data => {
      if (data.error) {
        alert("Picture upload failed");
      } else {
        console.log(image, "should be working now.");
        // this.props.selectCV(data);
        // this.props.saveNewTeacher(data);
        // this.props.closePicForm();
      }
    });
  };

  render() {
    return (
      <div style={{ margin: "2em" }}>
        <h5 onClick={this.props.close}> x </h5>
        <h1>Upload Profile Picture</h1>

        {/* onSubmit={this.handleSubmit} */}

        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={this.handelChangeImage}
        />

        <Button
          type="submit"
          onClick={() => this.UploadProfilePicture(this.state.image)}
        >
          Save
        </Button>

        <br />
      </div>
    );
  }
}
export default ChangeProfilePicForm;
