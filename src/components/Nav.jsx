import { Link } from "react-router-dom";
import Topics from "./Topics"
export default function Nav() {
  return (
   <nav>
    <Link to="/" className="navbar">Home</Link>
    <Link to="/articles" className="navbar">All Articles</Link>
    <Topics />
    <Link to="/users" className="navbar">Users</Link>
   </nav>
  )
}
