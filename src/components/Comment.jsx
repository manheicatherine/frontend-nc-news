import React from "react";

export default function Comment({ comment }) {
  const formattedDate = new Date(comment.created_at)
    .toISOString()
    .replace("T", " ")
    .replace("Z", "")
    .split("")
    .slice(0, -4)
    .join("");

  return (
    <>
      <h4 className="comment-card-username">User: {comment.author}</h4>
      <h4>{comment.body}</h4>
      <h5>{formattedDate}</h5>
      <button>{comment.votes}</button>
    </>
  );
}
