import Link from "next/link";

type Props = {

  title: string;

  description: string;

  slug: string;

};

export default function BlogCard({
  title,
  description,
  slug,
}: Props) {

  return (

    <Link
      href={`/blog/${slug}`}
      className="
block
rounded-2xl
border
border-[var(--border)]
bg-[var(--card)]
p-6
"
    >

      <h3 className="
      text-2xl
      font-semibold
      ">

        {title}

      </h3>


      <p className="
      mt-4
      opacity-70
      ">

        {description}

      </p>

    </Link>

  );

}