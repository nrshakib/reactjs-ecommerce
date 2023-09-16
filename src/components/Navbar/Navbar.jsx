import React from "react";
import "./Navbar.css";
import { AiOutlineLogin } from "react-icons/ai";

import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:px-14 xl:px-14 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="e-commerce" />
          <p className="invisible lg:visible">e-commerce</p>
        </a>
      </div>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden  mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li>
            <a>Offers</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex md:flex lg:mr-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li>
            <a>Offers</a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control mx-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-auto"
          />
        </div>
        <div>
          <button className="flex">
            <p className="mr-1">Log In</p>
            <AiOutlineLogin className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
