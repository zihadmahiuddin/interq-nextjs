import { Metadata } from "next";
import Image from "next/image";

import About from "@/components/about";
import Banner from "@/components/banner";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

import recentProject2 from "../../../public/images/recent-projects/2.jpeg";
import featureCheckIcon from "../../../public/images/icons/feature_check.svg";
import teamMember1 from "../../../public/images/team/1.png";
import teamMember2 from "../../../public/images/team/2.png";
import teamMember3 from "../../../public/images/team/3.png";
import teamMember4 from "../../../public/images/team/4.png";
import teamMember5 from "../../../public/images/team/5.png";
import teamMember6 from "../../../public/images/team/6.png";

export const metadata: Metadata = {
  title: "About Us - InterQ",
};

const TEAM = [
  {
    name: "David Babarna",
    role: "Interior Designer",
    avatar: teamMember1,
  },
  {
    name: "David Babarna",
    role: "Interior Designer",
    avatar: teamMember2,
  },
  {
    name: "David Babarna",
    role: "Interior Designer",
    avatar: teamMember3,
  },
  {
    name: "David Babarna",
    role: "Interior Designer",
    avatar: teamMember4,
  },
  {
    name: "David Babarna",
    role: "Interior Designer",
    avatar: teamMember5,
  },
  {
    name: "David Babarna",
    role: "Interior Designer",
    avatar: teamMember6,
  },
];

export default function AboutUs() {
  return (
    <>
      <Banner className="h-[65vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-20">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            About Us
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        <About className="mx-8 my-12 lg:mx-20"></About>

        {/*  Why Choose InterQ */}
        <section className="flex flex-col justify-center items-center mx-8 my-12 gap-8 lg:mx-20 lg:flex-row-reverse lg:gap-16">
          <Image
            className="flex-1 rounded-[2rem]"
            src={recentProject2}
            alt="About Page Recent Project Image"
            width={544}
            height={384}
          />
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-4xl font-bold mt-6 mb-4 lg:text-5xl">
              Why Choose InterQ
            </h2>
            <p className="leading-8 text-sm text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam.
            </p>
            <ul className="flex flex-col gap-4">
              {Array(3)
                .fill(0)
                .map((_, index) => {
                  return (
                    <li key={index} className="flex gap-4">
                      <Image src={featureCheckIcon} alt={"Why Choose Icon"} />
                      <p className="text-gray-100 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        {/* Meet Our Best Team */}
        <section className="flex flex-col justify-center items-center mx-8 my-12 gap-8 lg:mx-20 lg:gap-16">
          <h2 className="text-center text-4xl font-bold mt-6 mb-4 lg:text-5xl">
            Meet Our Best Team
          </h2>
          <ul className="flex flex-col gap-8 flex-wrap justify-center items-center lg:flex-row lg:mx-32">
            {TEAM.map((member) => {
              return (
                <li
                  key={member.name}
                  className="flex justify-center items-center flex-[1] flex-grow-0 basis-1/4"
                >
                  <Image
                    src={member.avatar}
                    alt={`Team Member ${member.name}`}
                    className="object-cover h-[400px] w-[320px] rounded-3xl"
                  />
                </li>
              );
            })}
          </ul>
        </section>

        <Consultation className="mx-6 my-8" />
      </main>
      <Footer />
    </>
  );
}
