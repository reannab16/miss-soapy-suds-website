import React from "react";
import Wave from "./wave";
import WaveFlip from "./waveFlip";

export default function Qualities() {
  return (
    <div className="w-full h-[35rem] flex-col flex items-center justify-between relative">
      <WaveFlip />
      <div className="w-full flex items-center justify-around px-20">
      
        {qualityList.map((item: qualityListType) => {
            return(
                <div className="flex flex-col items-center justify-center" key={item.name}>
                    <img src={item.href} alt="" className="h-28 w-28" />
                    <div className="text-[var(--cream)] text-base w-28 text-center">{item.descript}</div>
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
