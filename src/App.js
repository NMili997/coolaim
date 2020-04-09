import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import antdLogin from "./components/antdLogin";
import Admin from "./container/Admin";
import Logout from "./components/Logout";
import Comment from "./components/homepage/comment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/coolaim" component={antdLogin} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/comment/:id" component={Comment} />
      </Switch>
    </Router>
  );
}
export default App;
