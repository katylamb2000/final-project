import React, { Component } from "react";
// import "semantic-ui-css/semantic.min.css";
import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import { Route, withRouter } from "react-router-dom";

import StudentsContainer from "./components/StudentsContainer";
import CampsContainer from "./components/CampsContainer";
import TeachersContainer from "./components/TeachersContainer";
import CampDetail from "./components/CampDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import NewCampForm from "./components/NewCampForm";
import NewTeacherForm from "./components/NewTeacherForm";
import Resume from "./components/Resume";
import Home from "./components/Home";
import StudentProfile from "./components/StudentProfile";
import ViewStudent from "./components/ViewStudent";

import UploadProfilePictureForm from "./components/UploadProfilePictureForm";

class App extends Component {
  filteredTeachers = [];

  state = {
    allTeachers: [],
    allCamps: [],
    showTeacher: null,
    selectedStudent: null,
    selectedTeacher: null,
    goToOwnProfile: null,
    selectedCamp: null,
    campTeachers: null,
    NewCampForm: false,
    NewTeacherForm: false,
    NewTeacher: null,
    UploadProfilePictureForm: false,
    avatar: null,
    newProfilePicture: false,
    pic: null,
    viewStudent: null
  };

  componentDidMount() {
    if (!localStorage.getItem("token")) return;
    API.validate()
      .then(student => {
        this.signin(student);
        // this.showTeacher(user);
        // this.props.history.push("/teacher");
      })
      .catch(error => this.props.history.push("/signin"));
    API.getAllCamps().then(resp => this.setState({ allCamps: resp }));

    API.getAllTeachers().then(resp => this.setState({ allTeachers: resp }));
    API.getAllStudents()
      .then(resp => this.setState({ allStudents: resp }))

      .catch(error => console.log(error));
  }

  teacher = () => {
    if (!localStorage.getItem("token")) {
      console.log("token");
    }

    // API.validate().then(avatar => {
    //   // this.signin(user);
    //   this.setState({ avatar: avatar });
    //   this.props.history.push("/teacher");
    // });
  };

  signin = student => {
    localStorage.setItem("token", student.token);
    this.setState({ user: student });
    this.props.history.push("/home");
    console.log(this.state.user);
  };

  signout = () => {
    localStorage.removeItem("token");
    this.setState({ username: null });
    this.props.history.push("/signin");
  };

  addProfilePicture = data => {
    this.setState({
      teacherAvatar: data
    });
  };

  changeProfilePicture = () => {
    this.setState({ changeProfilePicture: true });
  };

  changePic = (data) => {
    this.setState({
      user: data
    })
  }

  showTeacherPage = teacher => {
    this.setState({ selectedTeacher: teacher });
    this.props.history.push("/selectedteacher/");
  };

  selectCamp = camp => {
    // console.log(event);
    this.setState({ selectedCamp: camp });
    this.props.history.push("/selectedcamp/");
  };

  saveNewTeacher = data => {
    this.setState({ goToOwnProfile: data });

    this.props.history.push("/mypage/");
  };

  selectStudent = student => {
    // console.log(event);
    this.setState({ selectedStudent: student });
    this.props.history.push("/selectedstudent/");
  };

  viewStudent = student => {
    // console.log(event);
    this.setState({ viewStudent: student });
    this.props.history.push("/viewstudent/");
  };

  showTeacherResume = teacher => {
    // console.log(event);
    this.setState({ TeacherUser: teacher });
    this.props.history.push("/selectedteacher/");
  };

  renderNewCampForm = () => {
    this.setState({ NewCampForm: true });
  };

  renderNewTeacherForm = () => {
    this.setState({ NewTeacherForm: true });
  };

  RenderUploadProfilePictureForm = () => {
    this.setState({ UploadProfilePictureForm: true });
  };

  saveNewTeacher = data => {
    this.state.allTeachers.push(data);
  };


  campTeachersMethod = () => {
    const id = this.state.selectedCamp.id;
    const filteredTeachers = [];

    filteredTeachers = this.state.allTeachers.filter(teacher => {
      if (teacher.camp_id.id == id);
    });
    this.setState({ campTeacher: filteredTeachers });
  };

