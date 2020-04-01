import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Nav() {
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

export default Nav;
