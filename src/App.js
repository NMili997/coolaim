import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
