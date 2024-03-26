"use client";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useParams } from "next/navigation";
import "@/app/components/ProjectsCategory/ProjectsCategory.css";
import ProjectCard from "./ProjectCard";

const ProjectsCategory = () => {
  const [projects, setProjects] = useState([]);
  const category = useParams();
  const categories = ["all", "css", "javascript", "react", "node js"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex + 1);

  useEffect(() => {
    // Fetch projects data here
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/akash-khan-311/my-portfolio/main/public/projects.json"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [category]);

  const css = projects.filter((project) => project.category === "css");
  const react = projects.filter((project) => project.category === "react");
  const javascript = projects.filter(
    (project) => project.category === "javascript"
  );
  const nodejs = projects.filter(
    (project) => project.category === "react+nodejs"
  );

  return (
    <>
      <PageTitle title={"Portfolios"} />
      <div className="text-gray-100 dark:text-white mt-32">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center flex-wrap gap-5 mb-32">
            <Tab className="text-xl bg-sky-500 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#f3155852] duration-150 outline-none ">
              ALL
            </Tab>
            <Tab className="text-xl bg-sky-500 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#f3155852] duration-150 outline-none ">
              CSS
            </Tab>
            <Tab className="text-xl bg-sky-500 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#f3155862] duration-150 outline-none ">
              JAVASCRIPT
            </Tab>
            <Tab className="text-xl bg-sky-500 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#f3155862] duration-150 outline-none ">
              REACT JS
            </Tab>
            <Tab className="text-xl bg-sky-500 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#f3155862] duration-150 outline-none ">
              NODE JS
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {css.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {javascript.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {react.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {nodejs.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ProjectsCategory;
