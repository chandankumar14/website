"use client"
import Image from "next/image"


export default function AIMLDevelopment() {
    return (
        <>
            <div className="font-sans bg-gray-500 px-6 py-12 overflow-hidden">
                <div className="max-w-7xl max-md:max-w-md mx-auto mt-4">
                    <div className="grid md:grid-cols-2 items-center gap-12">
                        <div>
                            <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">Artificial Intelligence & Machine Learning</h2>
                            <p className="text-white mt-6 text-base leading-relaxed">we leverages AI & ML to transform data into actionable insights, automate processes, and create intelligent applications that enhance decision-making and operational efficiency, demonstrating our commitment to driving innovation and delivering competitive advantage to our clients.
                                Python
                                .</p>
                            <div className="mt-12">
                                <button type='button'
                                    className="bg-white hover:bg-gray-100 transition-all text-gray-800 font-bold text-sm rounded px-5 py-3">Getting Started</button>
                                <a href="javascript:void(0)" className="text-white text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
                            </div>
                        </div>

                        <div>
                            <img src='https://readymadeui.com/readymadeui_banner.webp' className="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-md object-contain" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}