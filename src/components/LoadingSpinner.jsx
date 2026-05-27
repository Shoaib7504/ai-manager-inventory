import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh] gap-4'>
            <div className='relative w-16 h-16'>
                <div className='absolute inset-0 rounded-full border-4 border-teal-100'></div>
                <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-teal-500 border-r-indigo-500 animate-spin'></div>
            </div>
            <p className='text-gray-400 text-sm tracking-widest uppercase animate-pulse'>
                Loading Models...
            </p>
        </div>
    );
};

export default LoadingSpinner;

