import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class StudentsContainer extends React.Component {
  state = {
    allStudents: []
  };

  componentDidMount() {
    API.getAllStudents().then(resp => this.setState({ allStudents: resp }));
  }

  render() {
    return (
      <div className="ui three column grid" style={{ margin: "1em" }}>
        <h1>Students</h1>
        <br />

        {this.state.allStudents.map(student => (
          <StudentCard
            student={student}
            selectStudent={this.props.selectStudent}
          />
        ))}
      </div>
    );
  }
}
export default StudentsContainer;
