import { AlertCircle, ChevronRight } from 'lucide-react';
import React, { use } from 'react';
import Image from '../assets/alexandra_koch-ai-7977960.jpg'
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddModels = () => {
    const navigate = useNavigate()
    const { user } = use(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await user.getIdToken(true)
            const formData = {
                name: e.target.name.value,
                framework: e.target.framework.value,
                useCase: e.target.useCase.value,
                dataset: e.target.dataset.value,
                image: e.target.image.value,
                description: e.target.description.value,
                createdBy: user.email,
                createdAt: new Date(),
                purchased: '0'
            }
            const res = await fetch('https://ai-inventory-server-one.vercel.app/models', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (!res.ok) {
                toast.error(data.message || "Failed!")
                return
            }
            toast.success("Successfully added!")
            navigate("/all-models")
        } catch (err) {
            console.error("ERROR:", err)
            toast.error("Error: " + err.message)
        }
    }

    return (
        <div className="min-h-screen bg-base-200 text-base-content transition-colors duration-200">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                                Curator Terminal
                            </p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                                Expand the{' '}
                                <span className="bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent">
                                    intelligence.
                                </span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                                Onboard new neural architectures into the Observer inventory. Ensure metadata precision for optimal lifecycle tracking and deployment efficiency.
                            </p>
                            <button className="flex items-center gap-2 text-base sm:text-lg text-teal-500 hover:text-cyan-400 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                                <span>Synthetic validation active</span>
                            </button>
                        </div>

                        {/* Image — hidden on mobile to save space */}
                        <div className="relative hidden sm:block">
                            <div className="bg-base-100 border border-base-300 rounded-lg overflow-hidden">
                                <img
                                    src={Image}
                                    alt="Neural network visualization"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-base-100">
                                    <p className="text-xs text-gray-500">NEURAL VX_NET-2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Model Name */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg font-medium tracking-wider text-base-content">
                                    Model Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex. ChatGPT-4.0"
                                    name='name'
                                    required
                                    className="input input-bordered mt-1 bg-base-100 text-base-content border-base-300 w-full py-3 rounded-xl focus:border-teal-500"
                                />
                            </div>

                            {/* Framework */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg font-medium tracking-wider text-base-content">
                                    Framework
                                </label>
                                <select
                                    defaultValue="Pick a Framework"
                                    name='framework'
                                    required
                                    className="select select-bordered w-full mt-1 bg-base-100 text-base-content border-base-300 rounded-xl focus:border-teal-500"
                                >
                                    <option disabled>Pick a Framework</option>
                                    <option>React</option>
                                    <option>Vue</option>
                                    <option>Angular</option>
                                </select>
                            </div>

                            {/* Primary Use Case */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg font-medium tracking-wider text-base-content">
                                    Primary Use Case
                                </label>
                                <input
                                    type="text"
                                    placeholder="Define the operational intent..."
                                    name='useCase'
                                    required
                                    className="input input-bordered mt-1 bg-base-100 text-base-content border-base-300 w-full py-3 rounded-xl focus:border-teal-500"
                                />
                            </div>

                            {/* Dataset URL */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg font-medium tracking-wider text-base-content">
                                    Dataset URL
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name='dataset'
                                        required
                                        className="input input-bordered mt-1 bg-base-100 text-base-content border-base-300 w-full py-3 rounded-xl focus:border-teal-500 pr-10"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg font-medium tracking-wider text-base-content">
                                    Image URL
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder='Image Url'
                                        name='image'
                                        required
                                        className="input input-bordered mt-1 bg-base-100 text-base-content border-base-300 w-full py-3 rounded-xl focus:border-teal-500 pr-10"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Brief Description */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg font-medium tracking-wider text-base-content">
                                    Brief Description
                                </label>
                                <textarea
                                    placeholder="The story behind the intelligence..."
                                    required
                                    rows={4}
                                    name='description'
                                    className="textarea textarea-bordered mt-1 bg-base-100 text-base-content border-base-300 w-full py-3 rounded-xl focus:border-teal-500"
                                />
                            </div>

                            {/* Warning Box */}
                            <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-red-400 font-medium mb-1">
                                            CONFIGURATION WARNING
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                            Ensure the Framework matches the expected node weights. Mismatches will trigger automated rejection in the exit protocol.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Timestamp Checkbox */}
                            <div className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-teal" />
                                <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    SYSTEM TIMESTAMP STAMP
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center text-center bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white font-semibold py-4 rounded-xl transition-transform hover:scale-[1.01] active:scale-[0.99] text-sm sm:text-base shadow-lg cursor-pointer"
                            >
                                COMMIT MODEL
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddModels;