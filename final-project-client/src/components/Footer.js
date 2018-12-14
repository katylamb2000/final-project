import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Footer extends React.Component {
  handleClick = () => {
    this.props.renderNewCampForm();
  };

  handleTeacherClick = () => {
    this.props.renderNewTeacherForm();
  };

  render() {
    return (
      <footer
        position="absolute"
        color="green"
        className="ui center aligned menu"
      >
        <Button className="App-button" onClick={this.handleClick}>
          Add a camp
        </Button>
        <Button className="App-button" onClick={this.handleTeacherClick}>
          Register as a teacher
        </Button>
      </footer>
    );
  }
}
export default Footer;
