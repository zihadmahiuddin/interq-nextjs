import { ClassValue } from "clsx";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import type { UrlObject } from "url";

import { cn } from "@/lib/utils";

export type BlogCardProps = HTMLAttributes<HTMLDivElement> & {
  image: string | StaticImageData;
  imageAlt: string;
  imageClassName?: ClassValue;
  date: string;
  dateClassName?: ClassValue;
  title: string;
  titleClassName?: ClassValue;
  description: string;
  descriptionClassName?: ClassValue;
  readMoreLink: string | UrlObject;
  readMoreLinkText?: string;
  readMoreClassName?: ClassValue;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  imageAlt,
  imageClassName,
  date,
  dateClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  readMoreLink,
  readMoreLinkText,
  readMoreClassName,
  ...rest
}) => {
  return (
    <div {...rest}>
      <Image
        src={image}
        alt={imageAlt}
        className={cn("rounded-2xl my-8", imageClassName)}
      />
      <p className={cn("text-main-secondary text-xs", dateClassName)}>{date}</p>
      <h4 className={cn("font-bold text-xl my-4", titleClassName)}>{title}</h4>
      <p
        className={cn(
          "text-sm leading-7 text-gray-100 my-4",
          descriptionClassName
        )}
      >
        {description}
      </p>
      <Link
        href={readMoreLink}
        className={cn(
          "text-main-secondary text-sm border border-main-secondary border-solid rounded px-6 py-2",
          readMoreClassName
        )}
      >
        {readMoreLinkText ?? "Read More"}
      </Link>
    </div>
  );
};

export default BlogCard;
