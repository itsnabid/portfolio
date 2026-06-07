import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {

  slug: string;

  title: string;

  description: string;

  date: string;

  content: string;

};

const blogDirectory =
path.join(
process.cwd(),
"src/content/blog"
);

export function getBlogSlugs() {

return fs.readdirSync(
blogDirectory
);

}

export function getBlogBySlug(
slug:string
):BlogPost{

const realSlug =
slug.replace(
".md",
""
);

const fullPath =
path.join(
blogDirectory,
`${realSlug}.md`
);

const file =
fs.readFileSync(
fullPath,
"utf8"
);

const {
data,
content,
} = matter(file);

return {

slug:realSlug,

title:
data.title || "",

description:
data.description || "",

date:
String(
data.date || ""
),

content,

};

}

export function getAllPosts()
:BlogPost[]{

return getBlogSlugs()
.map(
(slug)=>
getBlogBySlug(
slug
)
);

}