import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../App.css";

function Comment({ match }) {
  const token = localStorage.getItem("token");
  let loggedIn = true,
    dataOfComment = [];
  useEffect(() => {
    fetchItem();
  },[]);
  if (token == null) {
    loggedIn = false;
  }
  const [comments, setComment] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://bl0gpostapi.herokuapp.com/comments?_Id=${match.params.id}`
    );
    const comments = await fetchItem.json();
    for (dataOfComment in comments) {
      setComment(comments[dataOfComment]);
    }
  };
  if (loggedIn === false) {
    return <Redirect to="/" />;
  } else {
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
