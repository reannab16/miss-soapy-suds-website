import React from "react";
import { Montserrat } from "next/font/google";
import { About, BlobIcon } from "./icons";
import { SwirlyArrow } from "./icons";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--fontmontitalic",
});

export default function AboutHome() {
  return (
    <div className="w-full flex sm:flex-row flex-col items-center justify-between bg-[var(--cream)] pt-20 pb-24 md:px-20 sm:px-16">
      <div
        className={`${montserrat.className} relative sm:-order-1 order-2 sm:pt-0 pt-5 lg:text-lg text-base text-[var(--oceanColour)] md:w-[50%] flex md:flex-row flex-col items-center justify-center italic font-normal`}
      >
        <span className="italic md:pb-0 pb-2">Want to learn more</span>{" "}
        <a
          href=""
          className="cursor-pointer py-2 px-3 bg-[var(--oceanColour)] text-[var(--cream)] rounded-full ml-2 hover:bg-[var(--pink)] duration-300 hover:-translate-y-1 relative"
        >
          about us?
          <SwirlyArrow className=" absolute h-16 -top-14 -right-9 md:block hidden" />
        </a>
      </div>
      <div className="sm:w-[40%] w-[70%] flex items-center justify-center relative">
        <BlobIcon className=" w-[100%] h-auto absolute left-0 top-0" />
        <About className="w-[100%] h-auto z-10" />
      </div>
    </div>
  );
}
