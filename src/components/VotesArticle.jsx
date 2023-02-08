import React from "react";
import { useState } from "react";
import { updateArticleVote } from "../utils/api";

export default function VotesArticle({ article_id, votes }) {
  const [updatevotes, setUpdateVotes] = useState(0);

  const handleLike = () => {
    setUpdateVotes((currChange) => currChange + 1);
    updateArticleVote(article_id, 1).catch((err) => console.log(err));
  };

  const handleDisike = () => {
    setUpdateVotes((currChange) => currChange - 1);
    updateArticleVote(article_id, -1).catch((err) => console.log(err));
  };

  return (
    <section>
      <button
        disabled={updatevotes === 1}
        onClick={() => handleLike()}
        className="votesbutton"
      >
        +
      </button>
      {votes + updatevotes}
      <button
        disabled={updatevotes === -1}
        onClick={() => handleDisike()}
        className="votesbutton"
      >
        -
      </button>
    </section>
  );
}
