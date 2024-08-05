"use client"
import Image from "next/image"
const Frontend = require("../../../public/frontEnd.png")
const backend = require("../../../public/backend.png")
const ui_ux = require("../../../public/UIUx.jpg")

export default function FinancePage() {
    return (
        <>
            <main >
                <div className="font-sans bg-white py-12 px-4 bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3]">
                    <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
                        <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] mt-10 md:max-w-4xl">The Most Modern Card Platform for Debit</h2>
                        <div className="grid md:grid-cols-2 gap-12 mt-6">
                            <div>
                                <p className="text-gray-600 text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow and discover the future of web development.</p>
                                <div className="mt-12 flex gap-4 items-center flex-wrap max-md:justify-center">
                                    <button type='button'
                                        className="bg-[#55F5A3] hover:bg-green-400 transition-all text-gray-800 font-bold text-sm rounded-full px-6 py-3">Getting Started</button>
                                    <a href="javascript:void(0)" className="text-gray-800 text-sm font-bold underline max-sm:block whitespace-nowrap">API Documentation</a>
                                </div>


                            </div>
                            <div>
                                <img src='https://readymadeui.com/readymadeui_banner.webp' className="shrink-0 w-full h-full rounded-md object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="grid lg:grid-cols-2">
                <div className="px-10 py-20">
                    <h1>Frontend
                        Development</h1>
                    <p>Our Frontend engineer are ready to face any challenges and are comfortable working with latest technologies and frameworks, like JavaScript.</p>
                </div>

                <div>
                    <Image src={Frontend} alt=""
                        className="float-left px-10"
                        height={500}
                        width={500} />
                </div>

            </section>



            <section className="grid lg:grid-cols-2">
                <div>
                    <Image src={backend} alt=""
                        className="px-10"
                        height={500}
                        width={500} />
                </div>

                <div className="px-10 py-20">
                    <h1>Frontend
                        Development</h1>
                    <p>Our Frontend engineer are ready to face any challenges and are comfortable working with latest technologies and frameworks, like JavaScript.</p>

                </div>

            </section>
            <section className="grid lg:grid-cols-2">
                <div className="px-10 py-20">
                    <h1>Frontend
                        Development</h1>
                    <p>Our Frontend engineer are ready to face any challenges and are comfortable working with latest technologies and frameworks, like JavaScript.</p>
                </div>

                <div>
                    <Image src={ui_ux} alt=""
                        className="float-left px-10"
                        height={500}
                        width={500} />
                </div>

            </section>

        </>
    )
}