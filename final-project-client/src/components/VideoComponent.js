import React from "react";
// import Video from "twilio-video";
// import axios from "axios";
// import RaisedButton from "material-ui/RaisedButton";
// import TextField from "material-ui/TextField";
// // import { Card, CardHeader, CardText } from "material-ui/Card";

class VideoComponent extends React.Component {
  //     this.state = {
  //       identity: null /* Will hold the fake name assigned to the client. The name is generated by faker on the server */,
  //       roomName: "" /* Will store the room name */,
  //       roomNameErr: false /* Track error for room name TextField. This will    enable us to show an error message when this variable is true */,
  //       previewTracks: null,
  //       localMediaAvailable: false /* Represents the availability of a LocalAudioTrack(microphone) and a LocalVideoTrack(camera) */,
  //       hasJoinedRoom: false,
  //       activeRoom: null // Track the current active room
  //     };

  //     this.joinRoom = this.joinRoom.bind(this);
  //     this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
  //   }
  //   handleRoomNameChange(e) {
  //     /* Fetch room name from text field and update state */
  //     let roomName = e.target.value;
  //     this.setState({ roomName });
  //   }

  //   joinRoom() {
  //     /*
  //       Show an error message on room name text field if user tries         joining a room without providing a room name. This is enabled by setting `roomNameErr` to true
  //         */
  //     if (!this.state.roomName.trim()) {
  //       this.setState({ roomNameErr: true });
  //       return;
  //     }

  //     console.log("Joining room '" + this.state.roomName + "'...");
  //     let connectOptions = {
  //       name: this.state.roomName
  //     };

  //     if (this.state.previewTracks) {
  //       connectOptions.tracks = this.state.previewTracks;
  //     }

  //     /*
  //       Connect to a room by providing the token and connection    options that include the room name and tracks. We also show an alert if an error occurs while connecting to the room.
  //       */

  //     Video.connect(
  //       this.state.token,
  //       connectOptions
  //     ).then(this.roomJoined, error => {
  //       alert("Could not connect to Twilio: " + error.message);
  //     });
  //   }

  //   componentDidMount() {
  //     axios.get("/token").then(results => {
  //       /*
  //       Make an API call to get the token and identity(fake name) and  update the corresponding state variables.
  //           */
  //       const { identity, token } = results.data;
  //       this.setState({ identity, token });
  //     });
  //   }

  render() {
    return (
      //     /*
      //      Controls showing of the local track
      //      Only show video track after user has joined a room else show nothing
      //     */
      //     let showLocalTrack = this.state.localMediaAvailable ? (
      //       <div className="flex-item">
      //         <div ref="localMedia" />{" "}
      //       </div>
      //     ) : (
      //       ""
      //     );
      //     /*
      //      Controls showing of ‘Join Room’ or ‘Leave Room’ button.
      //      Hide 'Join Room' button if user has already joined a room otherwise
      //      show `Leave Room` button.
      //     */
      //     let joinOrLeaveRoomButton = this.state.hasJoinedRoom ? (
      //       <RaisedButton
      //         label="Leave Room"
      //         secondary={true}
      //         onClick={() => alert("Leave Room")}
      //       />
      //     ) : (
      //       <RaisedButton label="Join Room" primary={true} onClick={this.joinRoom} />
      //     );
      //     return (
      //       <Card>
      //         <CardText>
      //           <div className="flex-container">
      //             {showLocalTrack} {/* Show local track if available */}
      //             <div className="flex-item">
      //               {/*
      //   The following text field is used to enter a room name. It calls  `handleRoomNameChange` method when the text changes which sets the `roomName` variable initialized in the state.
      //       */}
      //               <TextField
      //                 hintText="Room Name"
      //                 onChange={this.handleRoomNameChange}
      //                 errorText={
      //                   this.state.roomNameErr ? "Room Name is required" : undefined
      //                 }
      //               />
      //               <br />
      //               {joinOrLeaveRoomButton}{" "}
      //               {/* Show either ‘Leave Room’ or ‘Join Room’ button */}
      //             </div>
      //             {/*
      //   The following div element shows all remote media (other                             participant’s tracks)
      //       */}
      //             <div className="flex-item" ref="remoteMedia" id="remote-media" />
      //           </div>
      //         </CardText>
      //       </Card>
      //     );
      //   }
      // }

      <div id="otEmbedContainer" style="width:800px; height:640px">
        <script src="https://tokbox.com/embed/embed/ot-embed.js?embedId=26ab52e6-b180-4bab-8bb7-513d9a38c750&room=DEFAULT_ROOM" />{" "}
      </div>
      // <div id="root"></div>
    );
  }
}

export default VideoComponent;