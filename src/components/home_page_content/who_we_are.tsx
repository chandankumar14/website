"use client"
import Image from "next/image"
const AboutUs = require("../../../public/about.jpg")
export default function WhoWeArePage() {
    return (
        <>
            <section className="bg-white mt-2 mb-2">
                <div className="grid lg:grid-cols-2 md:cols-2 gap-4">
                    <div>
                        <p className="text-center">
                            <span className="bg-blue-400 text-white italic px-4 py-1 ring-2 ring-gray-50">Who We Are</span></p>
                        <div className="mt-4 px-12 items-center">

                            <p className="px-4 text-start italic font-sans text-gray-500 font-extralight py-4"><span className="text-blue-400">Innovators</span>: We harness the power of cutting-edge technology to develop software that stands at the forefront of industry standards.</p>


                            <p className="px-4 text-start italic font-sans text-gray-500 font-extralight  py-4"><span className="text-blue-400">Problem Solvers</span>: Complex challenges inspire us. We thrive on finding efficient, effective solutions that address your unique business needs.</p>

                            <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh  py-4t"><span className="text-blue-400">Collaborators</span>:Your success is our success. We work closely with you at every stage of the project to ensure we deliver value and exceed your expectations.</p>

                            <p className="px-4 text-start italic font-sans text-gray-500 font-extralight  py-4"><span className="text-blue-400">Quality Enthusiasts</span>: Excellence is in our DNA. We are committed to producing robust, reliable, and scalable software that performs flawlessly.</p>

                            <p className="px-4 text-start italic font-sans text-gray-500 font-extralight  py-4"><span className="text-blue-400">Future-Ready</span>:We stay ahead of the curve by continuously evolving our skills and embracing the latest technological advancements to keep you competitive.</p>

                            <p className="items-center px-20">
                                <button className="w-40 italic"
                                    color="blue"
                                >Read More</button>
                            </p>

                        </div>
                    </div>

                    <div>
                        <Image className="lg:py-20 animated"
                            src={AboutUs}
                            width={500}
                            height={350}
                            alt="Picture of the author"
                        />
                    </div>
                </div>


            </section>

        </>
    )
}