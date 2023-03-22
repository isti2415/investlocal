import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Investor = () => {
    return (
        <>
            <Head>
                <title>InvestLocal - For Investors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-900 min-h-screen">
                <Navbar />
                <div className="px-4 py-10 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                        <div className="mb-8 md:mb-0">
                            <h1 className="text-3xl font-bold text-gray-300 mb-8">Invest in Your Local Community with InvestLocal</h1>
                            <p className="text-gray-300 text-xl mb-8">At InvestLocal, we believe that investing in local businesses is not only good for the community, but also a smart financial decision. By investing in businesses that are close to home, you can support the local economy, create jobs, and contribute to the growth and development of your community.</p>
                            <h2 className="text-2xl font-bold text-gray-300 mb-4">Why InvestLocal?</h2>
                            <ul className="list-disc list-inside text-xl text-gray-300 mb-8">
                                <li>Connect with local businesses and invest in your community</li>
                                <li>Access to a wide range of investment opportunities</li>
                                <li>Empower small businesses and help them grow</li>
                                <li>Make informed investment decisions with detailed information and analysis</li>
                                <li>User-friendly platform with easy navigation and search features</li>
                            </ul>
                            <h2 className="text-2xl font-bold text-gray-300 mb-4">How It Works</h2>
                            <ol className="list-decimal list-inside text-xl text-gray-300 mb-8">
                                <li>Create an account on InvestLocal</li>
                                <li>Browse through a wide range of investment opportunities in your local area</li>
                                <li>Review detailed information and analysis of each business</li>
                                <li>Invest in the businesses that align with your values and financial goals</li>
                                <li>Track your investments and receive updates on the businesses you've invested in</li>
                            </ol>
                        </div>
                        <div className="w-full">
                            <img src="/invest.png" alt="Illustration of an investor" className="w-full" />
                        </div>
                    </div>
                    <p className="pt-8 text-blue-300 text-xl">InvestLocal is committed to supporting local businesses and helping investors make smart investment decisions. Join our community today and start investing in your local economy!</p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Investor;
