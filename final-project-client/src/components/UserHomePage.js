import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Calendar from "./Calendar";

class UserHomePage extends React.Component {
  render() {
    return (
      <div className="ui grid" style={{ margin: "2em" }}>
        {this.props.teacher(teacher => (
          <div>
            <h1>{teacher.name}</h1>
            <img className="user-profile-photo" src={teacher.photo} />
            <p>{teacher.nationality}</p>
            <p>{teacher.bio}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default UserHomePage;
