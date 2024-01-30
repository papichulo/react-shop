import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between pt-6 text-sm font-semibold leading-6 lg:pt-8 text-slate-700 dark:text-slate-200">
      <nav>
        <ul className="flex items-center justify-between list-none gap-x-8">
          <li>
            <NavLink to="/">Start</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
      <div id="search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
