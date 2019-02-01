import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Calendar from "./Calendar";
import VideoComponent from "./VideoComponent";

class Resume extends React.Component {
  state = {
    viewCalender: false,
    enterTheClassroom: false
  };

  viewCalender = () => {
    this.setState({
      viewCalender: true
    });
  };

  handleAddPicClick = () => {
    this.props.RenderUploadProfilePictureForm();
  };

  enterTheClassroom = () => {
    this.setState({
      enterTheClassroom: true
    });
  };
  render() {
    return (
      <div className="ui three column centered grid">
        <h1>
          Congratulations on joining Karstaway, {this.props.teacher.username}
        </h1>
        {this.props.teacher.avatar ? (
          <img src={this.props.teacher.teacherAvatar} />
        ) : null}

        <p> Lets start building your profile!</p>

        <Button onClick={this.handleAddPicClick} className="App-button">
          {" "}
          Add profile picture
        </Button>
        {/*  
        <p>{this.props.teacher.nationality}</p>
        <Button onClick={this.viewCalender} className="App-button">
          {" "}
          Schedule a class
        </Button>
        {this.state.viewCalender ? <Calendar /> : null}
        <Button onClick={this.enterTheClassroom} className="App-button">
          {" "}
          Enter the classroom
        </Button>
        {this.state.enterTheClassroom ? <VideoComponent /> : null} */}
      </div>
    );
  }
}
export default Resume;