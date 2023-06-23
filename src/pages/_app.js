import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
        <Navbar/>
        <AnimatePresence>
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  );
}
