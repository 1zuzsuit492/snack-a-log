import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <div className="pages">
            {" "}
            <Link to="/">🅷🅾🅼🅴</Link> <Link to="/snacks">Snacks</Link>
          </div>
          <Link to="snacks/new" id="new">
            New Snack
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
