import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import ModelCard from '../components/ModelCard';

const MyDownloadPage = () => {
    const { user } = use(AuthContext)
    const [models, setModels] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/my-downloads?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setModels(data)
            })

    }, [user])
    if (loading) {
        return <div className="">Please wait...data is loading</div>
    }
    return (
        <div>
            <div>
                <div className='w-11/12 mx-auto'>
                    <h1 className='text-5xl justify-center text-center font-bold
                 bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>My All Downloaded Model</h1>
                    <p className='text-center text-gray-500 justify-center py-2'>Orchestrate and monitor your distributed neural networks.Managed <br />
                        high-performance inference at scale</p>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                        {models.map(model => <ModelCard key={model._id} model={model} />)}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyDownloadPage;