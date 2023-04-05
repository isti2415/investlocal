import Head from "next/head";
import Navbar from "../components/navbar";
import { useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  const darkModeClass = darkMode ? "dark" : "";

  const teamMembers = [
    {
      name: "Istiaq Ahmed",
      title: "System Analyst & Developer",
      photo: "/istiaq.jpg",
    },
    {
      name: "Faiza Omar Arpita",
      title: "System Analyst & Developer",
      photo: "/faiza.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>InvestLocal - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-700"
          } min-h-screen transition duration-500`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1
            className={`${darkMode ? "text-gray-300" : "text-gray-700"
              } text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight`}
          >
            About Us
          </h1>
          <div className="my-8">
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"
                } text-lg sm:text-xl lg:text-2xl mb-6`}
            >
              InvestLocal is a website that aims to connect local investors with
              small businesses in their communities. The platform provides a way
              for investors to discover and invest in businesses in their local
              area, while also giving small businesses access to local capital.
            </p>
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"
                } text-lg sm:text-xl lg:text-2xl mb-6`}
            >
              InvestLocal allows investors to browse through a wide range of
              investment opportunities, including startups, small and
              medium-sized enterprises, and social enterprises. The platform
              supports businesses operating in various industries such as
              technology, manufacturing, agriculture, and more.
            </p>
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"
                } text-lg sm:text-xl lg:text-2xl mb-6`}
            >
              Small businesses looking for funding can also use the platform to
              connect with local investors. By providing detailed information on
              the businesses and investment opportunities listed on its platform,
              InvestLocal empowers investors to make informed decisions about
              their investments.
            </p>
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-700"
                } text-lg sm:text-xl lg:text-2xl`}
            >
              The website is designed with a user-friendly interface, which
              includes navigation menus and search bars to help investors and
              businesses quickly find the information they need. Overall,
              InvestLocal is a valuable resource for local investors and small
              businesses alike, enabling them to connect with each other and grow their communities together.
            </p>
          </div>
          <div className="my-8">
            <h2 className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8`}>
              Our Team
            </h2>
            <div className="flex flex-wrap -mx-4">
              {teamMembers.map((member) => (<div key={member.name} className="w-full text-center sm:w-1/2 lg:w-1/3 px-4">
                <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-md mb-6`}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-128 h-64 mx-auto mb-4"
                  />
                  <h3
                    className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-xl font-bold leading-tight mb-2`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-lg mb-4`}
                  >
                    {member.title}
                  </p>
                </div>
              </div>
              ))}
            </div >
          </div >
        </div >
        <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      </div >
    </>
  );
}
