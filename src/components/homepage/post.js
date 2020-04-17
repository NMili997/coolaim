import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import {API_URL} from "../../env.json";

function Post() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setUsers] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(`${API_URL}/posts`);
    const items = await data.json();
    setUsers(items);
  };

  return (
    <div className="buttonHit">
      {items.map(item => (
        <Link className="linkNav" key={item._id} to={`/comment/${item._id}`}>
          <button className="navPosts">{item.username}</button>
        </Link>
      ))}
    </div>
  );
}

export default Post;
