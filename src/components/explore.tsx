import React from "react";
import { Song_Myung } from "next/font/google";

const songMyung = Song_Myung({
    weight: '400',
    subsets: ['latin'],
  })

export default function Explore() {
    return(
        <div className=" w-full bg-[var(--cream)] py-20">
            <div className={`flex flex-row items-center justify-center w-full lg:text-5xl text-3xl text-[var(--oceanColour)] text-center ${songMyung.className}`}>Explore Our Collection</div>
            

        </div>
    )
}