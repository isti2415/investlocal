import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const darkModeClass = darkMode ? "dark" : "";

  return (
    <>
      <Head>
        <title>InvestLocal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-h-screen ${darkModeClass} bg-gray-200 dark:bg-gray-900 transition-all duration-500`}>
        <Navbar darkMode={darkMode} />
        <Hero darkMode={darkMode} />
      </div>
      <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
    </>
  );
}
