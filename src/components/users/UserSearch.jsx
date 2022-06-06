import { useState, useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { searchUsers } from "../../context/github/GithubActions";
import GitHubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [search, setSearch] = useState("");
  const { users, dispatch, clearUsers, loading, setLoading } =
    useContext(GitHubContext);
  const { setAlert, dismissAlert } = useContext(AlertContext);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearchForm = async (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Ooooops! Search cannot be empty!", "error");
      setTimeout(() => {
        dismissAlert();
      }, 3000);
    } else {
      setLoading();
      const users = await searchUsers();
      dispatch({ type: "GET_USERS", payload: users });
      setSearch("");
    }
  };

  const clearUsersState = (e) => {
    e.preventDefault();
    clearUsers();
  };

  return (
    <>
      <form id="search_user" onSubmit={submitSearchForm}>
        <div className="flex">
          {loading === false && users.length === 0 && (
            <>
              <input
                type="text"
                className="input input-lg w-full rounded-r-none bg-white text-black"
                value={search}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-lg rounded-l-none">
                Search
              </button>
            </>
          )}
        </div>
        {users.length > 0 && (
          <button onClick={clearUsersState} className="mt-8 font-bold text-lg">
            <div className="flex gap-2 items-center">
              <FaRegTimesCircle />
              <p>clear search</p>
            </div>
          </button>
        )}
      </form>
    </>
  );
}

export default UserSearch;
