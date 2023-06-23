import React from 'react'
import Stack from './Stack'
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiAmazonaws,
    SiJenkins,
    SiGit,
    SiNotion,
    SiSlack,
    SiDocker,
  } from "react-icons/si";

const ToolStack = () => {
  return (
    <>
      <h2 className="w-full text-center text-6xl md:mt-10 md:text-4xl">
        <strong className="text-primary dark:text-primaryDark">Tools</strong> 
        &nbsp;<span className='dark:text-light font-medium'>I Use</span>
      </h2>
      <div className="grid w-full grid-cols-8 items-start justify-center gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
        <Stack>
          <SiVisualstudiocode />
        </Stack>
        <Stack>
          <SiAmazonaws />
        </Stack>
        <Stack>
          <SiNotion />
        </Stack>
        <Stack>
          <SiGit />
        </Stack>
        <Stack>
          <SiPostman />
        </Stack>
        <Stack>
          <SiDocker />
        </Stack>
        <Stack>
          <SiVercel />
        </Stack>
      </div>
    </>
  )
}

export default ToolStack
