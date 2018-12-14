import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    return (
      <header className="ui center aligned menu">
        <Link className="left item" to={{ pathname: "/camps" }}>
          {" "}
          Camps{" "}
        </Link>
        <Link className="left item" to={{ pathname: "/teachers" }}>
          {" "}
          Teachers{" "}
        </Link>
        <Link className="left item" to={{ pathname: "/students" }}>
          {" "}
          Students{" "}
        </Link>

        <i className="search icon"> search </i>
        <img
          className="center aligned"
          src="https://static.wixstatic.com/media/e55cca_51ec82bfebf74d8f9691b9b5faaa45dc~mv2_d_10176_3387_s_4_2.png/v1/fill/w_195,h_65,al_c,q_80,usm_0.66_1.00_0.01/e55cca_51ec82bfebf74d8f9691b9b5faaa45dc~mv2_d_10176_3387_s_4_2.webp"
        />
        {this.props.user ? null : (
          <Link className="right item" to={{ pathname: "/signup" }}>
            {" "}
            Sign in{" "}
          </Link>
        )}
        <h5>
          {this.props.user
            ? `Welcome back, ${this.props.user.username}!`
            : "Welcome to Karstaway."}
          <br />
          {this.props.user && (
            <Button onClick={this.props.signout}>SIGN OUT</Button>
          )}
        </h5>
      </header>
    );
  }
}
export default Header;
