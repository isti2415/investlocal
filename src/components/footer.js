import Link from "next/link";
import React from "react";
import Container from "./container";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const iconClasses = [
    "h-6",
    "w-6",
    "text-gray-700",
    "${darkModeClass}",
    "dark:text-gray-300",
  ];

  return (
    <div className="float bottom-0 w-full bg-gray-200 dark:bg-gray-900 transition-all duration-500">
      <Container>
        <div className="flex justify-between mx-auto border-t border-gray-700 ${darkModeClass} dark:border-gray-300">
          <div className="flex items-center mt-5">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-gray-700 ${darkModeClass} dark:text-gray-300 "
            >
              <span>
                <img
                  src="/money.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
              </span>
              <span>InvestLocal</span>
            </Link>
          </div>
          <div className="mt-5">
            <div className="text-right text-gray-700 ${darkModeClass} dark:text-gray-300 ">
              Follow InvestLocal
            </div>
            <div className="flex space-x-5">
              <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className={iconClasses.join(" ")} />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className={iconClasses.join(" ")} />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className={iconClasses.join(" ")} />
              </a>
              <a
                href="https://linkedin.com/company/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className={iconClasses.join(" ")} />
              </a>
            </div>
          </div>
        </div>
        <h2 className="mt-5 text-center text-gray-700 ${darkModeClass} dark:text-gray-300">
        Copyright © {new Date().getFullYear()} InvestLocal. All rights reserved.
        <p/>
        Made with ❤️ by Istiaq Ahmed & Faiza Omar Arpita
        </h2>
      </Container>
    </div>
  );
}
