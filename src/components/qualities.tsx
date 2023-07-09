import React from "react";
import Wave from "./wave";
import WaveFlip from "./waveFlip";

export default function Qualities() {
  return (
    <div className="w-full md:h-[35rem] h-[30rem] flex-col flex items-center justify-between relative">
      <WaveFlip />
      <div className="w-full flex items-center justify-around md:px-20 px-10">
      
        {qualityList.map((item: qualityListType) => {
            return(
                <div className="flex flex-col items-center justify-center" key={item.name}>
                    <img src={item.href} alt="" className="md:h-28 md:w-28 h-20 w-20" />
                    <div className="text-[var(--cream)] md:text-base text-sm w-28 text-center">{item.descript}</div>
                </div>
            )

        })}
      </div>
      <Wave speedy="23s"/>
    </div>
  );
}

type qualityListType = {
    name: string,
    href: string,
    descript: string,
}

const qualityList: qualityListType[] = [
    {
        name: "natural",
        href: "1.svg",
        descript: "natural, organic ingredients"
    },
    {
        name: "entrepreneur",
        href: "2.svg",
        descript: "about encouraging kids to explore business",
    },
    {
        name: "gift",
        href: "3.svg",
        descript: "fun, vibrant soaps perfect for gifting",
    },
    {
        name: "nourish",
        href: "4.svg",
        descript: "nourishing and rejuvenating",
    },

]
