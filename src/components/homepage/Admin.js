import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../../App.css";
import Post from "./post";
import Nav from "./nav";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
      <Nav />
      <Post />
      </div>

    );
  }
}
