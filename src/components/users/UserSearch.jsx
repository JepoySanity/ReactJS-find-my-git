import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [search, setSearch] = useState("");
  const { users } = useContext(GitHubContext);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearchForm = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("input is required");
    } else {
      // @todo -search
      setSearch("");
    }
  };

  return (
    <>
      <form id="search_user" onSubmit={submitSearchForm}>
        <div className="flex">
          <input
            type="text"
            className="input input-lg w-full rounded-r-none bg-white text-black"
            value={search}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-lg rounded-l-none">
            Search
          </button>
        </div>
        {users.length > 0 && (
          <button type="submit" className="btn btn-lg mt-4">
            Clear
          </button>
        )}
      </form>
    </>
  );
}

export default UserSearch;
