import Link from "next/link";

type Props = {

  title: string;

  category: string;

  description: string;

  slug: string;

};

export default function ProjectCard({
  title,
  category,
  description,
  slug,
}: Props) {

  return (

    <Link
href={`/projects/${slug}`}
className="
block
rounded-2xl
border
border-[var(--border)]
bg-[var(--card)]
p-6
"
>

      <div className="
      mb-3
      text-sm
      opacity-70
      ">

        {category}

      </div>


      <h3 className="
      text-2xl
      font-semibold
      ">

        {title}

      </h3>


      <p className="
      mt-4
      opacity-80
      ">

        {description}

      </p>

    </Link>

  );

}