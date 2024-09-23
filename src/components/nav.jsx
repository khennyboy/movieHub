import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <NavLink to="/" className="flex items-center gap-4">
      <img src="/tv.png" alt="moviebox" />
      <h3 className="text-lg">MovieBox</h3>
    </NavLink>
  );
};

export default Nav;
