import React , {Component} from "react";
import {Link} from "react-router-dom";

export default class Logout extends  Component{
  constructor(props){
    super(props)
    localStorage.removeItem("token")
  }
  render(){
    return (
      <div>
        <h1>U have been logout</h1>
        <Link to="/coolaim">
          <button>Please Login Again</button>
        </Link>
      </div>
    );
  }
}
