import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import AnimatedText from '@/components/Home/AnimatedText'
import Link from 'next/link'
import HireMe from '@/components/Home/HireMe'
import { LinkArrow } from '@/ui/Icons'
import TransitionEffect from '@/effects/TransitionEffect'
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import { useState } from 'react'
import ContactModal from '@/components/Contact/ContactModal'


export default function Home() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
     <>
      <Head>
        <title>Shailesh Gehlot | Home Page</title>
        <meta name="description" content=""></meta>
      </Head>
      <TransitionEffect />
      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                alt="shaileshgehlot"
                className="h-auto w-full lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="Shailesh-Gehlot_Resume.pdf"
                  target="_blank"
                  className="flex items-center rounded-lg border-2 mr-5 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="ml-1 w-6" />
                </Link>
                <button
                className="flex items-center rounded-lg border-2 border-solid  bg-light border-dark dark:border-light p-2.5 px-6 text-lg font-semibold text-dark hover:border-dark hover:bg-dark hover:text-light dark:bg-dark dark:text-light hover:dark:border-light hover:dark:bg-light hover:dark:text-dark md:p-2 md:px-4 md:text-base"
                onClick={()=>{setOpenModal(true)}}>Contact</button>
                <ContactModal openModal={openModal} closeModal={()=>{setOpenModal(false)}}/>                
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute bottom-8 right-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="shaileshgehlot" className="h-auto w-full" />
        </div>
      </main>
    </>
    </>
  )
}
