import React, { use,  } from 'react';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { IoLogIn, IoLogOut } from 'react-icons/io5';

const Navbar = () => {
    const { user, Logout } = use(AuthContext);

    return (
        <div className='p-5 flex justify-evenly items-center'>
            <div className='flex gap-10 text-xl font-semibold'>
                <h1>Model Inventory</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/all-models">All Models</NavLink>
                <NavLink to="/add-models">Add Models</NavLink>
            </div>
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-9 border-2 border-gray-300 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <div className=" pb-3 border-b border-b-gray-200">
                                <li className="text-sm font-bold">{user.displayName}</li>
                                <li className="text-xs">{user.email}</li>
                            </div>
                            <li className="mt-3">
                                <Link to={"/profile"}>
                                    <FaUser /> Profile
                                </Link>
                            </li>

                            <li>
                                <Link to={"/my-models"}>
                                    My Models
                                </Link>
                            </li>

                            <li >
                                <Link to={"/my-downloads"}>
                                    My Downloads
                                </Link>
                            </li>

                            <li>
                                <a>
                                    {" "}
                                    <FaGear /> Settings
                                </a>
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
                        to={"/auth/login"}
                        className="btn rounded-xl px-4 py-2 border-gray-300 flex items-center justify-center bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white"
                    >
                        {" "}
                        <IoLogIn /> Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;