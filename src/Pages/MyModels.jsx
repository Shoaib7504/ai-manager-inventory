import React, { use, useEffect, useState } from 'react';
import ModelCard from '../components/ModelCard';
import { AuthContext } from '../Context/AuthProvider';

const MyModels = () => {
    const { user } = use(AuthContext)
    const [models, setModels] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://ai-inventory-manager-lovat.vercel.app/my-models?emai= ${user.email}`,
            {
                headers: {
                    authorization: `Bearer ${user.accessToken}`,
                },
            }
        )
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setModels(data)

            })
    }, [])
    if (loading) {
        return <div className="">Please wait...data is loading</div>
    }
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-5xl justify-center text-center font-bold
                 bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>My All Created Model</h1>
                <p className='text-center text-gray-500 justify-center py-2'>Orchestrate and monitor your distributed neural networks.Managed <br />
                    high-performance inference at scale</p>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                    {models.map(model => <ModelCard key={model._id} model={model} />)}
                </div>

            </div>
        </div>
    );
};

export default MyModels;