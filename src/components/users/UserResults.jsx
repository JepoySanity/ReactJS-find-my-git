import { useEffect, useState } from "react";
function UserResults() {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();
    setusers(data);
    setisLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user, key) => (
          <h1 key={key}>{user.login}</h1>
        ))}
      </div>
    );
  } else {
    return <h1>gegegege.....</h1>;
  }
}

export default UserResults;
