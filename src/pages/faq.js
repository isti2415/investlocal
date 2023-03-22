import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import Container from "../components/container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>InvestLocal - FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Container className="">
        <img src="/faq.png" alt="" className="w-full md:w-1/2 mb-8 md:mb-0 mx-auto" />
  <div className="grid grid-cols-2 gap-4 p-2 mt-8 mx-auto rounded-2xl">
    {faqdata.map((item, index) => (
      <div key={item.question} className="mb-5 cols-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 bg-gray-600 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                <span>{item.question}</span>
                
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-300">
                {item.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    ))}
  </div>
</Container>
        <Footer />
      </div>
    </>
  );
}

const faqdata = [
  {
    question: "What is InvestLocal?",
    answer: "InvestLocal is a platform that connects local investors with small businesses looking for funding in their communities. It allows investors to discover and invest in businesses in their local areas, and provides small businesses with access to local capital."
    },
    {
    question: "Can I use it in a commercial project?",
    answer: "Yes, you can."
    },
    {
    question: "What is your refund policy?",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    },
    {
    question: "Do you offer technical support?",
    answer: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."
    },
    {
    question: "Who can use InvestLocal?",
    answer: "InvestLocal is open to anyone who wants to invest in their local community and support small businesses. Small businesses looking for funding can also use the platform to connect with local investors."
    },
    {
    question: "What types of businesses can I invest in through InvestLocal?",
    answer: "InvestLocal supports a wide range of businesses, including startups, small and medium-sized enterprises, and social enterprises. These businesses operate in various industries, such as tech, manufacturing, agriculture, and more."
    },
    {
    question: "How much can I invest in a business through InvestLocal?",
    answer: "The minimum investment amount varies depending on the business and the investment opportunity. However, most investment opportunities on InvestLocal have a low minimum investment amount, making it accessible to a wide range of investors."
    },
    {
    question: "Is my investment on InvestLocal safe?",
    answer: "Investing always carries some level of risk, and there is no guarantee of returns. However, InvestLocal takes measures to verify the legitimacy of the businesses and investment opportunities listed on its platform. Additionally, InvestLocal provides investors with detailed information on the businesses, so they can make informed investment decisions."
    }
];
