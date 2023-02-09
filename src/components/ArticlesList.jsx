import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Article from "./Article";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [articles]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <section  className="articlesContainer">
        <ol >
          {articles.map((article) => {
            return (
              <li key={article.article_id} >
                <Link to={`/articles/${article.article_id}`} className="navbar-article">
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
