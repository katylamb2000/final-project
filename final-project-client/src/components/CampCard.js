import React from "react";

import { Card, Button, Grid } from 'semantic-ui-react'

class CampCard extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={3} >
      
      <Card

      onClick={() => this.props.handleClick(this.props.camp)}      image='http://s3-eu-west-1.amazonaws.com/wbm.thumbnail/dissolve/1014432_600.jpg'
      header={this.props.camp.title}
      image={this.props.camp.photo}
      description="Camp description will go here"
      meta={this.props.camp.location}
      extra="badges"
      
      >
      

       
     
      </Card>
      </Grid.Row>
      </Grid> 
      // <div className="CampCard" style={{ margin: "2em" }}>
      //   <h1 className="item">{this.props.camp.title}</h1>
      //   <img
      //     className="item"
      //     onClick={() => this.props.handleClick(this.props.camp)}
      //     src={this.props.camp.photo}
      //   />
      //   <p className="item">{this.props.camp.location}</p>
      //   <Button
      //     onClick={() => this.props.selectCamp(this.props.camp)}
      //     className="App-button"
      //   >
      //     {" "}
      //     More
      //   </Button>
      // </div>
    );
  }
}
export default CampCard;
