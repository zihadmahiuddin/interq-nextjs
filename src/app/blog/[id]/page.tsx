import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shuffle from "lodash.shuffle";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Banner from "@/components/banner";
import BlogCard from "@/components/blog-card";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import NotFound from "@/app/not-found";

import BLOGS from "@/data/blogs";

type BlogPageParams = {
  id: string;
};

type BlogPageProps = {
  params: BlogPageParams;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = BLOGS.find((x) => x.id.toString() === params.id);
  if (!blog) {
    return {
      title: "Blog Not Found - InterQ",
    };
  }
  return {
    title: `${blog.title} - InterQ`,
  };
}

export default function Blog({ params }: BlogPageProps) {
  const blog = BLOGS.find((x) => x.id.toString() === params.id);
  if (!blog) {
    return <NotFound />;
  }

  return (
    <>
      <Banner className="h-[55vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-10">
          <h2
            className={`m-4 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            {blog.title}
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        <section className="relative -top-48 flex flex-col justify-center items-center mx-8 mt-8 -mb-44 lg:mx-24">
          <Image src={blog.image} alt={blog.title} className="rounded-2xl" />
        </section>

        <section className="m-6 lg:mx-20">
          <p className="text-gray-100 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum,
            mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu,
            ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu
            pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in
            odio lacus praesent mauris. At massa lobortis mi id molestie nibh
            sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor
            sit tellus sed nunc cursus nibh tempus. Ac sit nunc eleifend
            condimentum rutrum ultrices a. Faucibus suscipit dictumst tristique
            lectus pharetra mus quam ut. Tortor a, dolor ullamcorper volutpat
            vestibulum elit sit. Nisl rutrum tortor aliquet cursus blandit massa
            est nunc. Turpis nec habitant pharetra, gravida risus. Sem id nulla
            eleifend sed eu a cras tristique sit. Aliquam hac commodo, commodo
            vitae, massa nullam. Interdum scelerisque curabitur dictum morbi
            neque, proin vitae est. Quam ac nunc elementum nunc, eu, amet. Nisl
            libero turpis nec sem orci facilisi. Duis viverra consequat, est
            commodo, neque, in orci. Tortor tincidunt morbi proin et etiam
            fermentum porta. In aliquet sit pharetra scelerisque aliquet nisi
            cras sed placerat. Sit imperdiet vitae tincidunt aliquet cras a arcu
            dolor commodo. Arcu dui tincidunt sagittis cursus et, amet quis
            purus et. Sapien etiam orci, pellentesque suspendisse aenean aliquet
            arcu facilisi molestie. Magna velit, malesuada ullamcorper amet,
            curabitur ultrices tempus tincidunt quam. Sit vestibulum,
            scelerisque urna, vel.
          </p>
        </section>

        <section className="m-6 flex flex-col gap-8 lg:mx-20 lg:flex-row">
          <div className="flex flex-col gap-6 items-center justify-center lg:flex-1">
            <Image src={blog.image} alt={blog.title} className="rounded-2xl" />
            <Image src={blog.image} alt={blog.title} className="rounded-2xl" />
          </div>

          <div className="flex flex-col gap-4 lg:flex-1">
            <p className="text-gray-100 leading-8 lg:flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl
              elementum, mattis amet, elementum, cras elementum morbi. Aliquet
              ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum
              volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis
              vitae porttitor in odio lacus praesent mauris. At massa lobortis
              mi id molestie nibh sociis. Sem quis sed quisque fames urna elit
              molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus. Ac
              sit nunc eleifend condimentum rutrum ultrices a. Faucibus suscipit
              dictumst tristique lectus pharetra mus quam ut. Tortor a, dolor
              ullamcorper volutpat vestibulum elit sit. Nisl rutrum tortor
              aliquet cursus blandit massa est nunc. Turpis nec habitant
              pharetra, gravida risus. Sem id nulla eleifend sed eu a cras
              tristique sit. Aliquam hac commodo, commodo vitae, massa nullam.
              Interdum scelerisque curabitur dictum morbi neque, proin vitae
              est.
            </p>
            <p className="text-gray-100 leading-8 lg:flex-1">
              Quam ac nunc elementum nunc, eu, amet. Nisl libero turpis nec sem
              orci facilisi. Duis viverra consequat, est commodo, neque, in
              orci. Tortor tincidunt morbi proin et etiam fermentum porta. In
              aliquet sit pharetra scelerisque aliquet nisi cras sed placerat.
              Sit imperdiet vitae tincidunt aliquet cras a arcu dolor commodo.
              Arcu dui tincidunt sagittis cursus et, amet quis purus et. Sapien
              etiam orci, pellentesque suspendisse aenean aliquet arcu facilisi
              molestie. Magna velit, malesuada ullamcorper amet, curabitur
              ultrices tempus tincidunt quam. Sit vestibulum, scelerisque urna,
              vel. Ac sit nunc eleifend condimentum rutrum ultrices a. Faucibus
              suscipit dictumst tristique lectus pharetra mus quam ut. Tortor a,
              dolor ullamcorper volutpat vestibulum elit sit. Nisl rutrum tortor
              aliquet cursus blandit massa est nunc. Turpis nec habitant
              pharetra, gravida risus. Sem id nulla eleifend sed eu a cras
              tristique sit. Aliquam hac commodo, commodo vitae, massa nullam.
              Interdum scelerisque curabitur dictum morbi neque, proin vitae
              est.
            </p>
          </div>
        </section>

        <section className="m-6 lg:mx-20">
          <p className="text-gray-100 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum,
            mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu,
            ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu
            pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in
            odio lacus praesent mauris. At massa lobortis mi id molestie nibh
            sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor
            sit tellus sed nunc cursus nibh tempus. Ac sit nunc eleifend
            condimentum rutrum ultrices a. Faucibus suscipit dictumst tristique
            lectus pharetra mus quam ut. Tortor a, dolor ullamcorper volutpat
            vestibulum elit sit. Nisl rutrum tortor aliquet cursus blandit massa
            est nunc. Turpis nec habitant pharetra, gravida risus. Sem id nulla
            eleifend sed eu a cras tristique sit. Aliquam hac commodo, commodo
            vitae, massa nullam. Interdum scelerisque curabitur dictum morbi
            neque, proin vitae est. Quam ac nunc elementum nunc, eu, amet. Nisl
            libero turpis nec sem orci facilisi. Duis viverra consequat, est
            commodo, neque, in orci. Tortor tincidunt morbi proin et etiam
            fermentum porta. In aliquet sit pharetra scelerisque aliquet nisi
            cras sed placerat. Sit imperdiet vitae tincidunt aliquet cras a arcu
            dolor commodo. Arcu dui tincidunt sagittis cursus et, amet quis
            purus et. Sapien etiam orci, pellentesque suspendisse aenean aliquet
            arcu facilisi molestie. Magna velit, malesuada ullamcorper amet,
            curabitur ultrices tempus tincidunt quam. Sit vestibulum,
            scelerisque urna, vel.
          </p>
        </section>

        <section className="flex flex-col justify-center items-center">
          <h4 className="font-bold text-xl my-8">Share this blog</h4>

          <ul className="flex gap-8">
            <li className="bg-main-secondary text-white rounded-full px-3 py-2.5">
              <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
            </li>
            <li className="bg-main-secondary text-white rounded-full px-3 py-2.5">
              <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
            </li>
            <li className="bg-main-secondary text-white rounded-full px-3 py-2.5">
              <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
            </li>
          </ul>
        </section>

        <section className="flex flex-col justify-center items-center gap-2 mx-8 my-12 lg:mx-24 lg:gap-8">
          <h2 className="font-bold text-3xl lg:text-6xl">Recent Blog</h2>

          <ul className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-16">
            {shuffle(BLOGS)
              .slice(0, 3)
              .map((blog) => {
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
          <Link
            href="#"
            className="bg-main-secondary text-white text-sm  rounded px-6 py-2 my-10 lg:px-10 lg:py-3"
          >
            View All
          </Link>
        </section>

        <Consultation className="mx-6 my-16" />
      </main>
      <Footer />
    </>
  );
}
