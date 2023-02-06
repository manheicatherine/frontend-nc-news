import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

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
          return (
            <section key={article.article_id}>
              <li>
                <h2>{article.title}</h2>
                <img src={article.article_img_url} alt={article.article_id}/>
                <h3>Topic: {article.topic}</h3>
                <h3>Author: {article.author}</h3>
                <h4>
                  {article.body}
                  <br></br>
                  {article.created_at}
                </h4>
              </li>
            </section>
          );
        })}
      </ol>
    </section>
  );
}
