import React from "react";
import ExperienceAccordion from "./components/ExperienceAccordion";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import experiences from "./data/experiences.json";
import projects from "./data/projetcs.json";

function App() {
  return (
    <Container>
      {/* Navbar  */}
      <Navbar />

      {/* Hero  */}
      <Hero />

      {/* Experience Section */}

      <div className="py-12">
        <p className="mb-8 font-medium text-xl tracking-normal">Experience</p>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceAccordion
              company={experience.company}
              role={experience.role}
              tenure={experience.tenure}
            >
              {experience.accomplishments.map((accomplishment, index) => (
                <div key={index} className="flex gap-2">
                  <span className="mt-1">•</span>
                  <span className=" text-sm py-1 text-gray-600 tracking-wide leading-6">
                    {accomplishment}
                  </span>
                </div>
              ))}
            </ExperienceAccordion>

            <div className="my-4" />
          </React.Fragment>
        ))}
      </div>

      {/* Featured Projects Section */}

      <div className="py-12">
        <p className="mb-8 font-medium text-xl tracking-normal">
          Featured Projects
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              img={{ src: project.img.src, alt: project.img.alt }}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </Container>
  );
}

export default App;
