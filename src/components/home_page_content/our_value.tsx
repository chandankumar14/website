"use client"
import Image from "next/image"
const value1 = require("../../../public/values-1.png")
const value2 = require("../../../public/values-2.png")
const value3 = require("../../../public/values-3.png")
export default function OurValuePage() {
    return (
        <>

            <section className="bg-custom-color mt-4 px-12">
                <h1 className="text-center py-4  text-blue-400 italic font-semibold">Our Values</h1>
                <p className="text-center text-black italic">What we value most</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-2">
                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value1}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Integrity</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">We believe in transparency, honesty, and building trust with our clients through every interaction</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value2}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Innovation</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">We embrace creativity and innovation, constantly seeking new ways to deliver exceptional solutions.</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value3}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Commitment</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">Our dedication to your project is unwavering. We go above and beyond to ensure timely delivery and superior quality.</p>
                    </div>

                </div>

            </section>
        </>
    )
}