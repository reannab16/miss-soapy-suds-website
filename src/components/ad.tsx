import React from "react";
import { Montserrat } from "next/font/google";
import { Bathman, BlobIcon } from "./icons";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--fontmontitalic'
});

export default function Advert() {
    return (
      <div className="w-full flex sm:flex-row flex-col items-center justify-between bg-[var(--cream)] py-20 md:px-20 sm:px-16">
        <div
          className={`${montserrat.className} relative lg:text-lg text-base text-[var(--oceanColour)] md:w-[50%] sm:pt-0 pt-5 sm:-order-1 order-2 flex items-center justify-center italic font-normal`}
        >
          <span className="italic md:w-[70%] text-center max-w-[75%] sm:max-w-full">Allow our suds to uplift your senses, invigorate your body and immerse you in a world of rejuvenating self-care.</span>
        </div>
        <div className="sm:w-[40%] w-[70%] flex items-center justify-center relative">
          <BlobIcon className=" w-[100%] h-auto absolute left-0 top-0" />
          <Bathman className="w-[100%] h-auto z-10" />
        </div>
      </div>
    );
  }
  