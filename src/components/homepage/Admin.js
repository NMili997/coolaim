import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../../App.css";

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
      <nav>
        <h1>Welcome to the page</h1>
        <div className="btnLogout">
          <Link to="/logout">
            <button>Logout</button>
          </Link>
        </div>
      </nav>
    
    );
  }
}
