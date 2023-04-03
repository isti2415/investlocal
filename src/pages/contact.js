import Head from "next/head";
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
    <>
      <Head>
        <title>InvestLocal - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`bg-gray-200 dark:bg-gray-900 transition-colors duration-500 ${
          darkMode && "dark"
        } min-h-screen`}
      >
        <Navbar darkMode={darkMode} />
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <form
            noValidate
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl dark:text-gray-300">
              Contact Us
            </h2>
            <div>
              <label
                htmlFor="name"
                className="dark:text-gray-300 text-sm"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:text-gray-100 dark:bg-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="dark:text-gray-300 text-sm"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:text-gray-100 dark:bg-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="dark:text-gray-300 text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:text-gray-100 dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-indigo-500 text-gray-100"
            >
              Send Message
            </button>
          </form>
          <div className="mt-16 flex flex-col justify-between">
            <div className="">
              <img
                src="/contact.png"
                alt=""
                className="h-100"
              />
            </div>
          </div>
        </div>
        <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}
