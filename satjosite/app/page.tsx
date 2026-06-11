import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-dvh w-full bg-[url('/main-bg1.jpg')] bg-cover bg-center justify-center pl-20 pt-28">
      <div className="flex flex-col items-center self-start gap-12">
        <div className="text-center">
          <p className="text-4xl pb-2 text-[#fcfcfc]">PROJECT 52</p>
          <p className="text-[#8f8f8f]">Half-Life 2 modification</p>
          <p className="text-[#8f8f8f]">by tirmiks</p>
       </div>
        <Link href="" className="flex items-center gap-5 self-start rounded-md bg-[#2a2828] ml-2 px-17 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-103 hover:bg-[#3d3a3a] ">
       <span className="text-[#f0f0f0]">PLAY ON STEAM </span></Link>
      </div>
    </div>
    <div>                                                       {/* 2nd part of page (after scroll) */}

    </div>
  </>
  )
}
