// react imports
import { useState, useEffect } from "react";

// react router icons
import { Link } from "react-router-dom";

// react icons
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";

// components
import { NavLinks } from "../components";

// theme from local
const themeFromLocal = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocal());

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme == "winter" ? "dracula" : "winter";
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-200">
      <div className="align-elements navbar">
        <div className="navbar-start">
          <Link
            className="hidden rounded-full border-2 border-neutral p-1 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white md:block"
            to="/"
          >
            <MdOutlineSportsSoccer className="text-3xl" />
          </Link>
          <button className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="rounded-full border-2 border-black p-1 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
            >
              <MdOutlineSportsSoccer className="text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </button>
        </div>
        <div className="navbar-center hidden md:block">
          <ul className="menu menu-horizontal rounded-box bg-base-200">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end items-center gap-4 pr-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onClick={toggleTheme}
              defaultChecked={theme !== "winter"}
            />
            {/* sun icon */}
            <FaSun className="swap-on h-7 w-7 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-7 w-7 fill-current" />
          </label>
          <Link to="/shop" className="indicator">
            <div className="badge indicator-item badge-secondary">0</div>
            <FaShoppingCart className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
