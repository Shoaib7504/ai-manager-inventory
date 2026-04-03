import React from 'react';
import Banner from '../components/Banner';

const HomePage = () => {
    return (
        <div>
           <Banner></Banner> 

           <h1 className='font-semibold text-4xl mt-9 px-10'>Featured
             <span className='bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'> Inventory</span></h1>
           <p className='px-10 text-gray-400 mt-2'>Top performing neural assets currently active in the cluster.</p>
        </div>
    );
};

export default HomePage;