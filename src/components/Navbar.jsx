import React from 'react';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='p-5 flex justify-between items-center'>
            <div className='flex gap-10 text-xl font-semibold'>
                <h1>Model Inventory</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/all-models">All Models</NavLink>
                <NavLink to="/add-models">Add Models</NavLink>
            </div>
            <div>
                <Link className='bg-linear-to-r from-[#14B8A6] to-[#6366F1] hover:bg-[#0D9488]
                 text-white font-medium px-5 py-2.5 rounded-lg' to="/auth/login" >Login</Link>
            </div>
        </div>
    );
};

export default Navbar;