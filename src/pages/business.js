import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState } from "react";

const SmallBusiness = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const darkModeClass = darkMode ? "dark" : "";

    return (
        <>
            <Head>
                <title>InvestLocal - For Businesses</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`min-h-screen ${darkModeClass} bg-gray-200 dark:bg-gray-900 transition-all duration-500`}
            >
                <Navbar darkMode={darkMode} />
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                        <div className="mb-8 md:mb-0">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8">
                                Grow Your Business with InvestLocal
                            </h1>
                            <p className="text-gray-900 dark:text-gray-300 text-xl mb-8">
                                InvestLocal is a platform that connects small businesses with local investors. By listing your business on InvestLocal, you gain access to a wide range of potential investors who are interested in supporting businesses in their community.
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                                Why InvestLocal?
                            </h2>
                            <ul className="list-disc list-inside text-xl text-gray-900 dark:text-gray-300 mb-8">
                                <li>Connect with local investors who care about supporting businesses in their community</li>
                                <li>Access to a wide range of potential investors</li>
                                <li>Empower your business and help it grow with local capital</li>
                                <li>Share detailed information about your business and investment opportunities</li>
                                <li>User-friendly platform with easy navigation and search features</li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                                How It Works
                            </h2>
                            <ol className="list-decimal list-inside text-xl text-gray-900 dark:text-gray-300 mb-8">
                                <li>Create an account on InvestLocal</li>
                                <li>List your business on the platform and provide detailed information about your business and investment opportunities</li>
                                <li>Connect with potential investors who are interested in supporting your business</li>
                                <li>Receive funding and support from your local community</li>
                                <li>Grow your business and contribute to the development of your community</li>
                            </ol>
                        </div>
                        <div className="w-full">
                            <img src="/business.png" alt="Illustration of a small business owner" className="w-full" />
                        </div>
                    </div>
                    <p className="pt-8 text-blue-300 text-xl">InvestLocal is committed to supporting small businesses and helping them grow. Join our community today and start connecting with local investors!</p>
                </div>
                <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
                <Footer darkMode={darkMode} />

            </div>
        </>
    );
};

export default SmallBusiness;