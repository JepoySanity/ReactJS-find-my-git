import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithubAlt, FaSearch } from "react-icons/fa";
function Navbar({ title }) {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <nav className="navbar">
          <div className="flex-1">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl font-bold text-white"
            >
              <FaGithubAlt className="mr-2 text-2xl" />
              <FaSearch className="mr-2 text-2xl text-accent" />
              {title}
            </Link>
          </div>
          <div className="flex-none">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-lg font-bold text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost normal-case text-lg font-bold text-white"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "FindMyGIT",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
