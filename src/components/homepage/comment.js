import React, { useState, useEffect } from "react";
import "../../App.css";
import {Link, Redirect} from "react-router-dom";

function Comment({ match }) {
  const token = localStorage.getItem("token");
  console.log(match);
  let l = [];
  useEffect(() => {
    fetchItem();
  }, []);
  let loggedIn = true;
  if (token == null) {
    loggedIn = false;
  }
  const [comments, setComment] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://bl0gpostapi.herokuapp.com/comments?_Id=${match.params.id}`
    );
    const comments = await fetchItem.json();
    for (l in comments) {
      console.log(comments[l]);
      setComment(comments[l]);
    }
  };
  if(loggedIn === false){
  return <Redirect to="/" />;
}else {
  return (
    <div className="navPosts">
      <div className="comments">{comments.body}</div>
      <Link to="/admin">
        <button>Back on admin page</button>
      </Link>
    </div>
  );
}
}

export default Comment;
