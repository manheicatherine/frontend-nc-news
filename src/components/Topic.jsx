import React, { useEffect } from "react";
import { getArticlesByTopics } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Article from "./Article";

export default function Topic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  
  useEffect(() => {
    getArticlesByTopics(slug).then((res) => {
      setArticles(res);
    });
    setIsLoading(false);
  }, [articles, slug]);

  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    return (
      <section>
        <ol>
          {articles.map((article) => {
            return (
              <section key={article.article_id} className="allarticles">
                <Link to={`/articles/${article.article_id}`} className="navbar">
                  <Article article={article} />
                </Link>
              </section>
            );
          })}
        </ol>
      </section>
    );
  }
}
