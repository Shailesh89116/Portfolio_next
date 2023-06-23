import AnimatedText from '@/components/Home/AnimatedText'
import Layout from '@/components/Layout'
import TechStack from '@/components/Skills/TechStack';
import ToolStack from '@/components/Skills/ToolStack';
import TransitionEffect from '@/effects/TransitionEffect';
import Head from 'next/head'
import React from 'react'
import { ImPointRight } from "react-icons/im";

const skills = () => {
  return (
    <>
    <Head>
      <title>Shailesh Gehlot | Skills Page</title>
      <meta name="description" content=""></meta>
    </Head>
    <TransitionEffect />
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16 space-y-14">
        <AnimatedText
          text="Virtuoso"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <TechStack />
        <ToolStack />
      </Layout>
    </main>
  </>
  )
}

export default skills
