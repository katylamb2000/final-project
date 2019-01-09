import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Calendar from "./Calendar";
import ProfilePicture from "./ProfilePicture";
import CampsContainer from "./CampsContainer";
import CoverPhoto from "./CoverPhoto";
import ChangeProfilePicForm from "./ChangeProfilePicForm";

class Home extends React.Component {
  state = {
    changeProfilePicture: false
  };

  changeProfilePicture = () => {
    this.setState({ changeProfilePicture: true });
  };

  closeProfilePictureForm = () => {
    this.setState({ changeProfilePicture: false });
  };

  render() {
    return (
      <div className="parent">
        <CoverPhoto />
        <ProfilePicture
          changeProfilePicture={this.changeProfilePicture}
          user={this.props.user}
          closeProfilePictureForm={this.closeProfilePictureForm}
          className="image2"
        />
        {this.state.changeProfilePicture ? <ChangeProfilePicForm /> : null}
      </div>
    );
  }
}
export default Home;
