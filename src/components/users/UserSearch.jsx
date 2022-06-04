import { useState } from "react";

function UserSearch() {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form id="search_user">
        <div className="flex">
          <input
            type="text"
            placeholder="Search User . . ."
            className="input input-bordered input-lg w-full rounded-r-none"
            value={search}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-lg rounded-l-none">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default UserSearch;
