import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/character">Characters</NavLink>
        </div>
        <div>
          <NavLink to="/world">Worlds</NavLink>
        </div>
        <div>
          <NavLink to="/scenario">Scenarios</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
