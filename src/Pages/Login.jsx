import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Link, Links } from 'react-router';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
       
        const form=e.target
        const email=form.email.value;
        const password=form.password.value;
        console.log("Login submitted" ,{email, password});
    };

    return (


        <div className='flex'>
            <div className='mt-40 pl-30 justify-center items-center'>
                <p className='text-blue-600 font-medium absolute top-20'>SECURE GATEWAY</p>
                <h1 className='font-bold text-5xl'>Login to</h1>
                <h1 className='font-bold text-5xl text-teal-600 mt-3'>AI Model Inventory </h1>
                <h1 className=' font-bold text-5xl mt-3 bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent'>Manager</h1>
                <p className='mt-3 text-gray-400'>Access the central hub for the synthetic observer <br />
                ecosystem.Manage,curate,and deploy your neural <br />
                assets from a single secure terminal</p>
            </div>
            <div className="w-125 mx-auto justify-center items-center">
                <div className=" rounded-2xl p-10 shadow-2xl ">
                    {/* Form Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl text-black mb-2">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">
                            Enter your credentials to manage your inventory.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-3">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="email"
                                    name="email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.ai"
                                    className="w-full bg-[#0f1729] border border-gray-700 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-gray-400 text-xs uppercase tracking-wider">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-[#0f1729] border border-gray-700 rounded-lg pl-12 pr-12 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="w-full font-medium bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-black py-3.5 rounded-lg   shadow-lg shadow-purple-500/20"
                        >
                            Sign In to Dashboard
                        </button>
                    </form>

             
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#1a2332] px-4 text-gray-500 tracking-wider">
                                or continue with
                            </span>
                        </div>
                    </div>

  
                    <button
                        type="button"
                        
                        className="w-full bg-[#0f1729] border border-gray-700 hover:border-gray-600 text-white py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-3"
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                                fill="#4285F4"
                            />
                            <path
                                d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
                                fill="#34A853"
                            />
                            <path
                                d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                                fill="#EA4335"
                            />
                        </svg>
                        Sign in with Google
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Don't have an account?{" "}
                        <Link to='/auth/register' className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Request Access
                        </Link>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Login;