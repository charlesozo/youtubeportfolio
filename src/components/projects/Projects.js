import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT OUR PORTFOLIO AND GIVE US YOUR FEEDBACK"
          des="Our Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a
          href="https://www.travoticholidays.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsCard
            title="Tour Guide Website"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
        </a>
        <a
          href="https://lenstax.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ProjectsCard
          title="NGO website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          />
        </a>
        
        <a
          href="https://www.crops-trading.in/fiwinadi/login.php"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ProjectsCard
          title="Trading Platform"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          />
        </a>

        <a
          href="https://gptdomaine.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ProjectsCard
          title="News Feed"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          />
        </a>
        <a
          href="https://timesmedia.co.in/ec/public/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ProjectsCard
          title="E-commerce site"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          />
        </a>
        <a
          href="https://sterve.shop/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <ProjectsCard
          title="Ai powered Platform"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
