import { Metadata } from "next";
import Image from "next/image";

import Banner from "@/components/banner";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

import contactEmailIcon from "../../../public/images/icons/contact_email.svg";
import contactLocationIcon from "../../../public/images/icons/contact_location.svg";
import contactPhoneIcon from "../../../public/images/icons/contact_phone.svg";

export const metadata: Metadata = {
  title: "Contact Us - InterQ",
};

export default function Contact() {
  return (
    <>
      <Banner className="h-[65vh]">
        <Header />
        <Hero className="flex flex-col items-center justify-center py-20">
          <h2
            className={`m-4 mt-24 font-bold text-3xl text-center text-main-black lg:text-5xl`}
          >
            Contact Us
          </h2>
          <p className="text-gray-100 text-sm text-center lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </Hero>
      </Banner>
      <main>
        <Consultation className="mx-6 my-16" />

        <section className="my-20 mx-6 flex flex-col justify-center items-center gap-8 lg:flex-row lg:mx-20">
          <iframe
            className="flex-1 h-full lg:min-h-[50vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2534630433543!2d-95.40922982452042!3d29.77031167506265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0b2dbc150fb%3A0x8d7660bc65ed9511!2s4517%20Washington%20Ave%2C%20Manchester%2C%20Kentucky%2039495%2C%20USA!5e0!3m2!1sen!2sbd!4v1692077529230!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <ul className="flex-1 h-full flex flex-col justify-center gap-8 font-bold text-xl text-center">
            <li className="flex flex-col items-center gap-8">
              <Image alt="Contact Email Icon" src={contactEmailIcon} />
              <p>your.email.inbox@here.com</p>
            </li>
            <li className="flex flex-col items-center gap-8">
              <Image alt="Contact Location Icon" src={contactLocationIcon} />
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </li>
            <li className="flex flex-col items-center gap-8">
              <Image alt="Contact Phone Icon" src={contactPhoneIcon} />
              <p>+62 424 954 824</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
