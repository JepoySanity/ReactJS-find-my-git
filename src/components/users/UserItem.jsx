function UserItem({ user: { login, avatar_url } }) {
  return (
    <>
      <div class="alert alert-warning shadow-lg">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar_url} />
            </div>
          </div>
          <h1 className="text-xl font-bold p-4">{login}</h1>
        </div>
      </div>
    </>
  );
}

export default UserItem;
