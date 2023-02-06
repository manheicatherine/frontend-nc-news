import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <h1>NC NEWS</h1>
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/articles" element={<ArticlesList />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
