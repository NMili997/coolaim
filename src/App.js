import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/homepage/Admin";
import Logout from "./components/Logout";
import Comment from "./components/homepage/comment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/coolaim" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/comment/:id" component={Comment} />
      </Switch>
    </Router>
  );
}
export default App;
