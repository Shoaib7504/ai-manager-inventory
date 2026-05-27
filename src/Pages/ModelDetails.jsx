import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const BASE_URL = "https://ai-inventory-server-4.onrender.com";

const ModelDetails = () => {
    const { user } = use(AuthContext);
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const token = await user.getIdToken(true);
                const res = await fetch(`${BASE_URL}/models/${id}`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();

                if (!res.ok) {
                    console.error("Server error:", data.message);
                    setLoading(false);
                    return;
                }

                setModel(data.result);
                setLoading(false);
            } catch (err) {
                console.error("Fetch failed:", err);
                setLoading(false);
            }
        };

        fetchModel();
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {        
            if (result.isConfirmed) {
                try {
                    const token = await user.getIdToken(true); 

                    const res = await fetch(`${BASE_URL}/models/${model._id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,  
                        },
                    });

                    const data = await res.json();

                    if (!res.ok) {
                        toast.error(data.message || "Delete failed!");
                        return;
                    }

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    navigate("/all-models");

                } catch (err) {
                    toast.error("Delete failed!");
                    console.error(err);
                }
            }
        });
    };

    const handleDownload = async () => {   
        try {
            const token = await user.getIdToken(true);  

            const res = await fetch(`${BASE_URL}/downloads`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,  
                },
                body: JSON.stringify({ ...model, downloadedBy: user.email })
            });

            const data = await res.json();
            console.log(data);
            

            if (!res.ok) {
                toast.error("Download failed!");
                return;
            }

            toast.success("Downloaded Successfully!");

        } catch (err) {
            toast.error("Download failed!");
            console.error(err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
 
                    {/* Image */}
                    <div className="w-full md:w-1/2 shrink-0">
                        <img
                            src={model.image}
                            alt={model.name}
                            className="w-full object-cover rounded-xl shadow-md max-h-72 sm:max-h-96 md:max-h-full"
                        />
                    </div>
 
                    {/* Details */}
                    <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                            {model.name}
                        </h1>
 
                        <div className="flex flex-wrap gap-3">
                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                {model.framework}
                            </div>
                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                Downloaded: {model.purchased}
                            </div>
                        </div>
 
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                            {model.description}
                        </p>
 
                        {/* Action buttons — stack on mobile, row on sm+ */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4 sm:mt-6">
                            <Link
                                to={`/update-model/${model._id}`}
                                className="btn btn-primary rounded-full bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white border-0 hover:from-pink-600 hover:to-red-700 text-sm sm:text-base w-full sm:w-auto text-center"
                            >
                                Update Model
                            </Link>
                            <button
                                onClick={handleDownload}
                                className="btn rounded-full bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-sm sm:text-base w-full sm:w-auto"
                            >
                                Download
                            </button>
                            <button
                                onClick={handleDelete}
                                className="btn btn-primary rounded-full bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-white border-0 hover:from-pink-600 hover:to-red-700 text-sm sm:text-base w-full sm:w-auto"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelDetails;