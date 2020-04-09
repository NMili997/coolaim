import React from "react";
import {Avatar} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../App.css";

function Nav() {
  return (
    <nav>
      <h1>Welcome to the page</h1>
      <div>
      <Avatar size={64} icon={<UserOutlined />} />
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
