import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/homepage/Admin";
import Logout from "./components/Logout";
import "./App.css";
import Comment from "./components/homepage/comment";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/comment/:id" component={Comment} />

        </Switch>
      </Router>
    );
  }
}
export default App;
