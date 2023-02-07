import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import Article from "./Article";

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
    return <Article article={article} />;
  }
}
