import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CampCard from "./CampCard";
import VideoComponent from "./VideoComponent";
import API from "../API";

class CampsContainer extends React.Component {
  state = {
    allCamps: []
  };

  componentDidMount() {
    API.getAllCamps().then(resp => this.setState({ allCamps: resp }));
  }
  render() {
    return (
      <div>
        {this.state.allCamps.map(camp => (
          <div className="ui four column grid" style={{ margin: "1em" }}>
            <CampCard
              camp={camp}
              selectCamp={this.props.selectCamp}
              // id={this.props.id}
              // // onClick={this.props.getCampTeacher}
              // name="search"

              getCampTeachers={this.props.getCampTeachers}
            />
            {/* <VideoComponent /> */}
          </div>
        ))}
      </div>
    );
  }
}
export default CampsContainer;
