import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.scss";
import loadImg from "../login.svg";

const token = localStorage.getItem("token");
export default class Login extends Component {
    state = {
      username: "",
      password: "",
      loggedIn:""
    };
  loggedIn = token == null ? false : true;
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  submitForm = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "randomstringwwweaaa");
      this.setState({
        loggedIn: true
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="baseContainer">
        <div className="header">Hello</div>
        <div className="image">
          <img src={loadImg} alt="loginPicture" />
        </div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          ></input>
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
