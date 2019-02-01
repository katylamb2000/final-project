import React from "react";
import { Segment, Input } from 'semantic-ui-react'
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
      <Segment raised attached='top'>
        <h1 attached="left">Teachers</h1>
        <Input placeholder='Search teachers...' attached="right" />

        </Segment>
        {this.state.allTeachers.map(teacher => (

          
          <TeacherProfile
            teacher={teacher}
            showTeacherPage={this.props.showTeacherPage}
            // showTeacherResume={this.props.showTeacherResume}
          />
        ))}
      </div>
    );
  }

}
export default TeachersContainer;
