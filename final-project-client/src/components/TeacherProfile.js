import React from "react";
import TextField from "@material-ui/core/TextField";
import Calendar from "./Calendar";
import { Card, Button } from 'semantic-ui-react'

class TeacherProfile extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  //   bookLesson = () => {
  //       this.setState({lesson: })
  //   }
  render() {
    return (
      <Card

      onClick={() => this.props.showTeacherPage(this.props.teacher)}
      image='http://s3-eu-west-1.amazonaws.com/wbm.thumbnail/dissolve/1014432_600.jpg'
      header={this.props.teacher.username}
      description="Teacher bio will go here"
      meta="nationality"
      extra="badges"
      
      >
      

       
     
      </Card>
    );
  }
}
export default TeacherProfile;
