import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserInfoAndRepos } from "../../context/github/GithubActions";
import {
  FaUserPlus,
  FaUserFriends,
  FaGithub,
  FaStore,
  FaArrowLeft,
} from "react-icons/fa";
import UserRepos from "../users/UserRepos";
import GitHubContext from "../../context/github/GithubContext";
import Spinner from "../pages/Spinner";

function User() {
  const { user, repos, loading, dispatch } = useContext(GitHubContext);
  const params = useParams();
  //functions to execute upon page load
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserInfoAndRepos(params.login);
      dispatch({
        type: "GET_USER_AND_REPOS",
        payload: userData,
      });
    };
    getUserData();
  }, [dispatch, params.login]);
  //check if loading state is true
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="w-full mx-auto mt-8">
          <div className="mb-6 ">
            <Link to="/">
              <div className="flex gap-2 items-center font-bold text-lg">
                <FaArrowLeft />
                <p>back to search</p>
              </div>
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
                  <div className="ml-2 mr-1 badge badge-accent">
                    {user.type}
                  </div>
                </h1>
                <p className="mt-2">{user.bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-md btn-outline"
                  >
                    View on Github
                  </a>
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {user.location && (
                  <div className="stat">
                    <div className="stat-title text-md">Location</div>
                    <div className="text-lg stat-value">{user.location}</div>
                  </div>
                )}
                {user.blog && (
                  <div className="stat">
                    <div className="stat-title text-md">Website</div>
                    <div className="text-lg stat-value">
                      <a href={user.blog} target="_blank" rel="noreferrer">
                        Click Me!
                      </a>
                    </div>
                  </div>
                )}
                {user.twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter</div>
                    <div className="text-lg stat-value">
                      <a
                        href={`https://twitter.com/${user.twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {user.twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="stats shadow w-full">
            <div class="stat">
              <div class="stat-figure text-accent">
                <FaUserFriends className="text-5xl" />
              </div>
              <div class="stat-title">Followers</div>
              <div class="stat-value">{user.followers}</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-accent">
                <FaUserPlus className="text-5xl" />
              </div>
              <div class="stat-title">Following</div>
              <div class="stat-value">{user.following}</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-accent">
                <FaGithub className="text-5xl" />
              </div>
              <div class="stat-title">Repositories</div>
              <div class="stat-value">{user.public_repos}</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-accent">
                <FaStore className="text-5xl" />
              </div>
              <div class="stat-title">Gists</div>
              <div class="stat-value">{user.public_gists}</div>
            </div>
          </div>
          <UserRepos repos={repos} />
        </div>
      </>
    );
  }
}

export default User;
