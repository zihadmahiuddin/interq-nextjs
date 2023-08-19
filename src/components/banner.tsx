import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type BannerProps = HTMLAttributes<HTMLElement>;

const Banner: React.FC<BannerProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={cn(
        "bg-cover bg-center bg-[url('/images/background.png')]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Banner;
