import { useState, useEffect } from "react";

const Dashboard = () => {
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    setAccountType("business");
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