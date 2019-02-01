import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CampCard from "./CampCard";
import VideoComponent from "./VideoComponent";
import { Segment, Input, Grid } from 'semantic-ui-react'
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
           <div className="ui four column grid" style={{ margin: "2em" }}>
      <Segment raised attached='top'>
        <h1 attached="left">Camps</h1>
        <Input placeholder='Search camps...' attached="left" />

        </Segment>
        </div>
        {this.state.allCamps.map(camp => (
          <Grid>
            <Grid.Row columns={3}>
            <CampCard
              camp={camp}
              selectCamp={this.props.selectCamp}
              // id={this.props.id}
              // // onClick={this.props.getCampTeacher}
              // name="search"
    handleClick={this.props.selectCamp}
              getCampTeachers={this.props.getCampTeachers}
            />
            {/* <VideoComponent /> */}
            </Grid.Row>
          </Grid>
        ))}
      </div>
    );
  }
}
export default CampsContainer;
