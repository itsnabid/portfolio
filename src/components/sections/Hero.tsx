import Image from "next/image";

import {
siteConfig
}
from "@/config/site";

export default function Hero() {

  return (

    <section className="py-24">

      <div className="
      flex
      flex-col
      items-center
      gap-12
      md:flex-row
      md:items-center
      ">

        <div className="
relative
h-56
w-56
overflow-hidden
rounded-3xl
border
">

<Image

src="/profile/profile.jpg"

alt="Profile"

fill

className="
object-cover
"

/>

</div>


        <div className="flex-1">

          <h1 className="
          text-5xl
          font-bold
          ">

            {siteConfig.name}

          </h1>


          <p className="
          mt-6
          max-w-2xl
          text-lg
          ">

            {siteConfig.title}

          </p>


          <div className="
          mt-8
          flex
          flex-wrap
          gap-3
          ">

            <span className="rounded-full border px-4 py-2">
              Research
            </span>

            <span className="rounded-full border px-4 py-2">
              Electronics
            </span>

            <span className="rounded-full border px-4 py-2">
              Software
            </span>

            <span className="rounded-full border px-4 py-2">
              Computer Architecture
            </span>

          </div>


          <div className="
          mt-8
          flex
          gap-4
          ">

            <a
  href="#projects"
  className="
  rounded-lg
  border
  border-[var(--border)]
  px-6
  py-3
  "
>

  View Projects

</a>


            <a
  href="/resume/cv.pdf"
  download
  className="
  rounded-lg
  border
  border-[var(--border)]
  px-6
  py-3
  "
>

  Download CV

</a>

          </div>

        </div>

      </div>

    </section>

  );

}