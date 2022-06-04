import { useContext } from "react";
import UserItem from "./UserItem";
import GitHubContext from "../../context/github/GithubContext";
import Spinner from "../pages/Spinner";

function UserResults() {
  const { users, loading } = useContext(GitHubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 py-6">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
