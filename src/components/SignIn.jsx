import { getUser } from "../utils/api";
import React, { useEffect, useState } from "react";
import UserProvider from "../contents/User";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function SignIn() {
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser().then((res) => {
      setUsersList(res);
    });
  }, [usersList]);

  const login = (e) => {
    setUser(e.target.value);
    
  };

  if (user === "") {
    return (
      <div>
        <h3>Click username to log in:</h3>
        {usersList.map((user) => {
          return (
            <section key={user.username}>
              <h4>{user.name}</h4>
              <img src={user.avatar_url} alt={`Generic ${user.username}`} />
              <button onClick={(e) => login(e)} value={user.username}>
                {user.username}
              </button>
              {/* <Link
          to={`/users/${user.username}`}
          className="navbar-article"
        >{user.username}</Link> */}
            </section>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Log out</h3>
        
      </div>
    );
  }
}
