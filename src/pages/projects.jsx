import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdDashboard, MdWorkOutline } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { GithubIcon } from "@/ui/Icons";
import TransitionEffect from "@/effects/TransitionEffect";
import AnimatedText from "@/components/Home/AnimatedText";
import Tabs from "@/ui/Tabs";
import { ProjectsInfo } from "@/utlis/projects";
import Layout from "@/components/Layout";


const FramerImage = motion(Image);

const Project = ({
  type,
  name,
  description,
  img_source,
  demo_link,
  source_code_link,
  domains,
  is_featured,
}) => {
  return (
    <article className="rounder-br-2xl relative flex w-full items-center justify-between rounded-3xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -right-6 top-1 -z-10 h-[102%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light lg:-right-2 lg:h-[101%] sm:h-[101%] xs:-right-2  xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={demo_link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img_source}
          alt={name}
          width={50}
          height={50}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        {is_featured && (
          <span className="mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
            Featured Project
          </span>
        )}
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={demo_link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {name}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {description}
        </p>
        <div className="mt-2 flex items-center">
          {source_code_link && (
            <Link href={source_code_link} target="_blank" className="w-10">
              <GithubIcon className="" />
            </Link>
          )}
          {demo_link && (
            <Link
              href={demo_link}
              target="_blank"
              className={`${
                source_code_link && "ml-4"
              } rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base`}
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [projects, setProjects] = useState(ProjectsInfo);
  const [tabs] = useState([
    {
      name: "All",
      icon: (
        <MdDashboard
          className={"mr-2 h-5 w-5 text-primary dark:text-primaryDark"}
        />
      ),
    },
    {
      name: "Professional Projects",
      icon: (
        <MdWorkOutline
          className={"mr-2 h-5 w-5 text-primary dark:text-primaryDark"}
        />
      ),
    },
    {
      name: "Clones",
      icon: (
        <MdWorkOutline
          className={"mr-2 h-5 w-5 text-primary dark:text-primaryDark"}
        />
      ),
    },

  ]);

  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  useEffect(() => {
    const filteredProjects = ProjectsInfo.filter((x) =>
      activeTab.includes(x.type)
    );
    filteredProjects.length
      ? setProjects(filteredProjects)
      : setProjects(ProjectsInfo);
  }, [activeTab]);

  return (
    <>
      <Head>
        <title>Shailesh Gehlot | Projects Page</title>
        <meta name="description" content=""></meta>
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 2xl:!text-7xl xl:!text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <Tabs
            className="mb-5"
            tabs={tabs}
            setActiveTab={handleActiveTab}
            activeTab={activeTab}
          />

          <motion.div
            layout
            className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            {projects?.map((project, index) => (
              <motion.div
                layout
                key={`project-${index}`}
                className={` ${
                  project.is_featured
                    ? "col-span-12"
                    : "col-span-6 sm:col-span-12"
                }`}
              >
                <Project
                  type={project.type}
                  name={project.name}
                  description={project.description}
                  img_source={project.img_source}
                  demo_link={project.demo_link}
                  source_code_link={project.source_code_link}
                  domains={project.domains}
                  is_featured={project.is_featured}
                />
              </motion.div>
            ))}
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;