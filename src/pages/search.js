import { useState, useEffect } from "react";
import InvestorNav from "../components/investornav";
import InvestorDashboard from "../components/investmentsearch";
import BusinessNav from "../components/businessnav";
import BusinessDashboard from "../components/investorsearch";
import DarkModeToggle from "@/components/DarkModeToggle";

const Dashboard = () => {
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