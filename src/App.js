import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import ArticleById from "./components/ArticleById";
import Topics from "./components/Topics"
import Topic from './components/Topic'
import Error from "./components/Error"
import SiginIn from "./components/SignIn"

function App() {
  return (
    <div className="App">
      <h1 className="headerH1">NC NEWS</h1>
      <header className="App-header">
        <Nav />
        <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:slug" element={<Topic />} />
          <Route path="/article/" element={<Topic />} />
          <Route path="/users" element={<SiginIn />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
