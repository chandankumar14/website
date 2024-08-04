"use client"
import Image from "next/image"
const feature = require("../../../public/features.png")
const AllFeature = require("../../../public/features.png")
export default function OurAdvancedFeature() {
    return (
        <>
            <section className="bg-custom-color mt-4">
                <h1 className="text-center py-4 text-blue-400 italic font-semibold">Features</h1>
                <p className="text-center text-black italic">Our Advanced Features</p>
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <Image className="lg:py-0 animated"
                            src={feature}
                            height={350}
                            alt="Picture of the author"
                        />
                    </div>

                    <div className="shadow-md mb-4 ml-4 
          card-bg-color px-4 mr-4 right-2
           ring-gray-50 rounded-lg">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2">
                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2">Custom Software Development</p>
                                </div>
                            </div>
                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2"> Mobile App Development</p>
                                </div>
                            </div>
                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2">Web Development</p>
                                </div>
                            </div>

                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2">Cloud Solutions</p>
                                </div>
                            </div>
                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2">Software Integration</p>
                                </div>
                            </div>
                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2">E-commerce Solutions</p>
                                </div>
                            </div>

                            <div className="shadow-md py-6">
                                <div className="flex px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="blue"
                                        aria-hidden="true" data-slot="icon"
                                        className="w-8 bg-blue-gray-100 ">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <p className="px-2">UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-custom-color mt-4">

                <div className="grid lg:grid-cols-3 md:grid-cols-3">
                    <div className=" mt-2 mb-4 ml-4 col-span-2 
                         card-bg-color px-4 mr-4 right-2
                         ring-gray-50 rounded-lg">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2">

                            <div className="ring-1 ring-gray-100 outline-1 py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-400 underline italic font-sans">Data Analytics & Business Intelligence</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">Unlock actionable insights with our data analytics and business intelligence services. We help you make informed decisions through comprehensive data analysis, reporting, and visualization solutions</p>
                            </div>


                            <div className="ring-1 ring-gray-100 outline-1 py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-400 underline italic font-sans">Front_End Development </h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>

                            <div className="ring-1 ring-gray-100 outline-1 py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-400 underline italic font-sans">UX/UI Design</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">Our creative designers focus on crafting visually appealing and user-centric interfaces. We prioritize intuitive design principles to create engaging, easy-to-navigate applications that enhance the user experience.</p>
                            </div>

                            <div className="ring-1 ring-gray-100 outline-1 py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-400 underline italic font-sans">Agile Project Management</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">
                                    We utilize agile methodologies to ensure efficient project management and timely delivery. Our iterative approach allows us to accommodate changes and consistently deliver high-quality software solutions that adapt to your evolving business needs.</p>
                            </div>

                            <div className="ring-1 ring-gray-100 outline-1 py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-400 underline italic font-sans">E-commerce Solutions</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">commerce solutions. We develop secure, scalable, and user-friendly e-commerce platforms that offer a seamless shopping experience, driving higher conversion rates and customer satisfaction.                </p>
                            </div>

                            <div className="ring-1 ring-gray-100 outline-1 py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-400 underline italic font-sans">Maintenance & Support </h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">Our ongoing maintenance and support services ensure your software and applications run smoothly. Our dedicated team is always ready to address any issues, provide updates, and maintain optimal performance.Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                            </div>


                        </div>
                    </div>

                    <div>
                        <Image className="lg:py-0 animated"
                            src={AllFeature}
                            height={350}
                            alt="Picture of the author"
                        />
                    </div>


                </div>
            </section>
        </>
    )
}