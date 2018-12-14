import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class StudentCard extends React.Component {
  render() {
    return (
      <div className="item" style={{ margin: "2em" }}>
        <div className="ui three column centered grid">
          <h1>{this.props.student.name}</h1>
          <img src={this.props.student.photo} />
          <p>{this.props.student.age}</p>
          <Button
            onClick={() => this.props.selectStudent(this.props.student)}
            className="App-button"
          >
            {" "}
            More
          </Button>
        </div>
      </div>
    );
  }
}
export default StudentCard;
