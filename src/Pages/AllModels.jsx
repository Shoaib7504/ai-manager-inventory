import React from 'react';
import { useLoaderData } from 'react-router';
import AllModelCard from '../components/AllModelCard';

const AllModels = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-5xl justify-center text-center font-bold bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>All Model Explorer</h1>
            <p className='text-center text-gray-500 justify-center py-2'>Orchestrate and monitor your distributed neural networks.Managed <br />
                high-performance inference at scale</p>


            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-7 gap-y-4">
                {
                    data.map(result => <AllModelCard key={result.id} result={result} />)
                }

            </div>
        </div>
    );
};

export default AllModels;