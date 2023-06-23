import AnimatedText from '@/components/Home/AnimatedText'
import Layout from '@/components/Layout'
import TechStack from '@/components/Skills/TechStack';
import ToolStack from '@/components/Skills/ToolStack';
import Head from 'next/head'
import React from 'react'
import { ImPointRight } from "react-icons/im";

const skills = () => {
  return (
    <>
    <Head>
        <title>Shailesh Gehlot | Skills Page</title>
      </Head>
      <main className="flex w-full flex-col itmes-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Virtuoso"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
          <TechStack/>
        <ToolStack/>
        </Layout>
      </main>
    </>
  )
}

export default skills
