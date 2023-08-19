import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import Nav from "./nav";
import Link from "next/link";

export type HeaderProps = HTMLAttributes<HTMLElement>;

const Header: React.FC<HeaderProps> = ({ className, ...rest }) => {
  return (
    <header
      className={cn("flex justify-between p-4 lg:px-16", className)}
      {...rest}
    >
      <Logo dark />
      <Nav />
      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="border-black rounded-md border text-sm justify-center items-center px-4 py-3 hidden lg:flex"
      >
        Contact Us
      </Link>
    </header>
  );
};

export default Header;
