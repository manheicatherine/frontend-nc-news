import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Article from "./Article";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, [articles]);

  return (
    <section>
      <ol>
        {articles.map((article) => {
          return <Article article={article} key={article.article_id} />;
        })}
      </ol>
    </section>
  );
}
