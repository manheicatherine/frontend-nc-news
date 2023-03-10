import React from "react";
import { useState} from "react";
import { postNewComment } from "../utils/api";

export default function AddComments({ article_id, setComments, setPostedMessage, postedMessage}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });

  const handleChange = (e) => {
    if(newComment.username === "" ){
      setErrorMessage(
        "Sorry, please enter username."
      );
    }
    if(newComment.username!== "" )
    setErrorMessage(
      ""
    );
  {  setPostedMessage("")
    const value = e.target.value;
    setNewComment({
      ...newComment,
      [e.target.name]: value,
    });}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.username !== "") {
      postNewComment(article_id, newComment)
        .then(({ data }) => {
          const result = data.comment[0];
          setPostedMessage("Posted comment successfully!");
          setComments((currList) => {
            return [result, ...currList];
          });
        })
        .catch((err) => {
          setErrorMessage(
            "Sorry, please try again with a valid username and comments."
          );
        });
    }
    setNewComment({
        username: "",
        body: "",
      });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="addUsernameTextbox">Username:</label>
        <input
          type="text"
          className="addUsernameTextbox"
          name="username"
          value={newComment.username}
          onChange={handleChange}
          placeholder="Put your username here..."
        ></input>
        <label className="addUsernameTextbox">Comments:</label>
        <input
          type="text"
          className="addCommentTextbox"
          name="body"
          value={newComment.body}
          onChange={handleChange}
          placeholder="Put your comments here..."
        ></input>
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
