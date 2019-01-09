import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CampCard extends React.Component {
  render() {
    return (
      <div className="CampCard" style={{ margin: "2em" }}>
        <h1 className="item">{this.props.camp.title}</h1>
        <img
          className="item"
          onClick={() => this.props.handleClick(this.props.camp)}
          src={this.props.camp.photo}
        />
        <p className="item">{this.props.camp.location}</p>
        <Button
          onClick={() => this.props.selectCamp(this.props.camp)}
          className="App-button"
        >
          {" "}
          More
        </Button>
      </div>
    );
  }
}
export default CampCard;
