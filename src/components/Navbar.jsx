import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { IoLogIn, IoLogOut, IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const { user, Logout } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `transition-colors hover:text-teal-500 ${isActive ? 'text-teal-500 font-bold' : ''}`;

    return (
        <nav className='px-4 sm:px-6 py-4 flex justify-between items-center relative z-50'>

            {/* Brand */}
            <Link to="/" className='text-lg sm:text-xl font-bold whitespace-nowrap'>
                Model Inventory
            </Link>

            {/* Desktop nav links */}
            <div className='hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-semibold'>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/all-models" className={navLinkClass}>All Models</NavLink>
                <NavLink to="/add-models" className={navLinkClass}>Add Models</NavLink>
            </div>

            {/* Right side: avatar or login + hamburger */}
            <div className="flex items-center gap-3">

                {/* Avatar dropdown — always visible when logged in */}
                {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-9 border-2 border-gray-300 rounded-full overflow-hidden">
                                <img
                                    alt="User avatar"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <div className="pb-3 border-b border-b-gray-200">
                                <li className="text-sm font-bold px-2">{user.displayName}</li>
                                <li className="text-xs px-2 text-gray-500">{user.email}</li>
                            </div>
                            <li className="mt-3">
                                <Link to="/profile"><FaUser /> Profile</Link>
                            </li>
                            <li>
                                <Link to="/my-models">My Models</Link>
                            </li>
                            <li>
                                <Link to="/my-downloads">My Downloads</Link>
                            </li>
                            <li>
                                <a><FaGear /> Settings</a>
                            </li>
                            <li>
                                <button
                                    onClick={Logout}
                                    className="btn btn-xs text-left bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white"
                                >
                                    <IoLogOut /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link
                        to="/auth/login"
                        className="hidden md:flex btn rounded-xl px-4 py-2 border-gray-300 items-center justify-center bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white text-sm gap-1"
                    >
                        <IoLogIn /> Login
                    </Link>
                )}

                {/* Hamburger — mobile only */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col px-6 py-4 gap-4 text-base font-semibold z-50">
                    <NavLink
                        to="/"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/all-models"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        All Models
                    </NavLink>
                    <NavLink
                        to="/add-models"
                        className={navLinkClass}
                        onClick={() => setMenuOpen(false)}
                    >
                        Add Models
                    </NavLink>
                    {!user && (
                        <Link
                            to="/auth/login"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 btn rounded-xl px-4 py-2 bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white text-sm w-fit"
                        >
                            <IoLogIn /> Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;