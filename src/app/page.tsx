import Link from "next/link";

import About from "@/components/about";
import Banner from "@/components/banner";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import GetMoreUpdates from "@/components/get-more-updates";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurCustomerReviews from "@/components/our-customer-reviews";
import OurServices from "@/components/our-services";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <>
      <Banner>
        <Header />
        <Hero className="flex flex-col items-center justify-center h-[60vh]">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            Make room for better living
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
          <div className="flex justify-center pt-12 pb-24">
            <Link
              href="/"
              className="bg-main-secondary text-white px-6 py-4 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </Hero>
      </Banner>
      <main className="m-8 mt-20">
        <About className="mx-2 my-12 lg:mx-20 lg:my-20" />
        <OurServices />
        <RecentProjects />
        <GetMoreUpdates className="mx-4 my-8 md:mx-20" />
        <OurCustomerReviews />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
