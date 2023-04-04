import React, { useState } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';
import { db } from '@/pages/api/firebase';
import { addDoc, collection } from 'firebase/firestore';

const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const Name = form.elements["name"].value;
    const contact = form.elements["contact"].value;
    const email = form.elements["email"].value;
    const accountType = form.elements["accountType"].value;
    const password = form.elements["password"].value;
    const passwordConfirmation = form.elements["passwordConfirmation"].value;
    const marketingAccept = form.elements["marketingAccept"].checked;

    if (!Name || !contact || !email || !accountType || !password || !passwordConfirmation) {
        alert("Please fill out all required fields.");
        return;
    }
    if (password !== passwordConfirmation) {
        alert("Password and password confirmation do not match.");
        return;
    }

    const user = {
        Name,
        contact,
        email,
        accountType,
        password,
        marketingAccept,
    };
    
    const usersRef = collection(db, 'users');

    addDoc(usersRef, user).then(response => {
        console.log(response);
        window.location.href = "/login";
    }).catch(error => {
        console.log(error);
        alert("There was an error creating your account. Please try again.");
    });
}

const Register = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    const darkModeClass = darkMode ? 'dark' : '';

    return (
        <section className={`relative bg-gray-200  dark:bg-gray-900 min-h-screen flex justify-center items-center transition-all duration-500`}>
            <img
                src="/register.png"
                className="absolute inset-0 w-full h-full object-cover rounded-lg rounded-r-none z-0"
            />
            <div className={`max-w-3xl w-full mx-4 my-8 md:my-12 lg:my-16 lg:mx-auto bg-gray-100  dark:bg-gray-800 rounded-lg shadow-lg z-10`}>
                <div className="w-full lg:col-span-1 p-6">
                    <div className="flex items-center justify-center p-6">
                        <h2 className={`text-3xl font-bold text-gray-800  dark:text-white`}>
                            Welcome to
                            <a href='/' className='text-indigo-500'> InvestLocal</a>
                        </h2>
                        <img src="/money.png" alt="InvestLocal Logo" className="h-16 ml-4" />
                    </div>
                    <h2 className={`text-2xl font-bold text-gray-800  dark:text-white mb-6`}>
                        Create an account
                    </h2>
                    <form onSubmit={handleFormSubmit} className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Name"
                                className={`block text-sm font-medium text-gray-700  dark:text-gray-200`}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="Name"
                                name="name"
                                className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="contact"
                                className={`block text-sm font-medium text-gray-700  dark:text-gray-200`}
                            >
                                Contact
                            </label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Email"
                                className={`block text-sm font-medium text-gray-700  dark:text-gray-200`}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="Email"
                                name="email"
                                className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="AccountType" className={`block text-sm font-medium text-gray-700  dark:text-gray-200`}>
                                Account Type
                            </label>
                            <select id="AccountType" name="accountType"
                                className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}>
                                <option value="investor">Investor</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Password"
                                className={`block text-sm font-medium text-gray-700  dark:text-gray-200`}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="Password"
                                name="password"
                                className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="PasswordConfirmation"
                                className={`block text-sm font-medium text-gray-700  dark:text-gray-200`}
                            >
                                Password Confirmation
                            </label>
                            <input
                                type="password"
                                id="PasswordConfirmation"
                                name="passwordConfirmation"
                                className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                            />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-4">
                                <input
                                    type="checkbox"
                                    id="MarketingAccept"
                                    name="marketingAccept"
                                    className={`h-5 w-5 rounded-md border-gray-300 bg-gray-200 shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900`}
                                />
                                <span className={`text-sm text-gray-700  dark:text-gray-200`}>
                                    I want to receive emails about events, product updates and company announcements.
                                </span>
                            </label>
                        </div>
                        <div className="col-span-6">
                            <p className={`text-sm text-gray-500  dark:text-gray-400`}>
                                By creating an account, you agree to our{" "}
                                <a href="/terms-and-conditions" className={`text-gray-700 underline  dark:text-gray-200`}>
                                    terms and conditions
                                </a>{" "}
                                and{" "}
                                <a href="/privacy-policy" className={`text-gray-700 underline  dark:text-gray-200`}>
                                    privacy policy
                                </a>
                                .
                            </p>
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 sm:justify-between">
                            <p className={`mt-4 text-sm text-gray-500  dark:text-gray-400 sm:mt-0`}>
                                Already have an account?{" "}
                                <a href="/login" className={`text-gray-700 underline  dark:text-gray-200`}>
                                    Log in
                                </a>
                            </p>
                            <button
                                type="submit"
                                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900`}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
                <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
            </div>
        </section>
    );
};

export default Register;