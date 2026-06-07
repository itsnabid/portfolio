import {
getProjectBySlug
}
from "@/lib/projects";

import {remark} from "remark";

import html from "remark-html";

type Props = {

params: Promise<{
slug:string;
}>;

};

export default async function ProjectPage({
params,
}:Props){

const { slug } =
await params;

const project =
getProjectBySlug(
slug
);

const processed =
await remark()
.use(html)
.process(
project.content
);

const contentHtml =
processed.toString();

return(

<main className="
mx-auto
max-w-[900px]
px-6
py-24
">
  <a
href="/"
className="
mb-10
inline-block
opacity-70
"
>

← Back

</a>

<h1 className="
text-5xl
font-bold
">

{project.title}

</h1>


<div className="
mt-6
flex
flex-wrap
gap-4
text-sm
opacity-70
">

<span>

{project.category}

</span>

<span>

•

</span>

<span>

{project.date}

</span>

</div>


<p className="
mt-6
text-lg
opacity-80
">

{project.description}

</p>


<article
className="
prose
mt-12
dark:prose-invert
"
dangerouslySetInnerHTML={{
__html:
contentHtml,
}}
/>

</main>

);

}