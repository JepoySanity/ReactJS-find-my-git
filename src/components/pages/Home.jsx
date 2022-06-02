import UserResults from "../users/UserResults";

function Home() {
  return (
    <>
      <input
        type="text"
        placeholder="Search User . . ."
        class="input input-bordered input-lg w-full"
      />
      <UserResults />
    </>
  );
}

export default Home;
