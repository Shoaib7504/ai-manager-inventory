import React from 'react';
import Banner from '../components/Banner';
import Image from '../assets/ChatGPT Image Apr 4, 2026, 10_17_20 AM.png'
import { FaRegCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';
const HomePage = () => {

    const data = {
        name: "BERT",
        framework: "TensorFlow",
        useCase: "NLP",
        dataset: "Wikipedia",
        description:
            "A transformer-based model for natural language processing tasks like text classification.",
        image: "https://via.placeholder.com/600x300", // replace with your real image
        createdBy: "user@example.com",
        createdAt: "2025-10-28T11:54:00.000Z",
        purchased: 10,
    };
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>

            <h1 className='font-semibold text-4xl mt-9 px-10'>Featured
                <span className='bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'> Inventory</span></h1>
            <p className='px-10 text-gray-400 mt-2'>Top performing neural assets currently active in the cluster.</p>


            <div className='flex gap-4 justify-center mt-20'>
                <div className=''>
                    <img className='w-lg h-120 rounded-xl' src={Image} alt="" />
                </div>
                <div className='rounded-xs shadow-2xs px-6 py-3  space-y-2'>
                    <h1 className='text-5xl font-bold bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>The Core of Intelligence</h1>
                    <p className='font-medium text-teal-400'>Architecting Progress</p>
                    <h1 className='text-5xl font-bold'>Intelligence</h1>
                    <p className='text-gray-500'>Artificial Intelligence is no longer just a buzzword—it is the foundational <br />
                        infrastructure of modern innovation. At the heart of this revolution are neural <br />
                        networks: mathematical structures inspired by biological brains, capable of <br />
                        learning patterns from vast amounts of data.</p>

                    <p className='font-medium text-lg text-teal-500'>Versioned Reality</p>
                    <p className='text-gray-500'>Maintaining an inventory of these models is critical. As datasets drift and <br />
                        architectures evolve, Editorial Intelligence provides the scaffolding needed <br />
                        to ensure reproducibility, transparency, and safety in machine learning workflows.</p>


                    <div className='flex justify-between px-4'>
                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium'>High Availability</h2>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium'>Drift Detection</h2>
                        </div>
                    </div>

                    <div className='flex justify-between px-4'>
                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium'>Bias Auditing</h2>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium'>Edge Optimized</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-80 mt-15 bg-teal-600 rounded-xl space-y-3 '>
                <h1 className='text-5xl text-white font-bold text-center justify-center py-5'>
                    Ready to curating your AI portfolio?</h1>
                <p className='text-teal-900 font-medium text-lg justify-center text-center mt-3'>
                    Join the world's leading research teams and engineers who manage their AI <br />
                    lifecycles with Editorial Intelligence.</p>
                <div className='flex justify-center gap-4 mt-4 items-center'>

                    <Link to="/auth/register" className='px-8 py-4 bg-white text-lg text-teal-600 rounded-2xl'>Register Account</Link>
                    <Link className='px-8 py-4 shadow-2xl text-lg border-dotted text-white rounded-2xl '>Request Demo</Link>
                </div>
            </div>


            <div className="w-[340px] rounded-2xl overflow-hidden bg-[#0f172a] text-white shadow-lg border border-cyan-500/20">

                {/* Top Image */}
                <div className="relative">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-[180px] object-cover"
                    />
                    <span className="absolute top-3 right-3 text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-md">
                        ACTIVE
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">

                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                        Transformer Model
                    </p>

                    <h2 className="text-xl font-semibold">{data.name}</h2>

                    <p className="text-sm text-gray-400">
                        {data.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-gray-800 px-2 py-1 rounded">
                            {data.framework}
                        </span>
                        <span className="bg-gray-800 px-2 py-1 rounded">
                            {data.useCase}
                        </span>
                        <span className="bg-gray-800 px-2 py-1 rounded">
                            {data.dataset}
                        </span>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-3">
                        <span className="text-xs text-gray-500">
                            Purchases: {data.purchased}
                        </span>

                        <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
                            <Download size={16} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;