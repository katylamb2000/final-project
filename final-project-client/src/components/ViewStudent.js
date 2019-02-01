import React from "react";
import TextField from "@material-ui/core/TextField";

import Calendar from "./Calendar";
import { Container, Button, Form, TextArea } from 'semantic-ui-react'


class ViewStudent extends React.Component {

  state = {
    status: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container> 
      <div class="ui raised segment" text>
       
          <h1> {this.props.student.username}  </h1>
        


        
      </div>
     
      </Container> 

    );
  }
}

export default ViewStudent;