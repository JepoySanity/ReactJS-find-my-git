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
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home" className="text-white font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-bold">
              About
            </Link>
          </li>
        </ul>
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
