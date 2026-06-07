import ProjectCard from "../ProjectCard";

import {
  getAllProjects,
} from "@/lib/projects";

export default function Projects() {

  const projects =
    getAllProjects();

  return (

    <section
      id="projects"
      className="py-24"
    >

      <h2 className="
      text-4xl
      font-bold
      ">

        PROJECTS

      </h2>


      <div className="
      mt-12
      grid
      gap-6
      md:grid-cols-2
      ">

        {projects.map(
          (project) => (

            <ProjectCard

              key={project.slug}

              title={
                String(
                  project.title
                )
              }

              category={
                String(
                  project.category
                )
              }

              description={
                String(
                  project.description
                )
              }

              slug={
                project.slug
              }

            />

          )
        )}

      </div>

    </section>

  );

}