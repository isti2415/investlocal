import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>InvestLocal - Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-900 min-h-screen">
                <Navbar />
                <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                    <div class="flex flex-col justify-between">
                        <div class="">
                            <h2 class="py-2 pb-8 text-4xl font-bold leading-tight lg:text-5xl text-gray-300">Contact Us</h2>
                            <img src="/contact.png" alt="" class="h-100" />
                        </div>
                    </div>
                    <form novalidate="" class="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label for="name" class="text-gray-300 text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" class="w-full p-3 rounded text-gray-100 bg-gray-800" />
                        </div>
                        <div>
                            <label for="email" class="text-gray-300 text-sm">Email</label>
                            <input id="email" type="email" class="w-full p-3 rounded text-gray-100 bg-gray-800" />
                        </div>
                        <div>
                            <label for="message" class="text-gray-300 text-sm">Message</label>
                            <textarea id="message" rows="3" class="w-full p-3 rounded text-gray-100 bg-gray-800"></textarea>
                        </div>
                        <button type="submit" class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-indigo-500 text-gray-100">Send Message</button>
                    </form>
                </div>
                <Footer />

            </div>
        </>
    );
}