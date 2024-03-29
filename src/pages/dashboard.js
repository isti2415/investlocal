import { useState, useEffect } from "react";
import InvestorNav from "../components/investornav";
import InvestorDashboard from "../components/investordash";
import BusinessNav from "../components/businessnav";
import BusinessDashboard from "../components/businessdash";
import DarkModeToggle from "@/components/DarkModeToggle";
import Cookies from 'js-cookie';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase';

const Dashboard = () => {
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
        <><InvestorNav />
        <InvestorDashboard /></>
      ) : accountType === "business" ? (
        <><BusinessNav />
        <BusinessDashboard /></>
      ) : (
        <p>Loading...</p>
      )}
      <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
    </div>
  );
};

export default Dashboard;
