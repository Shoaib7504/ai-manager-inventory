import { AlertCircle, ChevronRight } from 'lucide-react';
import React, { use } from 'react';
import Image from '../assets/alexandra_koch-ai-7977960.jpg'
import { AuthContext } from '../Context/AuthProvider';
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
            const res = await fetch('https://ai-inventory-server-5.onrender.com/models', {
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
        <div className="min-h-screen bg-[#F9FAFB] text-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                                Curator Terminal
                            </p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-4 sm:mb-6">
                                Expand the{' '}
                                <span className="bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent">
                                    intelligence.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                                Onboard new neural architectures into the Observer inventory. Ensure metadata precision for optimal lifecycle tracking and deployment efficiency.
                            </p>
                            <button className="flex items-center gap-2 text-base sm:text-lg text-teal-400 hover:text-cyan-300 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                                <span>Synthetic validation active</span>
                            </button>
                        </div>

                        {/* Image — hidden on mobile to save space */}
                        <div className="relative hidden sm:block">
                            <div className="bg-[#0d1220] border border-gray-800 rounded-lg overflow-hidden">
                                <img
                                    src={Image}
                                    alt="Neural network visualization"
                                    className="w-full h-auto"
                                />
                                <div className="p-4">
                                    <p className="text-xs text-gray-600">NEURAL VX_NET-2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Model Name */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg text-black font-medium tracking-wider">
                                    Model Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex. ChatGPT-4.0"
                                    name='name'
                                    required
                                    className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                                />
                            </div>

                            {/* Framework */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg text-black font-medium tracking-wider">
                                    Framework
                                </label>
                                <select
                                    defaultValue="Pick a Framework"
                                    name='framework'
                                    required
                                    className="select select-info w-full mt-1 py-3 rounded-xl bg-gray-300"
                                >
                                    <option disabled>Pick a Framework</option>
                                    <option>React</option>
                                    <option>Vue</option>
                                    <option>Angular</option>
                                </select>
                            </div>

                            {/* Primary Use Case */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg text-black font-medium tracking-wider">
                                    Primary Use Case
                                </label>
                                <input
                                    type="text"
                                    placeholder="Define the operational intent..."
                                    name='useCase'
                                    required
                                    className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                                />
                            </div>

                            {/* Dataset URL */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg text-black font-medium tracking-wider">
                                    Dataset URL
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name='dataset'
                                        required
                                        className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg text-black font-medium tracking-wider">
                                    Image URL
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder='Image Url'
                                        name='image'
                                        required
                                        className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Brief Description */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-base sm:text-lg text-black font-medium tracking-wider">
                                    Brief Description
                                </label>
                                <textarea
                                    placeholder="The story behind the intelligence..."
                                    required
                                    rows={4}
                                    name='description'
                                    className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
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
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            Ensure the Framework matches the expected node weights. Mismatches will trigger automated rejection in the exit protocol.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Timestamp Checkbox */}
                            <div className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <label className="text-xs text-gray-400 uppercase tracking-wider">
                                    SYSTEM TIMESTAMP STAMP
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center text-center bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-black font-medium py-4 sm:py-6 rounded-lg transition-colors text-sm sm:text-base"
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