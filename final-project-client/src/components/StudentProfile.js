import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Calendar from "./Calendar";

class StudentProfile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.student.name}</h1>
          <img
            className="student-profile-photo"
            src={this.props.student.photo}
          />
          <p>{this.props.student.age}</p>
          <p>{this.props.student.bio}</p>
        </div>
      </div>
    );
  }
}

export default StudentProfile;
