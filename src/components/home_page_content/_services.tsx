"use client"
import Image from "next/image"
const value1 = require("../../../public/values-1.png")
const value2 = require("../../../public/values-2.png")
const value3 = require("../../../public/values-3.png")
const cycle = require("../../../public/Development Life Cycle.png")
export default function OurServicesPage() {
    return (
        <>
            <section className="bg-custom-color mt-4 px-12">
                <h1 className="text-center py-4  text-blue-400 italic text-3xl">Services</h1>
                <h2 className="text-center text-4xl font-extrabold italic">Check our services</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-2">

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value1}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic text-3xl">Websites Development</p>
                        <p className="text-start text-lg text-gray-600 font-extralight py-4">PHP, Java, WordPress CMS, Laravel, Angular, Node.js, MySQL, Magento, Drupal, Vue.js, OOPs, MVC.</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value2}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic text-3xl">Innovation</p>
                        <p className="text-start text-lg text-gray-600 font-extralight py-4">We embrace creativity and innovation, constantly seeking new ways to deliver exceptional solutions.</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value3}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic text-3xl">Commitment</p>
                        <p className="text-start text-lg text-gray-600 font-extralight py-4">Our dedication to your project is unwavering. We go above and beyond to ensure timely delivery and superior quality.</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value3}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic text-3xl">Commitment</p>
                        <p className="text-start text-lg text-gray-600 font-extralight py-4">Our dedication to your project is unwavering. We go above and beyond to ensure timely delivery and superior quality.</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value3}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic text-3xl">Commitment</p>
                        <p className="text-start text-lg text-gray-600 font-extralight py-4">Our dedication to your project is unwavering. We go above and beyond to ensure timely delivery and superior quality.</p>
                    </div>

                    <div className="shadow-lg px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={value3}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic text-3xl">Commitment</p>
                        <p className="text-start text-lg text-gray-600 font-extralight py-4">Our dedication to your project is unwavering. We go above and beyond to ensure timely delivery and superior quality.</p>
                    </div>

                </div>

            </section>

            <section>
                <h1 className="text-center py-4  text-blue-400 italic font-semibold">How We do</h1>
                <Image className="lg:py-0 px-4 w-full items-center mb-4"
                    src={cycle}
                    alt="Picture of the author"
                />
            </section>
        </>
    )
}