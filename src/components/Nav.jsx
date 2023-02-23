import { Link } from "react-router-dom";
import Topics from "./Topics"
import {UserContext} from "../contents/User";
import { useContext } from "react";

export default function Nav() {
  const {user} = useContext(UserContext);
  return (
   <nav>
    <Link to="/" className="navbar">Home</Link>
    <Link to="/articles" className="navbar">All Articles</Link>
    <Topics />
    {user? <Link to="/users" className="Usernavbar">{user}</Link> : <Link to="/users" className="navbar">Log In</Link>}

   </nav>
  )
}
