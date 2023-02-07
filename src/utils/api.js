import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://catherine-nc-news.onrender.com/api",
});

export function getArticles(article_id) {
  return articlesApi
    .get("./articles", { params: { article_id: article_id } })
    .then(({ data }) => {
      return data.articles;
    });
}
export function getArticleById(id) {
  return articlesApi
    .get(`/articles/${id}`)
    .then(({ data }) => {
      return data.article;
    });
}

export function getCommentsOfArticle(id) {
  return articlesApi
    .get(`/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}
