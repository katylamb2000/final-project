import React from "react";
import { Image } from "semantic-ui-react";

class ProfilePicture extends React.Component {
  render() {
    return (
      <div>
        <Image className="image2" src={this.props.user.profile_picture} />
        <Image
          onClick={this.props.changeProfilePicture}
          className="image2"
          src="https://www.danburyhospital.org/-/media/wchn/shared/find-a-doc/0/0-placeholderuser.png?la=en&h=200&w=200&mw=200&hash=3A5B944E8ABE2FE4951ADA8A53064D67D58DC688"
        />
        <span>{this.props.user.username}</span>
      </div>
    );
  }
}

export default ProfilePicture;
