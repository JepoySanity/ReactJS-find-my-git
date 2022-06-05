import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubContext from "../../context/github/GithubContext";
import Spinner from "../pages/Spinner";

function User() {
  const { user, getUserInfo, loading, setLoading } = useContext(GitHubContext);
  const params = useParams();

  useEffect(() => {
    setLoading();
    getUserInfo(params.login);
  }, []);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="w-full mx-auto">
          <div className="mb-4">
            <Link to="/" className="btn btn-sm rounded">
              Back to search
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="card rounded-lg shadow-xl image-full">
                <figure>
                  <img src={user.avatar_url} alt="" />
                </figure>
                <div className="card-body justify-end">
                  <div class="items-end">
                    <h2 className="text-white card-title mb-0">{user.name}</h2>
                  </div>
                  <div class="items-end">
                    <p className="text-white">{user.login}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl text-white card-title">
                  {user.name}
                  <div className="ml-2 mr-1 badge badge-success">
                    {user.type}
                  </div>
                  {user.location && (
                    <div className="mx-1 badge badge-info">{user.location}</div>
                  )}
                </h1>
                <p className="mt-2">{user.bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default User;
