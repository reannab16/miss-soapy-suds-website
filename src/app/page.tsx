import Image from "next/image";
import NavBar from "@/components/navBar";
import Wave from "@/components/wave";
import Explore from "@/components/explore";
import AboutHome from "@/components/abouthome";
import Advert from "@/components/ad";
import Qualities from "@/components/qualities";

export default function Home() {
  return (
    <main className="relative container flex items-center justify-center mx-auto">
      <div className="bg-[var(--oceanColour)] mt-4 rounded-3xl border-4 border-[var(--cream)] overflow-hidden flex flex-col justify-center w-full">
        <NavBar />
        <div className=" bathboy h-auto w-full relative">
          <img src="https://raw.githubusercontent.com/reannab16/miss-soapy-suds-website/main/public/bathmantext.png" alt="" className="w-full" />
          <Wave speedy="20s" className={"absolute bottom-0"} />
        </div>
        <Explore />
        <Advert />
        <Qualities />
        <AboutHome />
      </div>
    </main>
  );
}
