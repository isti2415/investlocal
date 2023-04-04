import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ChangePassword from './changepassword';
import { collection, doc, getDoc,setDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase';

const InvestorProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [date, setdate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [netWorth, setNetWorth] = useState('');

  useEffect(() => {
    const userId = Cookies.get('user');
    if (userId) {
      const userRef = doc(collection(db, 'users'), userId);
      getDoc(userRef)
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setUser(data);
            setName(data.name);
            setdate(data.date);
            setEmail(data.email);
            setPhone(data.phone);
            setAddress(data.address);
            setWebsite(data.website);
            setLinkedin(data.linkedin);
            setNetWorth(data.netWorth);
          }
        })
        .catch((error) => {
          console.error('Error fetching investor profile:', error);
        });
    } else {
      console.error('No user ID found in cookies');
    }
  }, []);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userId = Cookies.get('user');
    const userRef = doc(collection(db, 'users'), userId);
    const data = {
      name: e.target.name.value || name,
      date: e.target.date.value || date,
      email: e.target.email.value || email,
      phone: e.target.phone.value || phone,
      address: e.target.address.value || address,
      website: e.target.website.value || website,
      linkedin: e.target.linkedin.value || linkedin,
      netWorth: e.target.netWorth.value || netWorth,
    };
    await setDoc(userRef, data,{merge: true});
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-100">Profile</h1>
        <form onSubmit={handleFormSubmit} className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <p />
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">General Information</h2>
          </div>
          <div className="col-span-6 sm:col-span-3">
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={name}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="date"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder={date}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Email"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              placeholder={email}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Phone"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Phone
            </label>
            <input
              type="tel"
              id="Phone"
              name="phone"
              placeholder={phone}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Address"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              name="address"
              placeholder={address}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Website"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Website
            </label>
            <input
              type="text"
              id="Website"
              name="website"
              placeholder={website}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LinkedIn"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              LinkedIn
            </label>
            <input
              type="text"
              id="LinkedIn"
              name="linkedin"
              placeholder={linkedin}
              className={`mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Net Worth"
              className={`block text-sm font-medium text-gray-700 dark:text-gray-200`}
            >
              Net Worth
            </label>
            <input
              type="text"
              id="Net Worth"
              name="netWorth"
              placeholder={netWorth}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <ChangePassword></ChangePassword>
    </div>
  );
}

export default InvestorProfile;

