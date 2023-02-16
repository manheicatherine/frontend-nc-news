// ArticlesList.jsx
import React, { useEffect, useState } from "react";
import { getArticles, sortArticles } from "../utils/api";
import Article from "./Article";
import { Link } from "react-router-dom";
import SortBy from "./SortBy";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortby] = useState("");
  const [order, setOrder] = useState("DESC");

  useEffect(() => {
    if (sortBy === "") {
      getArticles().then((res) => {
        setArticles(res);
        setIsLoading(false);
      });
    } else {
      sortArticles(sortBy, order).then((res) => {
        setArticles(res);
        setIsLoading(false);
      });
    }
  }, [sortBy, order]);

  const handleSortBy = (e) => {
    setSortby(e.target.value);
  };

  const handleOrder = (e) => {
    if (e.target.value === "ASC") {
      setOrder("DESC");
    } else {
      setOrder("ASC");
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <section className="articlesContainer">
        <SortBy
          handleSortBy={handleSortBy}
          handleOrder={handleOrder}
          order={order}
        />
        <ol>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <Link
                  to={`/articles/${article.article_id}`}
                  className="navbar-article"
                >
                  <Article article={article} key={article.article_id} />
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}
