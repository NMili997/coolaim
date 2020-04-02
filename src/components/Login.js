import React , {Component} from "react";
import { Redirect } from "react-router-dom";
import loadImg from "../login.svg";
import "./style.scss";

export default class Login extends Component{
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn = true
    if(token == null){
      loggedIn = false
    }
      this.state = {
      username: "",
      password: "",
      loggedIn
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)

  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm(e){
    e.preventDefault()
    const {username, password } = this.state;
    if(username === "admin" && password === "admin"){
      localStorage.setItem("token" , "randomstringwwweaaa")
      this.setState({
        loggedIn: true
      })
    }
  }

  render(){
    if(this.state.loggedIn){
      return <Redirect to="/admin" />;
    }
    return (
      <div className="baseContainer" >
        <div className="header">Hello</div>
        <div className="image">
          <img src={loadImg} alt="loginPicture" />
        </div>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
