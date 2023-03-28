import { useState, useEffect } from "react";
import InvestorNav from "../components/investornav";
import InvestorDashboard from "../components/investordash";
import BusinessNav from "../components/businessnav";
import BusinessDashboard from "../components/businessdash";

const Dashboard = () => {
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    setAccountType("investor");
  }, []);

  return (
    <>
      {accountType === "investor" ? (
        <><InvestorNav />
        <InvestorDashboard /></>
      ) : accountType === "business" ? (
        <><BusinessNav />
        <BusinessDashboard /></>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Dashboard;