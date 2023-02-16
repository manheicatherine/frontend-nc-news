import React from "react";
import { deleteNewComment } from "../utils/api";

export default function DeleteComments({ comment }) {
  const handleClick = (e) => {
    deleteNewComment(comment.comment_id);
  };

  return (
    <div>
      <button className="delete-button" onClick={handleClick}>
        delete
      </button>
    </div>
  );
}
