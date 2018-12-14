import React from "react";

import TeacherProfile from "./TeacherProfile";
import API from "../API";

class TeachersContainer extends React.Component {
  state = {
    allTeachers: []
  };
  componentDidMount() {
    API.getAllTeachers().then(resp => this.setState({ allTeachers: resp }));
  }

  render() {
    return (
      <div className="ui four column grid" style={{ margin: "2em" }}>
        <h1>Teachers</h1>
        {this.state.allTeachers.map(teacher => (
          <TeacherProfile
            teacher={teacher}
            showTeacherResume={this.props.showTeacherResume}
          />
        ))}
      </div>
    );
  }
}
export default TeachersContainer;
