import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class StudentCard extends React.Component {
  render() {
    return (
      <div className="item" style={{ margin: "2em" }}>
        <div className="ui three column centered grid">
          <h1>{this.props.student.username}</h1>
          
          <Button
            onClick={() => this.props.viewStudent(this.props.student)}
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
