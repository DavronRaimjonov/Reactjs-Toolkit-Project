import { Link, useLocation } from "react-router-dom";
import { links, logo } from "../../contrains";
import "./Navbar.scss";

const Navbar = () => {
  const pathname = useLocation().pathname;
  return (
    <nav className="navbar">
      <div className="container flex">
        <nav className="navbar_logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </nav>
        <nav className="navbar_links">
          {links.map((item) => (
            <Link
              className={`link ${pathname === item.link ? "link_active" : ""}`}
              key={item.id}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
