import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Image from '../assets/ChatGPT Image Apr 4, 2026, 10_17_20 AM.png'
import { FaRegCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';
import ModelCard from '../components/ModelCard';
import LoadingSpinner from '../components/LoadingSpinner';


const HomePage = () => {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slowConnection, setSlowConnection] = useState(false);
    const BASE_URL = "https://ai-inventory-server-one.vercel.app";

    useEffect(() => {
        const fetchModels = async () => {
            const slowTimer = setTimeout(() => setSlowConnection(true), 4000);

            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 35000); // 35s timeout

                const res = await fetch(`${BASE_URL}/models`, {
                    signal: controller.signal,
                });

                clearTimeout(timeoutId);
                clearTimeout(slowTimer);
                setSlowConnection(false);

                const data = await res.json();

                if (!res.ok) {
                    console.error("Server error:", data.message);
                    setLoading(false);
                    return;
                }

                setModels(data.slice(0, 8));
                setLoading(false);
            } catch (err) {
                clearTimeout(slowTimer);
                if (err.name === 'AbortError') {
                    setError("Server took too long to respond. Please refresh the page.");
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

    if (loading) return (
        <div className='flex flex-col items-center justify-center min-h-[60vh] gap-3'>
            <LoadingSpinner />
            {slowConnection && (
                <div className='text-center mt-4 space-y-1'>
                    <p className='text-teal-500 text-sm font-medium'>
                        Server is waking up, please wait...
                    </p>
                    <p className='text-gray-500 text-xs'>
                        This can take up to 30 seconds on first load.
                    </p>
                </div>
            )}
        </div>
    );

    if (error) return (
        <div className='flex flex-col items-center justify-center min-h-[60vh] gap-3'>
            <p className='text-red-400 text-lg font-medium'>Something went wrong</p>
            <p className='text-gray-500 text-sm'>{error}</p>
            <button
                onClick={() => window.location.reload()}
                className='mt-2 px-6 py-2 bg-teal-600 text-white rounded-xl text-sm hover:bg-teal-700 transition'
            >
                Try Again
            </button>
        </div>
    );

    return (
        <div className='w-11/12 mx-auto'>
            <Banner />

            <h1 className='font-semibold text-2xl sm:text-3xl lg:text-4xl mt-9 px-4 sm:px-10'>
                Featured
                <span className='bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'> Inventory</span>
            </h1>
            <p className='px-4 sm:px-10 text-gray-400 mt-2 text-sm sm:text-base'>
                Top performing neural assets currently active in the cluster.
            </p>

            <div className='w-full px-2 sm:px-5 py-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-7 gap-y-4">
                    {models.map(model => <ModelCard key={model._id} model={model} />)}
                </div>
            </div>

            {/* Info Section */}
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-4 justify-center mt-12 sm:mt-20'>
                <div className='w-full lg:w-auto'>
                    <img
                        className='w-full lg:w-200 h-64 sm:h-80 lg:h-120 rounded-xl object-cover'
                        src={Image}
                        alt="AI Intelligence"
                    />
                </div>
                <div className='rounded-xs shadow-2xs px-4 sm:px-6 py-3 space-y-3 lg:space-y-2'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>
                        The Core of Intelligence
                    </h1>
                    <p className='font-medium text-teal-400 text-sm sm:text-base'>Architecting Progress</p>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Intelligence</h1>
                    <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
                        Artificial Intelligence is no longer just a buzzword—it is the foundational
                        infrastructure of modern innovation. At the heart of this revolution are neural
                        networks: mathematical structures inspired by biological brains, capable of
                        learning patterns from vast amounts of data.
                    </p>
                    <p className='font-medium text-base sm:text-lg text-teal-500'>Versioned Reality</p>
                    <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
                        Maintaining an inventory of these models is critical. As datasets drift and
                        architectures evolve, Editorial Intelligence provides the scaffolding needed
                        to ensure reproducibility, transparency, and safety in machine learning workflows.
                    </p>

                    <div className='grid grid-cols-2 gap-3 px-0 sm:px-4 pt-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium text-sm sm:text-base'>High Availability</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium text-sm sm:text-base'>Drift Detection</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium text-sm sm:text-base'>Bias Auditing</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-teal-600'><FaRegCheckCircle /></span>
                            <h2 className='font-medium text-sm sm:text-base'>Edge Optimized</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className='mt-12 sm:mt-15 mb-10 bg-teal-600 rounded-xl px-4 py-8 sm:py-10 space-y-4 sm:space-y-3'>
                <h1 className='text-2xl sm:text-3xl lg:text-5xl text-white font-bold text-center'>
                    Ready to curating your AI portfolio?
                </h1>
                <p className='text-teal-900 font-medium text-sm sm:text-base lg:text-lg text-center mt-3'>
                    Join the world's leading research teams and engineers who manage their AI{' '}
                    <br className='hidden sm:block' />
                    lifecycles with Editorial Intelligence.
                </p>
                <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 items-center'>
                    <Link
                        to="/auth/register"
                        className='w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-base sm:text-lg text-teal-600 rounded-2xl'
                    >
                        Register Account
                    </Link>
                    <Link
                        className='w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 shadow-2xl text-base sm:text-lg border border-dotted text-white rounded-2xl'
                    >
                        Request Demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;