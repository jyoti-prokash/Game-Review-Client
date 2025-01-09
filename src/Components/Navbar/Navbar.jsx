import React, { useContext } from "react";
import logo from "../../assets/logo/pgk logo.jpg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Theme from "../../Theme/Theme";
import { Tooltip } from "react-tooltip";
import "./Navbar.css"
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allreviews">All Reviews</NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink to="/addreviews">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/myreviews">My Review</NavLink>
          </li>
          <li>
            <NavLink to="/watch">Game WatchList</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar lg:px-44 lg:py-4 ${
        location.pathname === "/" && "fixed z-50 bg-opacity-30 bg-white backdrop-blur-sm"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box bg-red-400 z-[50] mt-3 w-52 p-2 text-white"
          >
            {links}
          </ul>
        </div>
        <img
          className="w-20 rounded-full hidden lg:block"
          src={logo}
          alt="pgk logo"
        />
        <Link to="/" className="lg:ml-5 text-xl font-bold">
          ProGamerKash
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-3">
          <Theme></Theme>
        </div>
        {user ? (
          <div className="flex justify-center items-center gap-5">
            <Tooltip
              className="z-10"
              anchorSelect="#showTooltip"
              content={user.displayName}
            ></Tooltip>
            <div className="avatar online ">
              <div className="w-14 lg:w-16 rounded-full">
                <Link>
                  <img id="showTooltip" src={user.photoURL} />
                </Link>
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="self-center px-2 lg:px-5 py-3 font-semibold rounded bg-gradient-to-r from-[#e1296f] to-[#f9493b] dark:text-gray-50"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex">
            <Link to="/login">
              <button className=" font-bold btn bg-[#2b3440] text-white mr-5 px-6">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-white hidden lg:block font-bold btn bg-gradient-to-r from-[#e1296f] to-[#f9493b]">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
