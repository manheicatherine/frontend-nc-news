import React from "react";

export default function Comments({ comment }) {
  const formattedDate = new Date(comment.created_at)
    .toISOString()
    .replace("T", " ")
    .replace("Z", "");

  return (
    <section>
      <h4 className="comment-card-username">User: {comment.author}</h4>
      <h4>{comment.body}</h4>
      <h5>{formattedDate}</h5>
      <button>{comment.votes}</button>
    </section>
  );
}
