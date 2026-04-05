import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Link } from 'react-router';

const ModelCard = ({ model }) => {
    // console.log(model);



    //  const data = {
    //     name: "BERT",
    //     framework: "TensorFlow",
    //     useCase: "NLP",
    //     dataset: "Wikipedia",
    //     description:
    //         "A transformer-based model for natural language processing tasks like text classification.",
    //     image: "https://cdn.pixabay.com/photo/2023/01/09/13/34/chatgpt-7707442_1280.jpg", // replace with your real image
    //     createdBy: "user@example.com",
    //     createdAt: "2025-10-28T11:54:00.000Z",
    //     purchased: 10,
    // };

    return (
    
         <div className="w-85 gradient-border  overflow-hidden  text-white shadow-lg border border-cyan-500/20">

            {/* Top Image */}
            <div className="relative">
                <img
                    src={model.image}
                    alt={model.name}
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

                <h2 className="text-xl text-black font-semibold">{model.name}</h2>

                <p className="text-sm text-gray-400">
                    {model.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-700 px-2 py-1 rounded">
                        {model.framework}
                    </span>
                    <span className="bg-gray-700 px-2 py-1 rounded">
                        {model.useCase}
                    </span>
                    <span className="bg-gray-700 px-2 py-1 rounded">
                        {model.dataset}
                    </span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-3">
                    <span className="text-ls text-gray-500">
                        Purchases: {model.purchased}
                    </span>

                    <Link to={`/model-details/${model._id}`} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-700 transition">
                            <AiFillExclamationCircle size={12} />
                        </Link>
                </div>
            </div>
        </div> 
       
    );
};

export default ModelCard;