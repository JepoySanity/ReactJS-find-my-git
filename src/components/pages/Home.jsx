import { useEffect, useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  const { clearUserInfo } = useContext(GitHubContext);
  useEffect(() => {
    clearUserInfo();
  }, []);
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
