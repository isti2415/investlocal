import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DarkModeToggle from "../components/DarkModeToggle";

export default function TermsAndConditions() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const darkModeClass = darkMode ? 'dark' : '';


    return (
        <>
            <Head>
                <title>InvestLocal - Terms and Conditions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-all duration-500`}>
                <Navbar darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
                <div className="py-12 px-4 mx-12">
                    <div className="max-w-7xl mx-auto">
                        <h1 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-3xl font-semibold mb-4`}>Terms and Conditions</h1>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the InvestLocal website (the "Service") operated by InvestLocal ("us", "we", or "our").
                        </p>
                        <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} list-disc pl-5`}>
                            <li>
                                <strong>Your Access to and Use of the Service:</strong> Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                            </li>
                            <li>
                                <strong>User Accounts:</strong> When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                            </li>
                            <li>
                                <strong>Intellectual Property Rights:</strong> Users acknowledge and agree that all original content, features, and functionality on our platform are the exclusive property of the platform owner and are protected by copyright, trademark, and other intellectual property laws.
                            </li>
                            <li>
                                <strong>User Content:</strong> Users are solely responsible for any content they post, display, or generate on our platform. The platform owner may require a license granting the right to use and reproduce user-generated content.
                            </li>
                            <li>
                                <strong>Prohibited Activities:</strong> Users must refrain from engaging in any activities prohibited on our platform, such as spamming, harassment, or sharing illegal content. The platform owner reserves the right to terminate user accounts for any violations of these rules.
                            </li>
                            <li>
                                <strong>Investment Risks:</strong> Users acknowledge that investing carries inherent risks, and our platform does not guarantee any returns. Users are strongly encouraged to seek professional advice before making any investment decisions.
                            </li>
                            <li>
                                <strong>Fees and Payments:</strong> Users must agree to pay any fees or charges associated with using our platform and must understand the details of our payment methods and refund policies.
                            </li>
                            <li>
                                <strong>Third-Party Links:</strong> Users acknowledge that our platform may contain links to third-party websites or services, and the platform owner is not responsible for the content or practices of these sites.
                            </li>
                            <li>
                                <strong>Limitation of Liability:</strong> Users agree that the platform owner's liability for any damages or losses incurred as a result of using our platform will be limited to the extent permitted by law.
                            </li>
                            <li>
                                <strong>Indemnification:</strong> Users agree to indemnify and hold the platform owner harmless from any claims or damages resulting from their use of our platform or violation of these Terms and Conditions.
                            </li>
                        </ul>
                    </div>
                </div>
                <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
                <Footer />
            </div>
        </>
    );
}
