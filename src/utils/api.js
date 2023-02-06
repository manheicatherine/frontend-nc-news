import axios from "axios";

const itemsApi = axios.create({
  baseURL: "https://catherine-nc-news.onrender.com/api"
});
export function getArticles() {
 return itemsApi
    .get("./articles")
    .then(({ data }) => {
        return data.articles;
    });
}
