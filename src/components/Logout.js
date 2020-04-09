import React from "react";
import { Link } from "react-router-dom";
import {Result , Button } from "antd";
import "./styles.css"
function Logout() {
  localStorage.removeItem("token");
  return (
    <div className="Logout">
    <Result
      status="403"
      subTitle="Sorry,you are not logged in"
      />
      <br />
      <Link to="/coolaim">
      <Button style={{color: "blue"}}>Back on log in</Button>
      </Link>
      </div>
  );
}
export default Logout;
