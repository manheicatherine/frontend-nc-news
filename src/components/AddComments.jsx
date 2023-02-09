import React from "react";
import { useState, useEffect } from "react";
import { postArticleVote } from "../utils/api";

export default function AddComments({ article_id }) {
  const [postedMessage, setPostedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });
  console.log(postedMessage);
  useEffect(() => {
    if (newComment.username !== "") {
      postArticleVote(article_id, newComment)
        .then((res) => {
          setPostedMessage("Posted comment successfully!");
          setTimeout(window.location.reload(false), 8000);
        })
        .catch((err) => {
          setErrorMessage(
            "Sorry, please try again with a valid username and comments."
          );
        });
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
        <label className="addUsernameTextbox">Username:</label>
        <input type="text" className="addUsernameTextbox"></input>
        <label className="addUsernameTextbox">Comments:</label>
        <input type="text" className="addCommentTextbox"></input>
        <input
          type="submit"
          className="addCommentSubmit"
          disabled={postedMessage === "Posted comment successfully!"}
        ></input>
        {postedMessage ? (
          <h3 className="successfulMsg">{postedMessage}</h3>
        ) : (
          <h3 className="errorMsg">{errorMessage}</h3>
        )}
        <br></br>
      </form>
    </div>
  );
}
