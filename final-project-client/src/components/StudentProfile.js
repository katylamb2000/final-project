import React from "react";
import TextField from "@material-ui/core/TextField";

import Calendar from "./Calendar";
import { Container, Button, Form, TextArea } from 'semantic-ui-react'


class StudentProfile extends React.Component {

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
       
          <h1>Hi {this.props.student.username} what did you do today? </h1>
        
<Form>
<Form.Field control={TextArea} label='My Day' placeholder='Today I...' />
<Form.Button>Send</Form.Button>
</Form>

        
      </div>
     
      </Container> 

    );
  }
}

export default StudentProfile;
