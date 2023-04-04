import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/pages/api/firebase'

const InvestmentSearch = () => {
    const [businessAccounts, setBusinessAccounts] = useState([]);

    useEffect(() => {
        const fetchBusinessAccounts = async () => {
            const q = query(collection(db, 'users'), where('accountType', '==', 'business'));
            const querySnapshot = await getDocs(q);
            const accounts = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                accounts.push({
                    id: doc.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    linkedin: data.linkedin,
                    networth: data.networth,
                });
            });
            setBusinessAccounts(accounts);
        };
        fetchBusinessAccounts();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-100">Investment Search</h1>
            <div className="grid grid-cols-2 gap-6 mx-auto max-w-4xl">
                {businessAccounts.map((account) => (
                    <div key={account.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">Name: {account.name}</div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Email: {account.email}</div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Phone: {account.phone}</div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Address: {account.address}</div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">LinkedIn: {account.linkedin}</div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Net Worth: {account.networth}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InvestmentSearch;