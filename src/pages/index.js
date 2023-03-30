import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const darkModeClass = darkMode ? 'dark' : '';

  return (
    <div>
      <div className={`min-h-screen bg-gray-200 ${darkModeClass} dark:bg-gray-900`}>
        <Head>
          <title>InvestLocal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />
        <Footer />
      </div>
      <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
    </div>
  );
}