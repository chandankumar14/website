"use client"
import Image from "next/image"
const BannerImage = require("../../../public/hero-img.png")
export default function HomePageBanner(){
    return (
        <>
        <section className="bg-blue-100">
        <div className="grid lg:grid-cols-2 md:cols-2 gap-4 bg-blue-gray-50">
          <div className="lg:py-28 sm:py-4 md:py-4">
            <h1 className="text-2xl text-center italic">We offer modern solutions for growing your business</h1>
            <p className="text-center py-2 italic">We are team  of talented developers making websites with different technologies</p>
            <p className="items-center px-20">
              <button className="w-40 italic"
                >Get Started</ button>
            </p>
          </div>

          <div>
            <Image className="lg:py-20 animated"
              src={BannerImage}
              width={350}
              height={350}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
        </>
    )
}