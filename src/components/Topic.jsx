import React, { useEffect } from "react";
import { getArticlesByTopics, sortArticles } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";
import SortBy from "./SortBy";
import { useNavigate } from "react-router-dom";

export default function Topic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState("DESC");
  const [sortBy, setSortby] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (sortBy === "") {
      getArticlesByTopics(slug).then((res) => {
        setArticles(res);
      }).catch((error)=>{ navigate("/*");})
      setIsLoading(false);
    } else {
      sortArticles(sortBy, order).then((res) => {
        setArticles(res);
        setIsLoading(false);
      })
    }
  }, [slug, order, sortBy, navigate]);

  const handleSortBy = (e) => {

    setSortby(e.target.value);
  };

  const handleOrder = (e) => {
    if (e.target.value === "ASC") {
      setOrder("DESC");
      setArticles(articles.reverse());
    } else {
      setOrder("ASC");
      setArticles(articles.reverse());
    }
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    return (
      <section>
        <SortBy
          handleSortBy={handleSortBy}
          handleOrder={handleOrder}
          order={order}
        />
        <ol>
          {articles.map((article) => {
            return (
              <section key={article.article_id} className="navbar-article"> 
                  <Article article={article} />  
              </section>
            );
          })}
        </ol>
      </section>
    );
  }
}
