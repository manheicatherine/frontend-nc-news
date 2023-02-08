import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getArticleById,
  getCommentsOfArticle,
} from "../utils/api";
import Comments from "./Comments";
import VotesArticle from "./VotesArticle";

export default function ArticleById() {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  //if I set conditional logic the page stay in loading state
  //I press the button which turns NaN
  //Also, the button show AxiosError
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getArticleById(article_id),
      getCommentsOfArticle(article_id),
    ]).then((results) => {
      setArticle(results[0]);
      setComments(results[1]);
    });
    setVotes(article.votes);
    setIsLoading(false);
  }, [article_id]);

  if (isLoading && !votes) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <section>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={`Generic ${article.topic}`} />
        <h3>Topic: {article.topic}</h3>
        <h3>Author: {article.author}</h3>
        <h2>Votes:</h2>
        <VotesArticle article_id ={article_id} votes = {article.votes} />
        <h4>
          {article.body}
          <br></br>
          <br></br>
          {article.created_at}
        </h4>
        <h3 className="comment-title">COMMENTS:</h3>
        <h5>
          <ol>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="comment-card">
                  <Comments comment={comment} />
                </li>
              );
            })}
          </ol>
        </h5>
      </section>
    );
  }
}
