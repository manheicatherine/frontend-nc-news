export default function Article({ article }) {
  return (
    <section>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={`Generic ${article.topic}`} />
      <h3>Topic: {article.topic}</h3>
      <h3>Author: {article.author}</h3>
      <h5>Author: {article.author}</h5>
    </section>
  );
}
