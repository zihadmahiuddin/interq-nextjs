import Image from "next/image";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import recentProject1 from "../../public/images/recent-projects/1.jpeg";
import recentProject2 from "../../public/images/recent-projects/2.jpeg";
import recentProject3 from "../../public/images/recent-projects/3.jpeg";
import recentProject4 from "../../public/images/recent-projects/4.jpeg";
import recentProject5 from "../../public/images/recent-projects/5.jpeg";

export type RecentProjectsProps = HTMLAttributes<HTMLElement>;

const RecentProjects: React.FC<RecentProjectsProps> = ({
  className,
  ...rest
}) => {
  return (
    <section className={cn("flex flex-col items-center", className)} {...rest}>
      <h2 className="font-bold text-3xl m-6">Recent Projects</h2>
      <p className="text-gray-100 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae
        vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit
        vitae nisi, etiam.
      </p>
      <ul className="my-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          recentProject1,
          recentProject2,
          recentProject3,
          recentProject4,
          recentProject5,
        ].map((recentProject, index) => {
          return (
            <li key={index}>
              <Image
                src={recentProject}
                alt="Recent Project Image"
                className="rounded-3xl object-cover h-60 w-96"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentProjects;
