import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { HTMLAttributes } from "react";

import Logo from "./logo";

import downloadOnAppStore from "../../public/images/icons/download_on_app_store.svg";
import getOnGooglePlay from "../../public/images/icons/get_on_google_play.svg";
import Link from "next/link";

export type FooterProps = HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer {...props}>
      <div className="bg-main-black p-6 flex flex-col lg:flex-row lg:gap-4">
        <div className="pt-6 pb-8 lg:flex-[1] lg:mx-12">
          <Logo className="mb-6" />
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </div>
        <div className="flex gap-12 items-center justify-start text-sm mb-4 lg:flex-[1]">
          <div className="flex flex-col gap-2">
            <p className="text-white">Quicklink 1</p>
            <Link href="/" className="text-gray-50">
              Home
            </Link>
            <Link href="/about" className="text-gray-50">
              About Us
            </Link>
            <Link href="/portfolio" className="text-gray-50">
              Portfolio
            </Link>
            <Link href="/services" className="text-gray-50">
              Services
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white">Quicklink 2</p>
            <Link href="/pricing" className="text-gray-50">
              Pricing
            </Link>
            <Link href="/blogs" className="text-gray-50">
              Blog
            </Link>
            <Link href="blogs/1" className="text-gray-50">
              Single Blog
            </Link>
            <Link href="/404" className="text-gray-50">
              404 Error
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-[1]">
          <div className="my-6 text-white text-sm">
            <p className="my-4">Join Our Newsletter</p>
            <div className="flex justify-between gap-2">
              <input
                className="flex-1 placeholder:px-3 bg-input-background"
                type="email"
                placeholder="Your Email Address"
              />
              <button className="bg-main-secondary px-6 py-2 rounded-md">
                Send
              </button>
            </div>
          </div>
          <div className="text-white flex flex-col gap-4 my-8">
            <p>Follow Us</p>
            <div className="flex gap-12">
              <FontAwesomeIcon className="h-7" icon={faFacebookF} />
              <FontAwesomeIcon className="h-7" icon={faInstagram} />
              <FontAwesomeIcon className="h-7" icon={faWhatsapp} />
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-4 my-8 flex-[1]">
          <p>Download Our App</p>
          <div className="flex flex-col gap-4">
            <Image
              alt="Download on the App Store Logo"
              src={downloadOnAppStore}
              width={128}
              height={32}
            />
            <Image
              alt="Get it on Google Play Logo"
              src={getOnGooglePlay}
              width={128}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="bg-footer-copyright-background">
        <p className="text-gray-50 p-6 text-center">
          Copyright InterQ. 2023 All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
