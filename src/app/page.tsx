import Image from "next/image";
import NavBar from "@/components/navBar";
import Wave from "@/components/wave";
import Explore from "@/components/explore";

export default function Home() {
  return (
    <main className="relative container mx-auto bg-[var(--oceanColour)] mt-4 rounded-3xl border-4 border-[var(--cream)] overflow-hidden flex flex-col justify-center">
      <NavBar />
      <div className=" bathboy lg:h-[700px] md:h-[450px] w-full bg-[url('https://raw.githubusercontent.com/reannab16/miss-soapy-suds-website/main/public/bathmantext.png')] bg-contain bg-no-repeat bg-top flex flex-col items-center justify-end">
        <Wave />
      </div>
      <Explore />
    </main>
  );
}
