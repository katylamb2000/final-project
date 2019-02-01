import React from "react";
import { Image } from "semantic-ui-react";

class ProfilePicture extends React.Component {
  render() {
    return (
      <div>
 {this.props.pic ?
        <Image className="image2" 
        
          onClick={this.props.changeProfilePicture}
          
           src={this.props.user.image}
           /> 
           : 
           <Image className="image2" 
        
           onClick={this.props.changeProfilePicture}
           className="image2"
           src="https://www.danburyhospital.org/-/media/wchn/shared/find-a-doc/0/0-placeholderuser.png?la=en&h=200&w=200&mw=200&hash=3A5B944E8ABE2FE4951ADA8A53064D67D58DC688"
           size='medium' 
           circular
        />
        }
  
      </div>
    );
  }
}

export default ProfilePicture;
