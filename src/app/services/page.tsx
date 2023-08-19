import { Metadata } from "next";
import Image from "next/image";

import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurServices from "@/components/our-services";

import howItWorks1 from "../../../public/images/services/how-it-works/0.png";
import howItWorks2 from "../../../public/images/services/how-it-works/1.png";
import howItWorks3 from "../../../public/images/services/how-it-works/2.png";
import howItWorks4 from "../../../public/images/services/how-it-works/3.png";
import howItWorks5 from "../../../public/images/services/how-it-works/4.png";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: 1,
    title: "Select one of our talented designers.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. ",
    image: howItWorks1,
  },
  {
    id: 2,
    title: "Tell us all about your dream home.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. ",
    image: howItWorks2,
  },
  {
    id: 3,
    title: "Your designer will blow your mind.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. ",
    image: howItWorks3,
  },
  {
    id: 4,
    title: "Tell us which design ideas you vibe.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. ",
    image: howItWorks4,
  },
  {
    id: 5,
    title: "Shop items from your design in one place.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam. ",
    image: howItWorks5,
  },
];

export const metadata: Metadata = {
  title: "Services - InterQ",
};

export default function Services() {
  return (
    <>
      <Banner className="h-[65vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-20">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            Services
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        <OurServices />

        <section className="flex flex-col justify-center items-center gap-8 mx-8 my-8">
          <h2 className="font-bold text-3xl lg:my-8 lg:text-4xl">
            How It Works
          </h2>
          <ul>
            {STEPS.map((step, index) => {
              return (
                <li
                  key={step.title}
                  className={cn(
                    "flex flex-col my-4 lg:items-center lg:justify-center lg:gap-48",
                    {
                      "lg:flex-row": index % 2 === 0,
                      "lg:flex-row-reverse": index % 2 !== 0,
                    }
                  )}
                >
                  <div className="flex lg:justify-center lg:items-center flex-1">
                    <Image
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="rounded-3xl h-80 w-80 object-cover"
                    />
                  </div>
                  <div className="flex justify-center items-start gap-2 my-3 flex-1 lg:items-center lg:mx-16">
                    <p className="font-bold text-white text-xl bg-main-secondary mt-4 py-3 px-5 rounded-full">
                      {index + 1}
                    </p>
                    <div className="flex flex-col">
                      <p className="text-gray-100 font-semibold">
                        STEP {index + 1}
                      </p>
                      <h4 className="font-bold text-2xl mb-4">{step.title}</h4>
                      <p className="text-gray-100">{step.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
