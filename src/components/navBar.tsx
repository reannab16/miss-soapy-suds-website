import React from "react";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
  })


export default function NavBar() {
    return(
        <div className={`w-full h-15 flex items-center justify-start border-b-[var(--cream)] border-b-4 gap-y-0 py-0 text-[var(--cream)] text-base font-light ${montserrat.className}`}>
            
                <div className="py-4 px-5 hover:text-[var(--oceanColour)] hover:bg-[var(--cream)] duration-300">home</div>
                <div className="py-4 px-5 hover:text-[var(--oceanColour)] hover:bg-[var(--cream)] duration-300">shop</div>
                <div className="py-4 px-5 hover:text-[var(--oceanColour)] hover:bg-[var(--cream)] duration-300 justify-self-auto">about</div>
                <div className="py-4 px-5 hover:text-[var(--oceanColour)] hover:bg-[var(--cream)] duration-300 ml-auto">cart</div>
            
        </div>
    )
}