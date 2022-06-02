import { Link } from "react-router-dom";
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-warning">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full ring ring-primary shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="card-title text-black font-bold text-xl">{login}</h1>
          <Link to={`users/${login}`} className="text-primary underline">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
