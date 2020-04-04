import React, { Component } from "react";
import MeidaQueri from "react-responsive";
import { Redirect } from "react-router-dom";
import "../../App.css";
import Post from "./post";
import Nav from "./nav";
const XS = 576;

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
      <MeidaQueri minDeviceWidth={XS + 1}>
      <Nav />
      <Post />
      </MeidaQueri>
      </div>

    );
  }
}
