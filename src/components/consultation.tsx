import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type ConsultationProps = HTMLAttributes<HTMLElement>;

const Consultation: React.FC<ConsultationProps> = ({ className, ...rest }) => {
  return (
    <section className={cn("flex flex-col", className)} {...rest}>
      <h2 className="w-full text-center text-2xl font-bold px-8 lg:text-5xl">
        Need a consultation for your home?
      </h2>
      <form className="flex flex-col my-8 gap-4 lg:mx-32 lg:gap-12">
        <div className="lg:flex">
          <div className="flex flex-col lg:w-1/2">
            <label className="font-semibold text-xl">Your Name</label>
            <input
              className="px-5 py-3 placeholder:text-sm"
              type="text"
              placeholder="Your Full Name"
            />
          </div>
          <div className="flex flex-col lg:w-1/2">
            <label className="font-semibold text-xl">Your Email</label>
            <input
              className="px-5 py-3 placeholder:text-sm"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-xl">Your Message</label>
          <textarea
            className="px-5 py-3 placeholder:text-sm"
            placeholder="Write Here"
          />
        </div>
        <button className="bg-main-secondary text-white text-sm rounded mx-auto px-14 py-4 my-4 lg:px-10 lg:py-3">
          Send
        </button>
      </form>
    </section>
  );
};

export default Consultation;
