import React, { Component } from "react";
import "./styles.css";
import loadImg from "../login.svg";
import Button from "antd/lib/button";
import { Input, Form  } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";


const token = localStorage.getItem("token");
export default class antdLogin extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: ""
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
      this.props.history.push("/admin");
    }
    return (
      <div className="container">
      <div className="login-form">
        <div className="header">Login</div>
        <div className="image">
          <img src={loadImg} alt="loginPicture" />
        </div>
        <Form onSubmit={this.submitForm}>
          <Form.Item>
            <Input
              prefix={
                    <UserOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="username"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.onChange}
            ></Input>
          </Form.Item>
          <Form.Item>
            <br />
            <Input
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            ></Input>
          </Form.Item>
          <br />
          <Button tupe="primary" onClick={this.submitForm}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
    );
  }
}
