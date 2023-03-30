import React, { useState } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';

const Login = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    const darkModeClass = darkMode ? 'dark' : '';

    return (
        <section className={`relative bg-gray-200 ${darkModeClass} dark:bg-gray-900 min-h-screen flex justify-center items-center`}>
            <img
                src="/login.png"
                className="absolute inset-0 w-full h-full object-cover rounded-lg rounded-r-none z-0"
            />
            <div className={`max-w-3xl mx-auto my-8 md:my-12 lg:my-16 bg-gray-100 ${darkModeClass} dark:bg-gray-800 rounded-lg shadow-lg z-20 relative`}>
                <div className="flex items-center justify-center p-6">
                    <h2 className={`text-3xl font-bold text-gray-800 ${darkModeClass} dark:text-gray-100`}>
                        Welcome back to
                        <a href='/' className='text-indigo-500'> InvestLocal</a>
                    </h2>
                    <img src="/money.png" alt="InvestLocal Logo" className="h-16 ml-4" />
                </div>
                <form action="#" className="grid grid-cols-6 gap-6 p-6">
                    <div className="col-span-6">
                        <label
                            htmlFor="Email"
                            className={`block text-sm font-medium text-gray-700 ${darkModeClass} dark:text-gray-100`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="Email"
                            name="email"
                            className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm ${darkModeClass} dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100`}
                        />
                    </div>
                    <div className="col-span-6">
                        <label
                            htmlFor="Password"
                            className={`block text-sm font-medium text-gray-700 ${darkModeClass} dark:text-gray-100`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            name="password"
                            className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm ${darkModeClass} dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100`}
                        />
                    </div>
                    <div className="col-span-6 sm:flex sm:items-center sm:justify-between">
                        <p className={`text-sm text-gray-500 ${darkModeClass} dark:text-gray-400`}>
                            <a
                                href="/login"
                                className={`text-gray-700 underline ${darkModeClass} dark:text-gray-100`}
                            >
                                Forgot Password?
                            </a>
                        </p>
                        <button
                            className={`inline-block shrink-0 rounded-md border ${darkModeClass} border-indigo-500 bg-indigo-500 px-12 py-3 text-sm font-medium text-gray-100 transition hover:bg-transparent hover:text-indigo-500 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-gray-100`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
        </section>
    );
};

export default Login;