  handleBackClick = () => {
    this.setState({ selectedCamp: null });
  };

  close = () => {
    this.setState({ NewTeacherForm: false });
  };

  closePicForm = () => {
    this.setState({ UploadProfilePictureForm: false });
  };
  closeCampsForm = () => {
    this.setState({ NewCampForm: false });
  };

  seeTeacherProfile = teacher => {
    this.setState({ selectedTeacher: teacher });
  };

  render() {
    return (
      <div>
        <Header user={this.state.user} signout={this.signout} />
        <Route
          exact
          path="/home"
          render={() => {
            return (
              <Home
                showCamps={this.showCamps}
                showTeachers={this.showTeachers}
                user={this.state.user}
                changeProfilePicture={this.changeProfilePicture}
                newProfilePicture={this.state.newProfilePicture}
                changePic={this.changePic}
                pic={this.state.pic}
              />
            );
          }}
        />
        <Route
          exact
          path="/selectedteacher/"
          render={props => (
            <Resume {...props} teacher={this.state.selectedTeacher} />
          )}
        />
        <Route
          path="/signin"
          exact
          strict
          render={props => <AuthForm {...props} authenticate={this.signin} />}
        />
        <Route
          path="/signup"
          exact
          strict
          render={props => <AuthForm {...props} authenticate={this.signin} />}
        />
        <Route
          path="/mypage"
          exact
          strict
          render={props => (
            <Resume {...props} teacher={this.state.goToOwnProfile} />
          )}
        />
        <Route
          path="/selectedcamp/"
          render={props => (
            <CampDetail
              {...props}
              camp={this.state.selectedCamp}
              viewTeacher={this.viewTeacher}
            />
          )}
        />
        <Route
          path="/selectedstudent/"
          render={props => (
            <StudentProfile {...props} student={this.state.selectedStudent} />
          )}
        />
         <Route
          path="/viewstudent/"
          render={props => (
            <ViewStudent {...props} student={this.state.viewStudent} />
          )}
        />
        <Route
          path="/students"
          exact
          strict
          render={() => (
            <StudentsContainer selectStudent={this.selectStudent} viewStudent={this.viewStudent} />
          )}
        />
        <Route
          path="/camps"
          exact
          strict
          render={() => (
            <CampsContainer
              allCamps={this.state.allCamps}
              selectCamp={this.selectCamp}
              allTeachers={this.state.allTeachers}
              getCampTeachers={this.getCampTeachers}
              campTeachers={this.state.campTeachers}
            />
          )}
        />
        <Route
          path="/teachers"
          exact
          strict
          render={() => (
            <TeachersContainer
              allTeachers={this.state.allTeachers}
              // showTeacherResume={this.showTeacherResume}
               showTeacherPage={this.showTeacherPage}
              // selectCamp={this.selectCamp}
              // allTeachers={this.state.allTeachers}
              // getCampTeachers={this.getCampTeachers}
              // campTeachers={this.state.campTeachers}
            />
          )}
        />
        <Route
          path="/teacher"
          exact
          strict
          render={() => (
            <Resume
              teacher={this.state.showTeacher}
             
            />
          )}
        />
        {this.state.UploadProfilePictureForm ? (
          <UploadProfilePictureForm
            addProfilePicture={this.addProfilePicture}
            showTeacher={this.showTeacher}
            closePicForm={this.closePicForm}
          />
        ) : null}
        {/* // showTeacherResume={this.showTeacherResume}
        // selectCamp={this.selectCamp}
        // allTeachers={this.state.allTeachers}
        // getCampTeachers={this.getCampTeachers}
        // campTeachers={this.state.campTeachers} */}
        {this.state.NewCampForm ? (
          <NewCampForm closeCampsForm={this.closeCampsForm} />
        ) : null}
        {this.state.NewTeacherForm ? (
          <NewTeacherForm
            close={this.close}
            registerNewTeacher={this.registerNewTeacher}
            saveNewTeacher={this.saveNewTeacher}
            showTeacher={this.showTeacher}
          />
        ) : null}
        <Footer
          renderNewCampForm={this.renderNewCampForm}
          renderNewTeacherForm={this.renderNewTeacherForm}
        />
      </div>
    );
  }
}

export default withRouter(App);
