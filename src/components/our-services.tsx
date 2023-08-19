import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import homeDesignIcon from "../../public/images/icons/home_design.svg";
import interiorDesignIcon from "../../public/images/icons/interior_design.svg";
import officeDesignIcon from "../../public/images/icons/office_design.svg";

export type OurServicesProps = HTMLAttributes<HTMLElement>;

const OurServices: React.FC<OurServicesProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center mx-8 my-4 lg:mx-20",
        className
      )}
      {...rest}
    >
      <h2 className="font-bold text-2xl mb-10">Our Services</h2>
      <div className="flex flex-col gap-12 justify-center items-center lg:flex-row">
        <div className="flex flex-col justify-center items-center">
          <Image alt="Interior Design Icon" src={interiorDesignIcon} />
          <h5 className="font-bold text-xl my-4">Interior Design</h5>
          <p className="text-gray-100 text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image alt="Home Design Icon" src={homeDesignIcon} />
          <h5 className="font-bold text-xl my-4">Home Design</h5>
          <p className="text-gray-100 text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image alt="Office Design Icon" src={officeDesignIcon} />
          <h5 className="font-bold text-xl my-4">Office Design</h5>
          <p className="text-gray-100 text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
