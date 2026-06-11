'use client'
import Link from "next/link"
import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import GallerySection from "@/ui/main/Galery";
import Video from "@/ui/main/Video";
import ScrollAnim from "./ScrollAnim";

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
    {/* 2nd part of page (after scroll) */}
    <div className="bg-[#1a1a1a] min-h-screen p-10 relative overflow-hidden">

      <div className="flex flex-col items-center justify-center text-[#f0f0f0] pb-28">
        <div className="px-10 py-10">
          <ScrollAnim>
        <Video />
          </ScrollAnim>
        </div>
        <div className="text-sm text-center max-w-md">
          <div className="text-justify [text-align-last:center] ">
            <ScrollAnim>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
          </ScrollAnim>
          </div>
        </div>
          <ScrollAnim>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <GallerySection />  
        </div>
          </ScrollAnim>

        <div className="absolute bottom-6 right-6 text-sm max-w-xs text-[#8f8f8f]">
          <ScrollAnim>

          Valve, the Valve logo, Steam, and the Steam logo are trademarks and/or registered trademarks of Valve Corporation. Open Fortness is a fan creation and is not affiliated with Valve Corporation.
          </ScrollAnim>
        </div>
      </div>

    </div>
  </>
  )
}
