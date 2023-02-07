import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";

export default function ArticleById() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();


  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((res) => {
      setArticle(res[0]);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return ( <section>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={`Generic ${article.topic}`} />
        <h3>Topic: {article.topic}</h3>
        <h3>Author: {article.author}</h3>
        <h4>
          {article.body}
          <br></br>
          <br></br>
          {article.created_at}
        </h4>
      </section>);
  }
}
