import { Metadata } from "next";
import Image from "next/image";

import Banner from "@/components/banner";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

import featureCheckIcon from "../../../public/images/icons/feature_check.svg";

export const metadata: Metadata = {
  title: "Pricing Plan - InterQ",
};

const PRICING_PLANS = [
  {
    name: "Basic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. ",
    price: 32,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. ",
    price: 60,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "Premium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. ",
    price: 100,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <Banner className="h-[65vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-20">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            Pricing Plan
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        {/* Pricing Plans */}
        <section className="flex flex-col justify-center items-center mx-20 my-12 gap-8 lg:mx-48 lg:flex-row lg:gap-16">
          {PRICING_PLANS.map((plan) => {
            return (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-center items-center">
                  <h5 className="text-2xl font-bold uppercase">{plan.name}</h5>
                  <h6 className="text-xl font-bold mb-4 text-main-secondary">
                    ${plan.price}
                  </h6>
                </div>
                <p className="leading-8 text-sm text-gray-100">
                  {plan.description}
                </p>
                <ul className="flex flex-col gap-4">
                  {plan.features.map((_, index) => {
                    return (
                      <li key={index} className="flex gap-4">
                        <Image src={featureCheckIcon} alt={"Why Choose Icon"} />
                        <p className="text-gray-100 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <button className="mx-12 py-3 rounded bg-white text-main-secondary hover:bg-main-secondary hover:text-white lg:mx-32">
                  Pick Package
                </button>
              </div>
            );
          })}
        </section>

        <Consultation className="mx-6 my-16" />
      </main>
      <Footer />
    </>
  );
}
