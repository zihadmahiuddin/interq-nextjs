import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import CUSTOMERS from "@/data/customers";

import recentProject1 from "../../public/images/recent-projects/1.jpeg";

export type OurCustomerReviewsProps = HTMLAttributes<HTMLElement>;

const OurCustomerReviews: React.FC<OurCustomerReviewsProps> = ({
  className,
  ...rest
}) => {
  return (
    <section className={cn("flex flex-col items-center", className)} {...rest}>
      <h2 className="font-bold text-3xl my-8">Our Customer Reviews</h2>
      <p className="text-gray-100 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae
        vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit
        vitae nisi, etiam.
      </p>
      <div className="flex flex-col my-8 md:flex-row">
        <ul className="flex-1 flex flex-col my-8 gap-8 self-start mx-4 md:mx-12">
          {CUSTOMERS.map((customer) => {
            return (
              <li key={customer.id} className="flex gap-4">
                <Image
                  src={customer.avatar}
                  alt="Customer Avatar"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-lg">{customer.name}</p>
                  <p className="font-light">{customer.profession}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex-1 flex flex-col self-start gap-2 my-8">
          <h4 className="font-bold text-xl">It was a Great Experience!</h4>
          <div className="flex gap-1 text-yellow-400">
            {new Array(5).fill(1).map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
            vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc,
            purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum,
            mattis amet, elementum, cras elementum morbi. Aliquet ut mus arcu,
            ornare nunc nisi, dignissim in. Diam mus fermentum volutpat arcu
            pulvinar scelerisque auctor sed. Feugiat turpis vitae porttitor in
            odio lacus praesent mauris. At massa lobortis mi id molestie nibh
            sociis. Sem quis sed quisque fames urna elit molestie nisl. Auctor
            sit tellus sed nunc cursus nibh tempus.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={recentProject1}
            alt="Recent Project Image"
            className=" h-72 object-cover rounded-2xl md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCustomerReviews;
