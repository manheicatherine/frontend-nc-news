import { useState, useEffect } from "react";
import { UserContext } from "../contents/User";
import { useContext } from "react";
import { getUser } from "../utils/api";

export default function SignIn() {
  const [usersList, setUsersList] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUser().then((res) => {
      setUsersList(res);
    });
  }, [usersList, user]);

  const login = (e) => {
    setUser(e.target.value);
  };

  const handleLogOut = () => {
    setUser("");
  };

  if (user === "") {
    return (
      <div>
        <h3 >Click username to log in:</h3>
        {usersList.map((user) => {
          return (
            <section key={user.username}>
              <h4>{user.name}</h4>
              <img
                className="userPic"
                src={user.avatar_url}
                alt={`Generic ${user.username}`}
              />
              <input
                className="username"
                type="button"
                value={user.username}
                onClick={(e) => login(e)}
              ></input>
            </section>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h3 >Click the button to log out!</h3>
        <button onClick={handleLogOut} className="username">Log out</button>
      </div>
    );
  }
}
