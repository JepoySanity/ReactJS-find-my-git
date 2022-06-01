import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Navbar({ title }) {
  return (
    <div className="container mx-auto">
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold text-white"
          >
            <FaGithub className="mr-2" />
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
  );
}

Navbar.defaultProps = {
  title: "FindMyGIT",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
