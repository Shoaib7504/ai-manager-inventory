import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Link } from 'react-router';

const AllModelCard = ({ result }) => {
    console.log(result);

    return (
        <div>
            <div className="w-85 gradient-border  overflow-hidden  text-white shadow-lg border border-cyan-500/20">

                {/* Top Image */}
                <div className="relative">
                    <img
                        src={result.image}
                        alt={result.name}
                        className="w-full h-45 object-cover"
                    />
                    <span className="absolute top-3 right-3 text-xs bg-cyan-500/50 text-cyan-600 px-2 py-1 rounded-md">
                        ACTIVE
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">

                    <p className="text-ls text-gray-600 uppercase tracking-widest">
                        Transformer Model
                    </p>

                    <h2 className="text-xl text-black font-semibold">{result.name}</h2>

                    <p className="text-sm text-gray-400">
                        {result.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-gray-700 px-2 py-1 rounded">
                            {result.framework}
                        </span>
                        <span className="bg-gray-700 px-2 py-1 rounded">
                            {result.useCase}
                        </span>
                        <span className="bg-gray-700 px-2 py-1 rounded">
                            {result.dataset}
                        </span>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-3">
                        <span className="text-ls text-gray-500">
                            Purchases: {result.purchased}
                        </span>

                        <Link to={`/model-details/${result._id}`} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-700 transition">
                            <AiFillExclamationCircle size={12} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllModelCard;