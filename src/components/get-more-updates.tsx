import { HTMLAttributes } from "react";

import BlogCard from "./blog-card";
import { cn } from "@/lib/utils";

import BLOGS from "@/data/blogs";

export type GetMoreUpdatesProps = HTMLAttributes<HTMLElement>;

const GetMoreUpdates: React.FC<GetMoreUpdatesProps> = ({
  className,
  ...rest
}) => {
  return (
    <section className={cn("flex flex-col items-center", className)} {...rest}>
      <h2 className="font-bold text-3xl my-8">Get More Updates</h2>
      <p className="text-gray-100 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae
        vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit
        vitae nisi, etiam.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOGS.slice(0, 3).map((blog) => {
          return (
            <li
              key={blog.id}
              className="flex flex-col justify-center items-center"
            >
              <BlogCard
                key={blog.id}
                image={blog.image}
                imageAlt="Get More Updates Item Card"
                imageClassName="object-cover max-h-48 min-h-48 lg:max-h-60 lg:min-h-60"
                title={blog.title}
                description={blog.description}
                date={blog.date}
                readMoreLink={`/blog/${blog.id}`}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GetMoreUpdates;
