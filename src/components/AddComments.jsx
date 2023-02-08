import React from "react";
import { useState, useEffect } from "react";
import { postArticleVote } from "../utils/api";

export default function AddComments({ article_id }) {
  const [isPosted, setIsPost] = useState(false);
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });

  useEffect(() => {
    setIsPost(false);
    if (newComment.username !== "") {
      postArticleVote(article_id, newComment)
        .then((res) => alert("Posted successfully. Please refresh the page."))
        .catch((err) => {
          alert("Please enter a correct username or valid comments. Please refresh the page.");
        });
      setIsPost(true);
    }
  }, [newComment, article_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      username: e.target[0].value,
      body: e.target[1].value,
    };
    setNewComment((current) => ({ ...current, ...obj }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="addCommentTextbox">Username:</label>
        <input type="text" className="addCommentTextbox"></input>
        <label className="addCommentTextbox">Comments:</label>
        <input type="text" className="addCommentTextbox"></input>
        <input
          type="submit"
          className="addCommentSubmit"
          disabled={isPosted === true}
        ></input>
        <br></br>
      </form>
    </div>
  );
}
