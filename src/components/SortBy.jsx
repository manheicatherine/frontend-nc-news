import React from "react";

const SortBy = ({ handleSortBy, handleOrder, order }) => {
    
  return (
    <section>
      <h3 className="sortBy">Sort By:</h3>
      <button
        value="created_at"
        onClick={handleSortBy}
        className="sortByButton"
      >
        Date
      </button>
      <button
        value="comment_count"
        onClick={handleSortBy}
        className="sortByButton"
      >
        Comments
      </button>
      <button
        value="votes"
        onClick={handleSortBy}
        className="sortByButton"
      >
        Votes
      </button>
      <input
        type="button"
        className="sortByButton"
        value={order}
        onClick={handleOrder}
      ></input>
    </section>
  );
};

export default SortBy;