import { AlertCircle, ChevronRight } from 'lucide-react';
import React, { use } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const UpdateModel = () => {
    const { user } = use(AuthContext);
    const data = useLoaderData();
    const model = data.result;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            framework: e.target.framework.value,
            useCase: e.target.useCase.value,
            dataset: e.target.dataset.value,
            image: e.target.image.value,
            description: e.target.description.value,
        };

        try {
            const token = await user.getIdToken(true); // ✅ force-refresh token from context user

            const res = await fetch(`https://ai-inventory-server-5.onrender.com/models/${model._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Model updated successfully!");
            } else {
                toast.error(result.message || "Update failed. Please try again.");
            }
        } catch (err) {
            toast.error("Something went wrong!");
            console.error(err);
        }
    };

    return (
        <div className='w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto shadow-2xl p-4 sm:p-6 rounded-xl my-6 sm:my-8'>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl justify-center text-center mb-4 sm:mb-6 bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>
                Update Your AI Model
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Model Name */}
                <div className="flex flex-col gap-y-1">
                    <label className="text-base sm:text-lg text-black font-medium tracking-wider">Model Name</label>
                    <input
                        type="text" placeholder="Ex. ChatGPT-4.0" name='name'
                        defaultValue={model.name}
                        className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                    />
                </div>

                {/* Framework */}
                <div className="flex flex-col gap-y-1">
                    <label className="text-base sm:text-lg text-black font-medium tracking-wider">Framework</label>
                    <select
                        name='framework' defaultValue={model.framework}
                        className="select select-info w-full mt-1 py-3 rounded-xl bg-gray-300"
                    >
                        <option disabled value="">Pick a Framework</option>
                        <option>React</option>
                        <option>Vue</option>
                        <option>Angular</option>
                    </select>
                </div>

                {/* Primary Use Case */}
                <div className="flex flex-col gap-y-1">
                    <label className="text-base sm:text-lg text-black font-medium tracking-wider">Primary Use Case</label>
                    <input
                        type="text" placeholder="Define the operational intent..." name='useCase'
                        defaultValue={model.useCase}
                        className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                    />
                </div>

                {/* Dataset URL */}
                <div className="flex flex-col gap-y-1">
                    <label className="text-base sm:text-lg text-black font-medium tracking-wider">Dataset URL</label>
                    <div className="relative">
                        <input
                            type="text" name='dataset' defaultValue={model.dataset}
                            className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-y-1">
                    <label className="text-base sm:text-lg text-black font-medium tracking-wider">Image URL</label>
                    <div className="relative">
                        <input
                            type="text" placeholder='Image Url' name='image' defaultValue={model.image}
                            className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Brief Description */}
                <div className="flex flex-col gap-y-1">
                    <label className="text-base sm:text-lg text-black font-medium tracking-wider">Brief Description</label>
                    <textarea
                        name='description' placeholder="The story behind the intelligence..."
                        defaultValue={model.description} rows={4}
                        className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                    />
                </div>

                {/* Warning Box */}
                <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm text-red-400 font-medium mb-1">CONFIGURATION WARNING</p>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Ensure the Framework matches the expected node weights. Mismatches will trigger automated rejection in the exit protocol.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timestamp Checkbox */}
                <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="checkbox" />
                    <label className="text-xs text-gray-400 uppercase tracking-wider">SYSTEM TIMESTAMP STAMP</label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full flex justify-center items-center text-center bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-black font-medium py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
                >
                    UPDATE MODEL
                    <ChevronRight className="w-5 h-5 ml-2" />
                </button>
            </form>
        </div>
    );
};

export default UpdateModel;