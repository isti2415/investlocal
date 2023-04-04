import { useState, useEffect } from "react";
import InvestorNav from "../components/investornav";
import InvestorSearch from "../components/investorsearch";
import BusinessNav from "../components/businessnav";
import InvestmentSearch from "../components/investmentsearch";
import DarkModeToggle from "@/components/DarkModeToggle";
import Cookies from 'js-cookie';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [accountType, setAccountType] = useState("");

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const darkModeClass = darkMode ? 'dark' : '';

  useEffect(() => {
    const userId = Cookies.get('user');
    if (userId) {
      const userRef = doc(collection(db, 'users'), userId);
      getDoc(userRef).then((doc) => {
        if (doc.exists()) {
          const user = doc.data();
          setAccountType(user.accountType);
        }
      }).catch((error) => {
        console.log("Error getting user document:", error);
      });
    }
  }, []);

  return (
    <div className={`w-full min-h-screen ${darkModeClass} bg-gray-200 dark:bg-gray-900 transition-all duration-500`}>
      {accountType === "investor" ? (
        <>
          <InvestorNav />
          <InvestmentSearch />
        </>
      ) : accountType === "business" ? (
        <>
          <BusinessNav />
          <InvestorSearch />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
    </div>
  );
};

export default Profile;