import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import ArticleById from "./components/ArticleById";

function App() {
  return (
    <div className="App">
      <h1>NC NEWS</h1>
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
