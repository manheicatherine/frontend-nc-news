import React from "react";

export default function Comments({ comment }) {

  return (
    <section>
      <h4 className="comment-card-username">User: {comment.author}</h4>
      <h4>{comment.body}</h4>
      <h5>{comment.created_at}</h5>
      <button>{comment.votes}</button>
    </section>
  );
}
