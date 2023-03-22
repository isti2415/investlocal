import React from 'react';

const Register = () => {
    return (
        <section className="relative bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
            <img
                src="/register.png"
                className="absolute inset-0 w-full h-full object-cover rounded-lg rounded-r-none z-0"
            />
            <div className="max-w-3xl w-full mx-4 my-8 md:my-12 lg:my-16 lg:mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10">
                <div className="w-full lg:col-span-1 p-6">
                    <div className="flex items-center justify-center p-6">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                            Welcome to InvestLocal
                        </h2>
                        <img src="/money.png" alt="InvestLocal Logo" className="h-16 ml-4" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                        Create an account
                    </h2>
                    <form action="#" className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="FirstName"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="LastName"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="LastName"
                                name="last_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
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
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="AccountType" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Account Type
                            </label>
                            <select id="AccountType" name="account_type"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                                <option value="investor">Investor</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
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
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm               text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="PasswordConfirmation"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Password Confirmation
                            </label>
                            <input
                                type="password"
                                id="PasswordConfirmation"
                                name="password_confirmation"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-4">
                                <input
                                    type="checkbox"
                                    id="MarketingAccept"
                                    name="marketing_accept"
                                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-200">
                                    I want to receive emails about events, product updates and company announcements.
                                </span>
                            </label>
                        </div>
                        <div className="col-span-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                By creating an account, you agree to our{" "}
                                <a href="/terms-and-conditions" className="text-gray-700 underline dark:text-gray-200">
                                    terms and conditions
                                </a>{" "}
                                and{" "}
                                <a href="/privacy-policy" className="text-gray-700 underline dark:text-gray-200">
                                    privacy policy
                                </a>
                                .
                            </p>
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 sm:justify-between">
                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                                Already have an account?{" "}
                                <a href="/login" className="text-gray-700 underline dark:text-gray-200">
                                    Log in
                                </a>
                                .
                            </p>
                            <button
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                            >
                                Create an account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
