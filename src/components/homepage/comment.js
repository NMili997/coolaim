import React, { useState, useEffect } from "react";
import "../../App.css";

function Comment({ match }) {
  console.log(match);
  let l = [];
  useEffect(() => {
    fetchItem();
  }, []);

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

  return (
    <div className="navPosts">
      <div className="comments">{comments.body}</div>
    </div>
  );
}

export default Comment;
