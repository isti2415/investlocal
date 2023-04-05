import Image from "next/image";
import Container from "./container";
import heroImg from "../../public/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2">
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-700 ${darkModeClass} dark:text-gray-100 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Invest in Your Own Backyard
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-700 ${darkModeClass} dark:text-gray-100 lg:text-xl xl:text-2xl">
              InvestLocal is a website that aims to connect local investors with small businesses in their communities. The platform provides a way for investors to discover and invest in businesses in their local area, while also giving small businesses access to local capital. Our mission is to empower local economies by creating opportunities for residents to invest in the businesses that make their communities unique and vibrant.
            </p>
            <p className="pb-5 text-xl leading-normal text-gray-700 ${darkModeClass} dark:text-gray-100 lg:text-xl xl:text-2xl">
              With InvestLocal, you can discover a diverse range of investment opportunities available in your local community, from supporting innovative startups to established small businesses. By investing locally, you not only contribute to the growth of your community but also have a direct impact on the success of the businesses that make it special.
            </p>
            <div className="mt-5 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/login"
                className="inline-block px-8 py-4 text-xl font-medium text-center text-gray-100 bg-gray-600 rounded-md hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-500">
                Login Now
              </a>
              <a
                href="/register"
                className="inline-block px-8 py-4 text-xl font-medium text-center text-gray-100 bg-indigo-600 rounded-md hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-500">
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src={heroImg}
            width="616"
            height="617"
            alt="Hero Illustration"
            layout="responsive"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </Container>
    </>
  );
}
