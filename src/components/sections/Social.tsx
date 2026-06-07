import {
siteConfig
}
from "@/config/site";

export default function Social() {

  return (

    <section
      id="social"
      className="py-24"
    >

      <h2 className="
      text-4xl
      font-bold
      ">

        SOCIALS

      </h2>


      <div className="
      mt-12
      flex
      flex-wrap
      gap-4
      ">

        <a
          href={siteConfig.socials.github}
          className="
          rounded-lg
          border
          px-6
          py-4
          "
        >

          GitHub

        </a>


        <a
          href={siteConfig.socials.linkedin}
          className="
          rounded-lg
          border
          px-6
          py-4
          "
        >

          LinkedIn

        </a>

      </div>

    </section>

  );

}