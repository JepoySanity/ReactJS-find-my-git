import { useEffect, useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  const { dispatch } = useContext(GitHubContext);
  const clearUserInfo = () => {
    dispatch({ type: "CLEAR_USER_INFO" });
  };
  useEffect(() => {
    clearUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
