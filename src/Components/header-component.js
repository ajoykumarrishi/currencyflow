import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full p-6 bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
        <h1 className="w-full md:w-auto text-5xl font-extrabold tracking-tight text-center md:text-left">
          Currency<span className="text-orange-300">Flow</span>
        </h1>

        <nav className="w-full md:w-auto flex flex-wrap justify-center lg:justify-end lg:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-1/2 md:w-auto h-12 px-5 py-2 text-lg rounded-lg transition-all duration-300 text-center flex items-center justify-center ${
                isActive
                  ? "bg-orange-300 text-purple-900 shadow-md"
                  : "bg-white text-purple-900"
              }`
            }
          >
            Quick Convert
          </NavLink>
          <NavLink
            to="/live-rates"
            className={({ isActive }) =>
              `w-1/2 md:w-auto h-12 px-5 py-2 text-lg rounded-lg transition-all duration-300 text-center flex items-center justify-center ${
                isActive
                  ? "bg-orange-300 text-purple-900 shadow-md"
                  : "bg-white text-purple-900"
              }`
            }
          >
            Live Rates
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
