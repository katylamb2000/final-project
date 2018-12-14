class API {
  static init() {
    this.baseURL = "http://localhost:3001";

    this.validateUrl = this.baseUrl + "/validate";
    this.homeUrl = this.baseUrl + "/home";
    this.signinUrl = this.baseUrl + "/signin";
  }

  static signin(username, password) {
    return fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json());
  }

  static validate() {
    const token = localStorage.getItem("token");
    return fetch(this.validateUrl, {
      headers: { Authorization: token }
    }).then(resp => resp.json());
  }

  static signup(username, password) {
    return fetch("http://localhost:3001/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json());
  }

  static getAllCamps() {
    return fetch("http://localhost:3001/get_all_camps", {}).then(resp =>
      resp.json()
    );
  }

  static getAllTeachers() {
    return fetch("http://localhost:3001/get_all_teachers", {}).then(resp =>
      resp.json()
    );
  }
  static getAllStudents() {
    return fetch("http://localhost:3001/get_all_students", {}).then(resp =>
      resp.json()
    );
  }

  static registerNewTeacher(username, password) {
    return fetch("http://localhost:3001/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json());
  }

  static UploadProfilePicture(image) {
    const token = localStorage.getItem("token");

    return fetch("http://localhost:3001/teachers", {
      method: "POST",
      headers: { Authorization: token },

      body: image
    }).then(resp => resp.json());
  }

  static ChangeProfilePicture(image) {
    const token = localStorage.getItem("token");

    return fetch("http://localhost:3001/update_profile_picture", {
      method: "POST",
      headers: { Authorization: token },

      body: image
    }).then(resp => resp.json());
  }
}

API.init();

window.API = API;
export default API;
