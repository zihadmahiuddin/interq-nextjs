import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type HeroProps = HTMLAttributes<HTMLDivElement>;

const Hero: React.FC<HeroProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cn("p-6", className)} {...rest}>
      {children}
    </div>
  );
};

export default Hero;
