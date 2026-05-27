import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Link } from 'react-router';

const AllModelCard = ({ result }) => {
    return (
        <div className="w-full gradient-border overflow-hidden text-white shadow-lg border border-cyan-500/20">

            {/* Top Image */}
            <div className="relative">
                <img
                    src={result.image}
                    alt={result.name}
                    className="w-full h-40 sm:h-44 object-cover"
                />
                <span className="absolute top-3 right-3 text-xs bg-cyan-500/50 text-cyan-600 px-2 py-1 rounded-md">
                    ACTIVE
                </span>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <p className="text-xs text-gray-600 uppercase tracking-widest">
                    Transformer Model
                </p>

                <h2 className="text-base sm:text-xl text-black font-semibold line-clamp-1">{result.name}</h2>

                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                    {result.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
                    <span className="bg-gray-700 px-2 py-1 rounded truncate max-w-20 sm:max-w-none">
                        {result.framework}
                    </span>
                    <span className="bg-gray-700 px-2 py-1 rounded truncate max-w-20 sm:max-w-none">
                        {result.useCase}
                    </span>
                    <span className="bg-gray-700 px-2 py-1 rounded truncate max-w-20 sm:max-w-none">
                        {result.dataset}
                    </span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-2 sm:pt-3">
                    <span className="text-xs sm:text-sm text-gray-500">
                        Purchases: {result.purchased}
                    </span>
                    <Link
                        to={`/model-details/${result._id}`}
                        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                    >
                        <AiFillExclamationCircle size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllModelCard;