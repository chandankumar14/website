"use client"
import Image from "next/image"
const BannerImage = require("../../../public/banner1.png")
export default function HomePageBanner() {
  return (
    <>


      <div className="font-sans bg-gray-500 px-6 py-12 overflow-hidden">
        <div className="max-w-7xl max-md:max-w-md mx-auto mt-4">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">We offer modern solutions for growing your business.</h2>
              <p className="text-white mt-6 text-base leading-relaxed">
                We are team  of talented developers making websites with different technologies.
              </p>
              <div className="mt-12">
                <button type='button'
                  className="bg-white hover:bg-gray-100 transition-all text-gray-800 font-bold text-sm rounded px-5 py-3">Getting Started</button>
              </div>
            </div>

            <div>
              <Image src={BannerImage} alt=""  className="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-md object-contain" />
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}