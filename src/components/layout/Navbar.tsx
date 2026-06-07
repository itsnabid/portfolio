"use client";

import { useState } from "react";

import ThemeToggle from "../ThemeToggle";

import {
siteConfig
}
from "@/config/site";

export default function Navbar() {

const [open,setOpen] =
useState(false);

const links = [

["Home","#home"],

["About","#about"],

["Projects","#projects"],

["Resume","/resume/cv.pdf"],

["Blog","#blog"],

["Social","#social"],

];

return(

<header className="
sticky
top-0
z-50
border-b
border-[var(--border)]
bg-[var(--background)]/90
backdrop-blur
">

<div className="
mx-auto
flex
max-w-[1100px]
items-center
justify-between
px-6
py-4
">

<div className="
font-semibold
text-[var(--foreground)]
">

{siteConfig.name}

</div>


<nav className="
hidden
gap-6
md:flex
">

{links.map(
([name,href])=>(

<a
key={name}
href={href}
>

{name}

</a>

)
)}

</nav>


<div className="
flex
items-center
gap-4
">

<ThemeToggle/>

<button
className="
md:hidden
"
onClick={()=>
setOpen(
!open
)
}
>

☰

</button>

</div>

</div>


{open && (

<nav className="
border-t
border-[var(--border)]
p-6
md:hidden
flex
flex-col
gap-4
">

{links.map(
([name,href])=>(

<a
key={name}
href={href}
onClick={()=>
setOpen(
false
)
}
>

{name}

</a>

)
)}

</nav>

)}

</header>

);

}