import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
  return (
    <section>
      <ol>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
