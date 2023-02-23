export default function SignIn() {
  const [usersList, setUsersList] = useState([]);
  const {user, setUser} = useContext(UserContext);
  const [userDetails, setUserDetails] = useState([])

  useEffect(() => {
    getUser().then((res) => {
      setUsersList(res);
    });
  }, [usersList]);

  const login = (e) => {
    setUser(e.target.value);
   
  };

  const handleLogOut =()=>{
    setUser("")
  }

  if (user === "") {
    return (
      <div>
        <h3>Click username to log in:</h3>
        {usersList.map((user) => {
          return (
            <section key={user.username}>
              <h4>{user.name}</h4>
              <img class="userPic" src={user.avatar_url} alt={`Generic ${user.username}`} />
              <button onClick={(e) => login(e)} value={user.username}>
                {user.username}
              </button>
            </section>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
       <h3>Click the button to log out!</h3>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    );
  }
}