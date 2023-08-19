import Hero from "@/components/hero";
import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <Banner>
        <Header />
        <Hero className="flex flex-col items-center justify-center">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            404
            <br />
            Page Not Found
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
              Back to Homepage
            </Link>
          </div>
        </Hero>
      </Banner>
      <Footer />
    </>
  );
}
