// pages/_app.js
import Footer from '@/components/footer';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>InvestLocal</title>
        <meta name="description" content="This is my app." />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}


export default MyApp;
