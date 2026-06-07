import BlogCard from "../BlogCard";

import {
  getAllPosts,
} from "@/lib/blog";

export default function Blog() {

  const posts =
    getAllPosts()
    .slice(0,3);

  return (

    <section
      id="blog"
      className="py-24"
    >

      <h2 className="
      text-4xl
      font-bold
      ">

        BLOG

      </h2>


      <div className="
      mt-12
      grid
      gap-6
      ">

        {posts.map(
          (post) => (

            <BlogCard

              key={post.slug}

              title={
                post.title
              }

              description={
                post.description
              }

              slug={
                post.slug
              }

            />

          )
        )}

      </div>

    </section>

  );

}