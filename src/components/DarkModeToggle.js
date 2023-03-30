import { useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  const toggleDarkMode = () => {
    onToggle(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sunColor = darkMode ? '#fff' : '#1a202c';
  const moonColor = darkMode ? '#fff':'#1a202c';

  return (
    <button
      className="p-2 fixed bottom-4 right-4 z-10 rounded-full"
      onClick={toggleDarkMode}
    >
      {darkMode ? <RiSunFill size={32} style={{ color: sunColor }} /> : <RiMoonFill size={32} style={{ color: moonColor }} />}
    </button>
  );
};

export default DarkModeToggle;