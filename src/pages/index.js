import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>InvestLocal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}