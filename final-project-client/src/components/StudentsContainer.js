import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Segment, Input } from 'semantic-ui-react'
import StudentCard from "./StudentCard";
import API from "../API";

class StudentsContainer extends React.Component {
  state = {
    allStudents: []
  };

  componentDidMount() {
    API.getAllStudents().then(resp => this.setState({ allStudents: resp }));
  }

  render() {
    return (
      <div className="ui four column grid" style={{ margin: "2em" }}>
      <Segment raised attached='top'>
        <h1 attached="left">Students</h1>
        <Input placeholder='Search students...' attached="right" />

        </Segment>
        {this.state.allStudents.map(student => (

          
          <StudentCard
            student={student}
            selectStudent={this.props.selectStudent}   
            viewStudent={this.props.viewStudent}  
                     // showTeacherResume={this.props.showTeacherResume}
          />
        ))}
      </div>
    );
  }

}




//       <div className="ui three column grid" style={{ margin: "1em" }}>
//         <h1>Students</h1>
//         <br />

//         {this.state.allStudents.map(student => (
//           <StudentCard
//             student={student}
//             selectStudent={this.props.selectStudent}
//           />
//         ))}
//       </div>
//     );
//   }
// }
export default StudentsContainer;
