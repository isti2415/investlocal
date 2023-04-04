import { useState, useEffect } from "react";
import InvestorNav from "../components/investornav";
import InvestorProfile from "../components/investorprofile";
import BusinessNav from "../components/businessnav";
import BusinessProfile from "../components/businessprofile";
import DarkModeToggle from "@/components/DarkModeToggle";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const darkModeClass = darkMode ? 'dark' : '';
  
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    setAccountType("investor");
  }, []);

  return (
    <div className={`w-full min-h-screen ${darkModeClass} bg-gray-200 dark:bg-gray-900 transition-all duration-500`}>
      {accountType === "investor" ? (
        <><InvestorNav />
        <InvestorProfile /></>
      ) : accountType === "business" ? (
        <><BusinessNav />
        <BusinessProfile /></>
      ) : (
        <p>Loading...</p>
      )}
      <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
    </div>
  );
};

export default Profile;