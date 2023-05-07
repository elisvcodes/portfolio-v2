import React from "react";
import ExperienceCard from "./components/Cards/ExperienceCard";
import Container from "./components/Container";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/Cards/ProjectCard";
import Footer from "./components/Footer";
import experiences from "./data/experiences.json";
import projects from "./data/projetcs.json";
import ArticlesCard from "./components/Cards/ArticlesCard";

function App() {
  return (
    <Container>
      {/* Navbar  */}
      <Navbar />

      {/* Hero  */}
      <Hero />

      {/* Experience Section */}
      <Section title="Experience">
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceCard
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
            </ExperienceCard>

            <div className="my-4" />
          </React.Fragment>
        ))}
      </Section>

      {/* Featured Projects Section */}

      <Section title="Featured Projects">
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
      </Section>

      {/* Articles Section */}

      <Section title="Featured Articles">
        <ArticlesCard
          title="How to add Stripe payments to your Next.js app"
          link="https://blog.elisv.com/how-to-add-stripe-payments-to-your-next-js-app-d1cfced7c8a5"
        />
        <ArticlesCard
          title="Learn How to Build a Full-Stack Application - Part 1"
          link="https://medium.com/swlh/learn-how-to-build-a-full-stack-application-using-node-js-and-react-in-2021-part-1-121fa6762a69"
        />
        <ArticlesCard
          title="Learn How to Build a Full-Stack Application - Part 2"
          link="https://medium.com/geekculture/learn-how-to-build-a-full-stack-application-using-node-js-and-react-in-2021-part-two-front-end-bfa2665ffaf4"
        />
      </Section>

      {/* Footer */}
      <Footer />
    </Container>
  );
}

export default App;
