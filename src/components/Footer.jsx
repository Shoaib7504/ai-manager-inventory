import { Mail } from 'lucide-react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-r from-[#14B8A6] to-[#6366F1] py-8 px-4 sm:px-6 rounded-xl mt-12 sm:mt-20">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

                {/* Column 1 - Quick Links */}
                <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/all-models" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">All Models</Link></li>
                        <li><Link to="/add-model" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Add Model</Link></li>
                        <li><Link to="/profile" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Profile</Link></li>
                        <li><Link to="/auth/login" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Login</Link></li>
                    </ul>
                </div>

                {/* Column 2 - Resources */}
                <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Resources</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Learning Blog</Link></li>
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Guides</Link></li>
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Poly Tips</Link></li>
                        <li><Link to="/resources" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Resources</Link></li>
                    </ul>
                </div>

                {/* Column 3 - Community */}
                <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Community</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Forums</Link></li>
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Study Groups</Link></li>
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Events</Link></li>
                        <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600">Leaderboard</Link></li>
                    </ul>
                </div>

                {/* Column 4 - Connect */}
                <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Connect With Us</h3>
                    <div className="flex space-x-3 sm:space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-200 hover:text-blue-700 transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-200 hover:text-blue-400 transition-colors">
                            <BsTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-200 hover:text-pink-600 transition-colors">
                            <BsInstagram size={20} />
                        </a>
                    </div>
                    <a
                        href="mailto:support@nihonlearn.com"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200 hover:text-blue-600 break-all"
                    >
                        <Mail size={16} className="shrink-0" />
                        <span>support@nihonlearn.com</span>
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#fa7171] mt-6 sm:mt-8 pt-4 text-center mb-16 sm:mb-0">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-200 flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span>© {currentYear} 3D Model Hub Learn. All Rights Reserved.</span>
                    <span className="flex gap-3">
                        <Link to="/" className="hover:text-blue-600">Privacy Policy</Link>
                        <Link to="/" className="hover:text-blue-600">Terms of Service</Link>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;