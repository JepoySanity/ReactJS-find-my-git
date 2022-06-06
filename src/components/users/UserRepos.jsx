import UserRepoList from "./UserRepoList";
function UserRepos({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100 mb-8 mt-8">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Recent Repos</h2>
        {repos.map((repo) => (
          <UserRepoList key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default UserRepos;
