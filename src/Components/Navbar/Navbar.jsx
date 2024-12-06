import React, { useContext } from 'react';
import logo from '../../assets/logo/pgk logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Theme from '../../Theme/Theme';
import { Tooltip } from 'react-tooltip';
const Navbar = () => {
  const navigate = useNavigate();
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    navigate('/');
  }
    const links = <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allreviews">All Reviews</NavLink></li>
            
            <> 
            <li><NavLink to="/addreviews">Add Review</NavLink></li>
            <li><NavLink to="/myreviews">My Review</NavLink></li>
            <li><NavLink to="/watchlist">Game WatchList</NavLink></li>
            </>
            
    </>
    return (
        <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[50] mt-3 w-52 p-2 text-white">
        {
            links
        }
      </ul>
    </div>
    <img className='w-20 rounded-full' src={logo} alt="pgk logo" />
    <a className="ml-5 text-xl font-bold">ProGamerKash</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {
            links
        }
    </ul>
  </div>
  <div className="navbar-end">
    <div className='mr-3'>
        <Theme></Theme>
    </div>
    {
                        user ? 
                        <div className='flex justify-center items-center gap-5'>
                          <Tooltip className='z-10' anchorSelect="#showTooltip" content={user.displayName}>
                          </Tooltip>
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                <Link><img id='showTooltip' src={user.photoURL} /></Link>     
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="self-center px-8 py-3 font-semibold rounded bg-gradient-to-r from-[#e1296f] to-[#f9493b] dark:text-gray-50">Log Out</button>
                        </div>
                            :
                            <div>
                                <Link to="/login" className=" font-bold btn bg-[#2b3440] text-white mr-5">Login</Link>
                                <Link to="/register" className="text-white font-bold btn bg-gradient-to-r from-[#e1296f] to-[#f9493b]">Register</Link>
                            </div>
                    }
  </div>
</div>
    );
};

export default Navbar;