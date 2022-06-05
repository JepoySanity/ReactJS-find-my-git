function UserRepos({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Recent Repos</h2>
        {repos.map((repo) => (
          <h1>{repo.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default UserRepos;
