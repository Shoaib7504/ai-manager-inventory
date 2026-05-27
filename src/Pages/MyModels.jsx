import React, { use, useEffect, useState } from 'react';
import ModelCard from '../components/ModelCard';
import { AuthContext } from '../Context/AuthProvider';

const MyModels = () => {
    const { user } = use(AuthContext);
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ai-inventory-server-5.onrender.com/my-models?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setModels(data);
            })
            .catch(err => {
                setLoading(false); 
                console.error("Failed to fetch models:", err);
            });
    }, [user.email]);

    if (loading) {
        return <div>Please wait... data is loading</div>;
    }

    return (
        <div className='w-11/12 mx-auto px-2 sm:px-0'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl justify-center text-center font-bold bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>
                My All Created Model
            </h1>
            <p className='text-center text-gray-500 justify-center py-2 text-sm sm:text-base px-4'>
                Orchestrate and monitor your distributed neural networks. Managed{' '}
                <br className='hidden sm:block' />
                high-performance inference at scale
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                {models.map(model => <ModelCard key={model._id} model={model} />)}
            </div>
        </div>
    );
};

export default MyModels;