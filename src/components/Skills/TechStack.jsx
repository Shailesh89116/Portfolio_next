import React from 'react'
import Stack from './Stack'
import { SiCss3, SiDocker, SiExpress, SiHtml5, SiJavascript, SiKubernetes, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSass } from 'react-icons/si'



const TechStack = () => {
  return (
    <>
    <h2 className="mt-32 w-full text-center text-6xl md:mt-16 md:text-4xl sm:text-2xl">
      <strong className="text-primary dark:text-primaryDark">
        Professional
      </strong>
      &nbsp;<span className='dark:text-light font-medium'>Skillset</span>
    </h2>
    <div className="grid w-full grid-cols-8 items-start justify-center gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
      <Stack>
        <SiHtml5 />
      </Stack>
      <Stack>
        <SiCss3 />
      </Stack>
      <Stack>
        <SiSass />
      </Stack>
      <Stack>
        <SiJavascript />
      </Stack>
      <Stack>
        <SiNextdotjs />
      </Stack>
      <Stack>
        <SiReact />
      </Stack>
      <Stack>
        <SiRedux />
      </Stack>
      <Stack>
        <SiNodedotjs />
      </Stack>
      <Stack>
        <SiExpress />
      </Stack>
      <Stack>
        <SiMongodb/>
      </Stack>
      <Stack>
        <SiDocker />
      </Stack>
      <Stack>
        <SiKubernetes />
      </Stack>

      
    </div>
  </>
  )
}

export default TechStack
