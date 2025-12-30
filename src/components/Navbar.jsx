import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-around h-16 items-center">
      <NavLink to="/" className="text-xl font-bold text-(--text)">
        ReduxApp
      </NavLink>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
    px-4 py-2 text-lg font-medium transition-all duration-300
    border-b-2
    ${
      isActive
        ? "text-(--primary) border-(--primary)"
        : "text-(--text-muted) border-transparent hover:text-(--text) hover:border-(--border)"
    }
    `
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `
    px-4 py-2 text-lg font-medium transition-all duration-300
    border-b-2
    ${
      isActive
        ? "text-(--primary) border-(--primary)"
        : "text-(--text-muted) border-transparent hover:text-(--text) hover:border-(--border)"
    }
    `
          }
        >
          Collection
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
