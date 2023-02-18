

export default function Article({ article }) {

  const formattedDate = new Date(article.created_at)
    .toISOString()
    .replace("T", " ")
    .replace("Z", "")
    .split("")
    .slice(0, -4)
    .join("");

   
  return (
    <section className="article-design">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={`Generic ${article.topic}`} />
      <h3>Author: {article.author}</h3>
      <h3>Topic: {article.topic}</h3>
      <h5>votes: {article.votes}</h5>
      <h5>{formattedDate}</h5>
    </section>
  );
}
