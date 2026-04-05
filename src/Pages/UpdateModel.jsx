import { AlertCircle, ChevronRight } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router';
const UpdateModel = () => {

    const data = useLoaderData()
    const model = data.result
    console.log(model);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: e.target.name.value,
            framework: e.target.framework.value,
            useCase: e.target.useCase.value,
            dataset: e.target.dataset.value,
            image: e.target.image.value,
            description: e.target.description.value,           
        }
        // console.log(formData);
        fetch( `http://localhost:3000/models/${model._id}` , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Successfully added!")
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className='w-1/3 mx-auto shadow-2xl p-3 rounded-xl'>
            <h1 className='font-bold text-4xl justify-center text-center mb-3 
            bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>Update Your AI Model</h1>
            <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Model Name */}
                    <div className="flex-col gap-x-3">
                        <label className="text-lg text-black font-medium  tracking-wider">
                            Model Name
                        </label>
                        <input
                            id="modelName"
                            type="text"
                            placeholder="Ex. ChatGPT-4.0"
                            name='name'
                            defaultValue={model.name}
                            className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                        />
                    </div>

                    {/* Framework */}
                    <div className="flex-col gap-x-3">
                        <div>
                            <label className="text-lg text-black font-medium  tracking-wider">
                                Framework
                            </label>
                        </div>
                        <div>
                            <select defaultValue="Pick a Framework"
                                name='framework'
                                className="select select-info w-full mt-1 py-3 rounded-xl
                                     bg-gray-300 ">
                                <option disabled={true}>Pick a Framework</option>
                                <option>React</option>
                                <option>Vue</option>
                                <option>Angular</option>
                            </select>
                        </div>
                    </div>

                    {/* Primary Use Case */}
                    <div className="mt-1">

                        <div>
                            <label className="text-lg text-black font-medium  tracking-wider">
                                Primary Use Case
                            </label>
                        </div>
                        <div>
                            <input
                                id="useCase"
                                type="text"
                                placeholder="Define the operational intent..."
                                name='useCase'
                                defaultValue={model.useCase}
                                className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Dataset URL */}
                    <div className="space-y-2">
                        <div>

                            <label className="text-lg text-black font-medium  tracking-wider">
                                Dataset URL
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="datasetUrl"
                                type="text"
                                name='dataset'
                                defaultValue={model.dataset}
                                className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>

                            <label className="text-lg text-black font-medium  tracking-wider">
                                Image URL
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="datasetUrl"
                                type="text"
                                placeholder='Image Url'
                                name='image'
                                defaultValue={model.image}
                                className="bg-[#e7edf3] border mt-1 border-gray-400 px-3 rounded-xl text-black w-full py-3 placeholder:text-gray-600"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Brief Description */}
                    <div className="space-y-2">

                        <div>
                            <label className="text-lg text-black font-medium  tracking-wider">
                                Brief Description
                            </label>
                        </div>
                        <textarea
                            id="description"
                            placeholder="The story behind the intelligence..."
                            defaultValue={model.description}
                            rows={4}
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
                        className="w-full flex justify-center items-center text-center bg-linear-to-r from-[#14B8A6] to-[#6366F1]
                         text-black font-medium py-4 rounded-lg transition-colors"
                    >
                        UPDATE MODEL
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModel;