import Head from "next/head";
import Container from "../components/container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState } from "react";

export default function PrivacyPolicy() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const darkModeClass = darkMode ? 'dark' : '';

    return (
        <>
            <Head>
                <title>InvestLocal - Privacy Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={'bg-gray-200 ${darkModeClass} dark:bg-gray-900 min-h-screen transition-colors duration-500'}>
                <Navbar />
                <h1 className="dark:text-white text-gray-900 text-center text-3xl md:text-4xl font-bold mt-8 mb-4">Privacy Policy</h1>
                <Container className="max-w-3xl dark:text-gray-300 text-gray-600 ">
                    <p className="mb-4">At InvestLocal, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information.</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                    <p className="mb-4">We collect personal information that you provide to us, such as your name, email address, and phone number, when you sign up for our services or contact us through our website.</p>
                    <p className="mb-4">We also collect information automatically, such as your IP address and browser type, when you use our website.</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                    <p className="mb-4">We use your personal information to provide our services to you and to communicate with you about our services. We may also use your information to improve our website and services.</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
                    <p className="mb-4">We do not share your personal information with third parties, except as necessary to provide our services to you or as required by law.</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                    <p className="mb-4">We take reasonable measures to protect your personal information from unauthorized access, use, and disclosure.</p>
                    <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
                    <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>
                </Container>
                <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
                <Footer />
            </div >
        </>
    );
}