import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% lg:px-14 xl:px-14 ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="e-commerce" />
          <p className="invisible lg:visible">e-commerce</p>
        </Link>
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
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link tp="/offers">Offers</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex md:flex lg:mr-56 lg:text-gray-800 font-medium ">
        <ul className="menu menu-horizontal px-1 text-xl ">
          <li className="hover:bg-sky-300 hover:rounded-lg focus:ring-violet-500">
            <Link className="hover:text-black" to="/products">
              Products
            </Link>
          </li>
          <li className="hover:bg-sky-300 hover:rounded-lg">
            <Link className="hover:text-black" to="/cart">
              Cart
            </Link>
          </li>
          <li className="hover:bg-sky-300 hover:rounded-lg ">
            <Link className="hover:text-black " to="/offers">
              Offers
            </Link>
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
          <Link to="/login" className="flex  text-gray-800 ">
            <p className="mr-1 font-medium">Log In</p>
            <AiOutlineLogin className="mt-1" />
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-20"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
