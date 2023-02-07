import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Article from "./Article";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false)
    });
  }, [articles]);


  if(isLoading){
  return (<h2>Loading...</h2>)
  } else{
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
}
