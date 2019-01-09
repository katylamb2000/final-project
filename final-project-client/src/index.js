import React from "react";
import Fragment from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
// import Dashboard from "./pages/dashboard";
// import Home from "./pages/home";
// import Callback from "./pages/callback";
// import Auth from "./components/Auth";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// function App() {
//   return (
// ReactDOM.render(
//   <div className="App container">
//     {/* <Auth> */}
//     <div className="jumbotron">
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/pages/dashboard" component={Dashboard} />
//           <Route path="/pages/callback" component={Callback} />
//         </Switch>
//       </Router>
//     </div>
//     {/* </Auth> */}
//   </div>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
