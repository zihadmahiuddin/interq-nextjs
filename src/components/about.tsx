import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import aboutInterQ from "../../public/images/about_interq.png";

export type AboutProps = HTMLAttributes<HTMLElement>;

const About: React.FC<AboutProps> = ({ className, ...rest }) => {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center lg:flex-row lg:gap-16",
        className
      )}
      {...rest}
    >
      <Image
        className="flex-1"
        src={aboutInterQ}
        alt="About InterQ Image"
        width={544}
        height={384}
      />
      <div className="flex-1">
        <h2 className="text-4xl font-bold mt-12 mb-4 lg:text-5xl">About InterQ</h2>
        <p className="leading-8 text-sm text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae
          vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus
          sit vitae nisi, etiam. Fermentum, fringilla nisl elementum, mattis
          amet, elementum, cras elementum morbi. Aliquet ut mus arcu, ornare
          nunc nisi, dignissim in. Diam mus fermentum volutpat arcu pulvinar
          scelerisque auctor sed. Feugiat turpis vitae porttitor in odio lacus
          praesent mauris. At massa lobortis mi id molestie nibh sociis. Sem
          quis sed quisque fames urna elit molestie nisl. Auctor sit tellus sed
          nunc cursus nibh tempus.
        </p>
      </div>
    </section>
  );
};

export default About;
