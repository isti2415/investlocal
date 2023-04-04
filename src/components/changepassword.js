import React, { useState } from 'react';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import Cookies from 'js-cookie';
import { db } from '@/pages/api/firebase';

const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async (event) => {
        event.preventDefault();
        const userId = Cookies.get('user');
        if (!userId) {
            console.error('No user ID found in cookies');
            alert('No user ID found in cookies');
            return;
        }

        const userRef = doc(collection(db, 'users'), userId);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            console.error('User document not found');
            alert('User document not found');
            return;
        }

        const userData = userDoc.data();
        const storedPassword = userData.password;

        if (currentPassword !== storedPassword) {
            console.error('Current password does not match');
            alert('Current password does not match');
            return;
        }

        await updateDoc(userRef, { password: newPassword });

        console.log('Password updated successfully');
        alert('Password updated successfully');
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleChangePassword} className="grid grid-cols-6 gap-6" >
                <div className="col-span-6 sm:col-span-3">
                    <p />
                    <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Password Reset</h2>
                </div>
                <div className="col-span-6 sm:col-span-3">
                </div>
                <div className="col-span-6 sm:col-span-3 align-bottom">
                    <label
                        htmlFor="Password"
                        className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
                    >
                        Current Password
                    </label>
                    <input
                        type="password"
                        id="CurrentPassword"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                    />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <label
                        htmlFor="ConfirmPassword"
                        className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
                    >
                        New Password
                    </label>
                    <input
                        type="password"
                        id="NewPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
                    />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 sm:justify-between py-4">
                <p className={`mt-4 text-sm text-gray-500  dark:text-gray-400 sm:mt-0`}>
                </p>
                <button
                    type="submit"
                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900`}
                >
                    Change Password
                </button>
            </div>
            </form>
        </div>
    );

};

export default ChangePassword;