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

export function getArticlesByTopics(topic) {
  return articlesApi
    .get("./articles", { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
}
export function getArticleById(id) {
  return articlesApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article[0];
  });
}

export function getCommentsOfArticle(id) {
  return articlesApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function sortArticles(sortBy, order) {
  return articlesApi
    .get("./articles", {
      params: { sort_by: sortBy, order: order },
    })
    .then(({ data }) => {
      return data.articles;
    });
}
export function updateArticleVote(id, votes) {
  const patchBody = { inc_votes: votes };
  return articlesApi.patch(`/articles/${id}`, patchBody);
}

export function postNewComment(id, body) {
  return articlesApi.post(`/articles/${id}/comments`, body);
}

export function getTopics() {
  return articlesApi.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
}

export function deleteNewComment(comment_id) {
  return articlesApi.delete(`/comments/${comment_id}`);
}

export function getUsers() {
  return articlesApi.get(`/users`).then(({ data }) => {
    return data.users
  });
}

export function getUser() {
  return articlesApi.get(`/users`).then(({ data }) => {
    return data.users
  });
}
