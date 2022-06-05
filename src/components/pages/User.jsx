import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubContext from "../../context/github/GithubContext";

function User() {
  const { user, getUserInfo } = useContext(GitHubContext);
  const params = useParams();

  useEffect(() => {
    getUserInfo(params.login);
  }, []);
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-lg rounded">
            Back to search
          </Link>
        </div>
      </div>
    </>
  );
}

export default User;
