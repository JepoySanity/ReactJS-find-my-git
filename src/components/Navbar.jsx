import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Navbar({ title }) {
  return (
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
          to="/"
          className="btn btn-ghost normal-case text-lg font-bold text-white"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "FindMyGIT",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
