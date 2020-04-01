import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Post() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setUsers] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://bl0gpostapi.herokuapp.com/posts");
    const items = await data.json();

    console.log(items);
    setUsers(items);
  };

  return (
    <div className="buttonHit">
      {items.map(item => (
        <Link className="linkNav" key={item._id} to={`/comment/${item._id}`}>
        <button className="navPosts" >
            {item.username}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Post;
