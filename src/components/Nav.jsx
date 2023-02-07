import { Link } from "react-router-dom";
export default function Nav() {
  return (
   <nav>
    <Link to="/" className="navbar">Home</Link>
    <Link to="/articles" className="navbar">All Articles</Link>
   </nav>
  )
}
