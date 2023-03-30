import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const navigation = [
    {
      name: "Investors",
      href: "/investor",
    },
    {
      name: "Businesses",
      href: "/business",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
  ];

  const darkModeClass = darkMode ? "dark" : "";

  return (
    <div className={`w-full ${darkModeClass}`}>
      <nav className={`container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0 ${darkModeClass}`}>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link
                  href="/"
                  className={`flex items-center space-x-2 text-2xl font-medium text-gray-700 ${darkModeClass} dark:text-gray-100 `}
                >
                  <span>
                    <img
                      src="/money.png"
                      alt="N"
                      width="32"
                      height="32"
                      className={`w-8 ${darkModeClass} text-gray-100`}
                    />
                  </span>
                  <span>InvestLocal</span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className={`px-2 py-1 ml-auto text-gray-700 ${darkModeClass} dark:text-gray-100 rounded-md lg:hidden`}
                >
                  <MenuIcon className="w-6 h-6" />
                </Disclosure.Button>

                <Disclosure.Panel className={`flex flex-wrap w-full my-5 lg:hidden ${darkModeClass}`}>
                  <>
                    {navigation.map((menu, index) => (
                      <Link
                        key={index}
                        href={menu.href}
                        className={`w-full px-4 py-2 -ml-4 text-gray-700 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none ${darkModeClass} dark:text-gray-100`}
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className={`hidden text-center lg:flex lg:items-center ${darkModeClass}`}>
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className={`inline-block px-4 py-2 text-lg font-normal text-gray-700 ${darkModeClass} dark:text-gray-100 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none`}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          
        </div>
      </nav >
    </div >
  );
};
