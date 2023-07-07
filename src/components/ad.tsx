import React from "react";
import { Montserrat } from "next/font/google";
import { Bathman, BlobIcon } from "./icons";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--fontmontitalic'
});

export default function Advert() {
    return (
      <div className="w-full flex items-center justify-between bg-[var(--cream)] py-20 px-20">
        <div
          className={`${montserrat.className} relative text-lg text-[var(--oceanColour)] w-[50%] flex items-center justify-center italic font-normal`}
        >
          <span className="italic w-[70%] text-center">Allow our suds to uplift your senses, invigorate your body and immerse you in a world of rejuvenating self-care.</span>
        </div>
        <div className="w-[40%] flex items-center justify-center relative">
          <BlobIcon className=" w-[100%] h-auto absolute left-0 top-0" />
          <Bathman className="w-[100%] h-auto z-10" />
        </div>
      </div>
    );
  }
  