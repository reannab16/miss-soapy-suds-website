import Image from 'next/image'
import NavBar from '@/components/navBar'

export default function Home() {
  return (
    <main className="container mx-auto bg-[var(--oceanColour)] mt-4 rounded-3xl border-4 border-[var(--cream)] overflow-hidden">
      <NavBar/>
      <div className=" h-screen w-screen bathboy bg-[url('https://raw.githubusercontent.com/reannab16/miss-soapy-suds-website/main/public/bathman.png')]"></div>
      
    </main>
  )
}
