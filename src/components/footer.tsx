import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">DevConnect</h3>
                        <p className="text-sm">Connecting student developers with businesses for mutual growth and success.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-blue-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/#why-companies-should-care" className="text-sm hover:text-blue-400">
                                    For Companies
                                </Link>
                            </li>
                            <li>
                                <Link to="/#why-students-should-care" className="text-sm hover:text-blue-400">
                                    For Students
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-blue-400">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-sm hover:text-blue-400">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm hover:text-blue-400">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm hover:text-blue-400">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-sm hover:text-blue-400">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link to="https://x.com/chltmtechboot" target="_blank" className="text-sm hover:text-blue-400">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm hover:text-blue-400">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-sm hover:text-blue-400">
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} DevConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}