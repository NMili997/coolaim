import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token");
  return (
    <div>
      <h1>U have been logout</h1>
      <Link to="/coolaim">
        <button>Please Login Again</button>
      </Link>
    </div>
  );
}
export default Logout;
