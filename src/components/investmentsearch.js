import { useEffect, useState } from 'react';
import { collection, query, where, getDocs,getDoc ,doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/pages/api/firebase'
import { FaLinkedin } from 'react-icons/fa';
import Cookies from 'js-cookie';

const InvestmentSearch = () => {
    const [businessAccounts, setBusinessAccounts] = useState([]);
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const userId = Cookies.get('user');

    useEffect(() => {
        const fetchBusinessAccounts = async () => {
            const userRef = doc(collection(db, 'users'), userId);
            const docSnap = await getDoc(userRef);
            const data = docSnap.data();
            let q = query(
                collection(db, 'users'),
                where('accountType', '==', 'business')
              );
            
              if (data.myInvestors && data.myInvestors.length > 0) {
                q = query(
                  collection(db, 'users'),
                  where('accountType', '==', 'business'),
                  where('name', 'not-in', data.myInvestments)
                );
              }
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
                    netWorth: data.netWorth,
                    date: data.date,
                    website: data.website,
                });
            });
            setBusinessAccounts(accounts);
        };
        fetchBusinessAccounts();
    }, []);

    const handleInvestClick = async () => {
        const userRef = doc(collection(db, 'users'), userId);
        if (selectedBusiness) {
            await setDoc(userRef, {
                myInvestments: arrayUnion(selectedBusiness.name)
            },{merge: true});
        }
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-100">Investment Search</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto max-w-8xl">
                {businessAccounts.map((account) => (
                    <div key={account.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-500">
                        <div className="text-2xl pb-4 text-center font-medium text-gray-900 dark:text-white mb-2">{account.name}</div>
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Email: {account.email}</div>
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Phone: {account.phone}</div>
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Address: {account.address}</div>
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Net Worth: ${account.netWorth}</div>
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Date Established: {account.date}</div>
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Website: {account.website}</div>
                        <div className="float bottom-4 w-full">
                            <div className="flex justify-between items-center pt-4">
                                <a href={account.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700"> <FaLinkedin className='text-4xl' /> </a>
                                <button onClick={() => {
                                    setSelectedBusiness(account);
                                    handleInvestClick();
                                }} className="bg-indigo-500 hover:bg-indigo-700 text-gray-200 font-bold py-2 px-4 rounded">
                                    Invest
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InvestmentSearch;