import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/pages/api/firebase'

function InvestorSearch() {
  const [businessAccounts, setBusinessAccounts] = useState([]);

  useEffect(() => {
    const fetchBusinessAccounts = async () => {
      const q = query(collection(db, 'accounts'), where('accountType', '==', 'business'));
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
    <div>
      {businessAccounts.map((account) => (
        <div key={account.id}>
          <div>Name: {account.name}</div>
          <div>Email: {account.email}</div>
          <div>Phone: {account.phone}</div>
          <div>Address: {account.address}</div>
          <div>LinkedIn: {account.linkedin}</div>
          <div>Net Worth: {account.networth}</div>
        </div>
      ))}
    </div>
  );
}

export default InvestorSearch;
