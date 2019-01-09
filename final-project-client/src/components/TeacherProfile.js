import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Calendar from "./Calendar";

class TeacherProfile extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  //   bookLesson = () => {
  //       this.setState({lesson: })
  //   }
  render() {
    return (
      <div className="ui grid" style={{ margin: "2em" }}>
        <h1>{this.props.teacher.name}</h1>
        <img src={this.props.teacher.photo} />
        <p>{this.props.teacher.nationality}</p>
        <p>{this.props.teacher.bio}</p>
        <Button
          onClick={() => this.props.showTeacherResume(this.props.teacher)}
          className="App-button"
        >
          More
        </Button>
      </div>
    );
  }
}
export default TeacherProfile;
