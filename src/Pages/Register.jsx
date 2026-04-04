import { Eye, EyeOff, ImageIcon, Lock, Mail, User } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { createUser, setUser,LoginWithGoogle } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log('Register', { name, email, photoUrl, password });
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                setUser(user)
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                alert(errorMessage)
            });


    }



    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);

                const user = result.user;
                setUser(user)
                navigate("/")

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log({ errorCode, errorMessage, email, credential });

            });
    }

    const currentYear = new Date().getFullYear();
    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-1/3 p-10 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-lg mb-4">
                        <div className="w-6 h-6 bg-teal-400 rounded" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
                    </div>
                    <h1 className="text-2xl mb-2">
                        <span className="text-gray-600">Register for </span>
                        <span className="bg-linear-to-r from-[#14B8A6] to-[#6366F1] bg-clip-text text-transparent">AI Model Inventory Manager</span>
                    </h1>
                    <p className="text-gray-400 ">
                        Initialize your custom profile to achieve something synthetic convergence
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-gray-500 text-sm mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                className="w-full bg-[#e7edf3] border border-gray-700 rounded-lg px-10 py-3 text-black placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-gray-500 text-sm mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ai@example.info"
                                className="w-full bg-[#0d1b2a] border border-gray-700 rounded-lg px-10 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label htmlFor="photoUrl" className="block text-gray-500 text-sm mb-2">
                            Photo URL (Optional)
                        </label>
                        <div className="relative">
                            <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="url"
                                id="photoUrl"
                                name="photoUrl"
                                placeholder="https://your-avatar-link.com/users/me.jpg"
                                className="w-full bg-[#e7edf3] border border-gray-700 rounded-lg px-10 py-3 text-black placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-gray-500 text-sm mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Create a secure password"
                                className="w-full bg-[#0d1b2a] border border-gray-700 rounded-lg px-10 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-linear-to-r from-[#14B8A6] to-[#6366F1] text-gray-900 py-3 rounded-lg font-medium transition-colors mt-6"
                    >
                        CREATE ACCOUNT
                    </button>


                    <div className="text-center text-gray-500 text-sm">or continue with</div>


                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full bg-[#0f1729] border cursor-pointer border-gray-700 hover:border-gray-600 text-white py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-3"
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

                    {/* Login Link */}
                    <div className="text-center text-sm">
                        <span className="text-gray-500">Already have an account? </span>
                        <Link to="/auth/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Login here
                        </Link>
                    </div>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-xs">
                        By creating an account, you agree to the{" "}
                        <a href="#" className="text-gray-400 hover:text-gray-300">Terms of Service</a> and{" "}
                        <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
                    </p>
                </div>

                <div className="mt-6 text-center text-xs text-gray-600">
                    <p>Synthetic Observer</p>
                    <p className="mt-1">© {currentYear} - AI Model Inventory Manager v2.1.0</p>
                </div>
            </div>
        </div>
    );
};

export default Register;