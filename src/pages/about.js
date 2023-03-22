import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
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
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-bold leading-tight py-2">
            About Us
          </h1>
          <div className="my-8">
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-6">
              InvestLocal is a website that aims to connect local investors with small businesses in their communities. The platform provides a way for investors to discover and invest in businesses in their local area, while also giving small businesses access to local capital.
            </p>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-6">
              InvestLocal allows investors to browse through a wide range of investment opportunities, including startups, small and medium-sized enterprises, and social enterprises. The platform supports businesses operating in various industries such as technology, manufacturing, agriculture, and more.
            </p>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-6">
              Small businesses looking for funding can also use the platform to connect with local investors. By providing detailed information on the businesses and investment opportunities listed on its platform, InvestLocal empowers investors to make informed decisions about their investments.
            </p>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">
              The website is designed with a user-friendly interface, which includes navigation menus and search bars to help investors and businesses quickly find the information they need. Overall, InvestLocal is a valuable resource for local investors and small businesses alike, enabling them to support each other and contribute to the growth of their local communities.
            </p>
          </div>
        </div>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-bold leading-tight pb-8">
            Our Team
          </h1>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className=" rounded-lg overflow-hidden shadow-lg">
                  <img src={member.photo} alt={member.name} className="w-full h-72 object-cover" />
                  <div className="px-6 py-4 text-gray-100">
                    <h2 className="text-lg font-bold mb-2">{member.name}</h2>
                    <p className="text-gray-500 text-base">{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
