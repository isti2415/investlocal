import Navbar from '@/components/navbar';
import React from 'react';

const Login = () => {
    return (
        <section className="relative bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
            <img
                src="/login.png"
                className="absolute inset-0 w-full h-full object-cover rounded-lg rounded-r-none z-0"
            />
            <div className="max-w-3xl mx-auto my-8 md:my-12 lg:my-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 relative">
                <div className="flex items-center justify-center p-6">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Welcome back to InvestLocal
                    </h2>
                    <img src="/money.png" alt="InvestLocal Logo" className="h-16 ml-4" />
                </div>
                <form action="#" className="grid grid-cols-6 gap-6 p-6">
                    <div className="col-span-6">
                        <label
                            htmlFor="Email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="Email"
                            name="email"
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                    </div>
                    <div className="col-span-6">
                        <label
                            htmlFor="Password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            name="password"
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                    </div>
                    <div className="col-span-6 sm:flex sm:items-center sm:justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <a
                                href="/login"
                                className="text-gray-700 underline dark:text-gray-200"
                            >
                                Forgot Password?
                            </a>
                        </p>
                        <button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
