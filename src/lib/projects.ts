import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Project = {

  slug: string;

  title: string;

  category: string;

  description: string;

  date: string;

  content: string;

};

const projectsDirectory =
  path.join(
    process.cwd(),
    "src/content/projects"
  );

export function getProjectSlugs() {

  return fs.readdirSync(
    projectsDirectory
  );

}

export function getProjectBySlug(
  slug: string
): Project {

  const realSlug =
    slug.replace(".md", "");

  const fullPath =
    path.join(
      projectsDirectory,
      `${realSlug}.md`
    );

  const fileContents =
    fs.readFileSync(
      fullPath,
      "utf8"
    );

  const {
    data,
    content,
  } = matter(
    fileContents
  );

  return {

    slug: realSlug,

    title:
      data.title || "",

    category:
      data.category || "",

    description:
      data.description || "",

    date:
      String(
        data.date || ""
      ),

    content,

  };

}

export function getAllProjects()
: Project[] {

  return getProjectSlugs()
    .map(
      (slug) =>
        getProjectBySlug(
          slug
        )
    );

}