import { Metadata } from "next";
import Image from "next/image";

import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

import homeLiving1 from "../../../public/images/portfolio/home-living/0.png";
import homeLiving2 from "../../../public/images/portfolio/home-living/1.png";
import homeLiving3 from "../../../public/images/portfolio/home-living/2.png";
import homeLiving4 from "../../../public/images/portfolio/home-living/3.png";
import homeLiving5 from "../../../public/images/portfolio/home-living/4.png";

import furniture1 from "../../../public/images/portfolio/furniture/0.png";
import furniture2 from "../../../public/images/portfolio/furniture/1.png";
import furniture3 from "../../../public/images/portfolio/furniture/2.png";
import furniture4 from "../../../public/images/portfolio/furniture/3.png";
import furniture5 from "../../../public/images/portfolio/furniture/4.png";
import furniture6 from "../../../public/images/portfolio/furniture/5.png";
import furniture7 from "../../../public/images/portfolio/furniture/6.png";

export const metadata: Metadata = {
  title: "Portfolio - InterQ",
};

export default function Portfolio() {
  return (
    <>
      <Banner className="h-[65vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-20">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            Portfolio
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        <section className="my-20 mx-6 flex flex-col justify-center items-center gap-8 lg:mx-20">
          <h2 className="font-bold text-3xl">Home Living</h2>
          <p className="text-center text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
          <div className="grid grid-cols-1 grid-rows-none lg:grid-cols-3">
            {[
              homeLiving1,
              homeLiving2,
              homeLiving3,
              homeLiving4,
              homeLiving5,
            ].map((item) => {
              return (
                <Image
                  src={item}
                  alt="Image"
                  className="my-4 w-96 h-72 rounded-2xl object-cover lg:mx-4"
                />
              );
            })}
          </div>
        </section>

        <section className="my-20 mx-6 flex flex-col justify-center items-center gap-8 lg:mx-20">
          <h2 className="font-bold text-3xl">Furniture</h2>
          <p className="text-center text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
          <div className="grid grid-cols-1 grid-rows-none lg:grid-cols-3">
            {[
              furniture1,
              furniture2,
              furniture3,
              furniture4,
              furniture5,
              furniture6,
              furniture7,
            ].map((item) => {
              return (
                <Image
                  src={item}
                  alt="Image"
                  className="my-4 w-96 h-72 rounded-2xl object-cover lg:mx-4"
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
