import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";
import API from "../API";

class UploadProfilePictureForm extends React.Component {
  state = {
    image: null
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleFile(e) {
    this.setState({ image: e.target.file });
    console.log(e.target.file);
  }

  UploadProfilePicture = () => {
    const { image } = this.state;
    API.UploadProfilePicture(image).then(data => {
      if (data.error) {
        alert("Picture upload failed");
      } else {
        console.log(image, "should be working now.");
        // this.props.selectCV(data);
        // this.props.saveNewTeacher(data);
        // this.props.closePicForm();
        this.props.teacher();
      }
    });
  };

  render() {
    return (
      <div style={{ margin: "2em" }}>
        <h5 onClick={this.props.close}> x </h5>
        <h1>Upload Profile Picture</h1>

        <form>
          {/* onSubmit={this.handleSubmit} */}
          <label> Profile Picture</label>
          <input type="file" onSubmit={this.handleFile} />
          <Button
            color="violet"
            onClick={() => this.UploadProfilePicture(this.state.image)}
          >
            Save
          </Button>
        </form>

        <br />
      </div>
    );
  }
}
export default UploadProfilePictureForm;
