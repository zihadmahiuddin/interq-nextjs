import { Metadata } from "next";
import chunk from "lodash.chunk";

import Banner from "@/components/banner";
import BlogCard from "@/components/blog-card";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

import BLOGS from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs - InterQ",
};

export default function Blogs() {
  return (
    <>
      <Banner className="h-[65vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-20">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            Blog
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        <section className="flex flex-col justify-center items-center gap-8 mx-8 my-12 lg:mx-24 lg:gap-16">
          {chunk(BLOGS, 3).map((blogChunk) => {
            return (
              <ul className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-16">
                {blogChunk.map((blog) => {
                  return (
                    <BlogCard
                      key={blog.id}
                      image={blog.image}
                      imageAlt="Blog List Item Card"
                      imageClassName="object-cover max-h-48 min-h-48 lg:max-h-60 lg:min-h-60"
                      title={blog.title}
                      description={blog.description}
                      date={blog.date}
                      readMoreLink={`/blog/${blog.id}`}
                    />
                  );
                })}
              </ul>
            );
          })}
        </section>

        <Consultation className="mx-6 my-16" />
      </main>
      <Footer />
    </>
  );
}
