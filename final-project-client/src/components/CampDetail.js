import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TeachersContainer from "./TeachersContainer";
import VideoComponent from "./VideoComponent";

class CampDetail extends React.Component {
  // state = {
  //   campTeachers: []
  // }

  render() {
    return (
      <Fragment>
        <div className="ui grid" style={{ margin: "2em" }}>
          <div className="ui three wide column">
            <h1>{this.props.camp.title}</h1>
            <img alt={this.props.camp.location} src={this.props.camp.photo} />
            <p>{this.props.camp.location}</p>
            <h5>Teachers</h5>

            {this.props.camp.teachers.map(teacher => (
              <div>
                <Button onClick={() => this.props.viewTeacher(teacher)}>
                  {teacher.name}
                </Button>
                <img className="teacher-profile-photo" src={teacher.photo} />
              </div>
            ))}

            <h5>Students signed up for this camp</h5>
            {this.props.camp.students.map(student => (
              <div>
                <Button onClick={() => this.props.viewStudent(student)}>
                  {student.name}
                </Button>
                <img className="student-profile-photo" src={student.photo} />
              </div>
            ))}

            {/* <TeachersContainer teachers={this.props.camp.teachers} /> */}

            {/* <div>
           

            <StudentsContainer students={this.props.camp.students} />
          </div> */}

            {/* {this.props.camp.students.map(student => (
            
          ))} */}

            <Button
              onClick={() => this.props.handleBackClick}
              className="App-button"
            >
              Back
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CampDetail;
