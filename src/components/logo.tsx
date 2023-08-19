import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type LogoProps = HTMLAttributes<HTMLDivElement> & {
  dark?: boolean;
};

const Logo: React.FC<LogoProps> = ({ dark, className, ...rest }) => {
  return (
    <div className={cn("font-bold text-2xl", className)} {...rest}>
      <span className={cn(dark ? "text-main-black" : "text-white")}>Inter</span>
      <span className="text-main-secondary">Q</span>
    </div>
  );
};

export default Logo;
