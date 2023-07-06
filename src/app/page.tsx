import Image from 'next/image'
import NavBar from '@/components/navBar'
import Wave from '@/components/wave'

export default function Home() {
  return (
    <main className="container mx-auto bg-[var(--oceanColour)] mt-4 rounded-3xl border-4 border-[var(--cream)] overflow-hidden">
      <NavBar/>
      <div className=" h-[700px] w-full bathboy bg-[url('https://raw.githubusercontent.com/reannab16/miss-soapy-suds-website/main/public/bathmantangl.png')] bg-contain bg-no-repeat bg-top flex flex-col items-center justify-end">
        <Wave/>
      </div>
      
    </main>
  )
}
