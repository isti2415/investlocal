import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>InvestLocal - Privacy Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-900 min-h-screen">
                <Navbar />
                <div className="py-12 px-4 mx-12">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl font-semibold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-white mb-4">
                            At InvestLocal, we are committed to protecting the privacy of our users. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information on our platform.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
                        <p className="text-white mb-4">
                            We may collect personal information from users, such as name, email address, and contact information. This information is collected for the purpose of creating and maintaining user accounts, facilitating transactions between users, and communicating with users about our services.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mb-4">Sharing of Personal Information</h2>
                        <p className="text-white mb-4">
                            We may share personal information with third-party service providers who assist us in providing our services, such as payment processors or marketing partners. We may also share personal information with regulatory or law enforcement authorities if required by law or if we believe it is necessary to prevent illegal activities.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
                        <p className="text-white mb-4">
                            We take reasonable measures to protect the security of user information on our platform, but we cannot guarantee that all security measures will be effective. Users should take precautions to protect their own personal information, such as using strong passwords and avoiding sharing login credentials with others.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Other Tracking Technologies</h2>
                        <p className="text-white mb-4">
                            We may use cookies or other tracking technologies to collect information about user preferences and usage of our platform. This information is used to improve our services and to personalize the user experience. Users may opt-out of cookies through their browser settings, but this may affect the functionality of our platform.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mb-4">Changes to this Privacy Policy</h2>
                        <p className="text-white mb-4">
                            We reserve the right to update or modify this Privacy Policy at any time without prior notice. Users are responsible for regularly reviewing this policy to ensure they understand the latest version.
                        </p>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                        <p className="text-white mb-4">
                            If you have any questions or concerns about our Privacy Policy, please contact us at support@investlocal.com.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default PrivacyPolicy;