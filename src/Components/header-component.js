import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full p-6 bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <h1 className="text-5xl font-extrabold tracking-tight">
          Currency<span className="text-orange-300">Flow</span>
        </h1>

        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 text-lg rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-orange-300 text-purple-900 shadow-md"
                  : "hover:bg-white hover:text-purple-900"
              }`
            }
          >
            Quick Convert
          </NavLink>
          <NavLink
            to="/live-rates"
            className={({ isActive }) =>
              `px-5 py-2 text-lg rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-orange-300 text-purple-900 shadow-md"
                  : "hover:bg-white hover:text-purple-900"
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
