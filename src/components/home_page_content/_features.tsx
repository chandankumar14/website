"use client"
import Image from "next/image"
const feature = require("../../../public/features.png")
const AllFeature = require("../../../public/features.png")
export default function OurAdvancedFeature() {
    return (
        <>
            <section className="bg-custom-color mt-4">
                <h1 className="text-center py-4 text-blue-400 italic text-3xl font-semibold">Features</h1>
                
                <div className="font-[sans-serif] text-gray-800 bg-gray-100 px-6 py-12">
                    <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">

                    <div className="flex justify-center items-center">
                        <Image  src={feature} alt=" feature image" className="rounded-lg object-cover w-full h-full"/>
                            
                        </div>

                        <div className="text-left">
                            <h2 className="text-4xl font-extrabold mb-6">Our Advanced Features</h2>
                            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                    </svg>
                                    <h6 className="text-base font-semibold ml-4">Software Development</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                    </svg>
                                    <h6 className="text-base font-semibold ml-4">Web Development</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                    </svg>
                                    <h6 className="text-base font-semibold ml-4">Mobile App Development</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                    </svg>
                                    <h6 className="text-base font-semibold ml-4">E-commerce Solutions</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                    </svg>
                                    <h6 className="text-base font-semibold ml-4">Cloud Solutions</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                    </svg>
                                    <h6 className="text-base font-semibold ml-4">Communication</h6>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="bg-custom-color mt-4">

                <div className="grid lg:grid-cols-3 md:grid-cols-3 bg-gray-100">
                    <div className=" mt-2 mb-4 ml-4 col-span-2 
                         card-bg-color px-4 mr-4 right-2
                         ring-gray-50 rounded-lg">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2">

                            <div className="bg-gray-100 p-6 rounded-md py-2 px-2 mt-2">
                                <h1 className="text-center text-lg font-bold mb-2 text-blue-800">Data Analytics & Business Intelligence</h1>
                                <p className="px-4 text-start text-lg italic text-gray-600 font-extraligh">Unlock actionable insights with our data analytics and business intelligence services. We help you make informed decisions through comprehensive data analysis, reporting, and visualization solutions</p>
                            </div>


                            <div className="bg-gray-100 p-6  py-2 px-2  mt-2 ">
                                <h1 className="text-center text-blue-800 text-lg font-bold  font-sans">Front_End Development </h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>

                            <div className="bg-gray-100 p-6  py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-800 text-lg font-bold font-sans">UX/UI Design</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">Our creative designers focus on crafting visually appealing and user-centric interfaces. We prioritize intuitive design principles to create engaging, easy-to-navigate applications that enhance the user experience.</p>
                            </div>

                            <div className="bg-gray-100 p-6  py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-800 text-lg font-bold font-sans">Agile Project Management</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">
                                    We utilize agile methodologies to ensure efficient project management and timely delivery. Our iterative approach allows us to accommodate changes and consistently deliver high-quality software solutions that adapt to your evolving business needs.</p>
                            </div>

                            <div className="bg-gray-100 p-6  py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-800 text-lg font-bold font-sans">E-commerce Solutions</h1>
                                <p className="px-4 text-start italic font-sans text-gray-500 font-extraligh">commerce solutions. We develop secure, scalable, and user-friendly e-commerce platforms that offer a seamless shopping experience, driving higher conversion rates and customer satisfaction.                </p>
                            </div>

                            <div className="bg-gray-100 p-6  py-2 px-2 mt-2">
                                <h1 className="text-center text-blue-800 text-lg font-bold font-sans">Maintenance & Support </h1>
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