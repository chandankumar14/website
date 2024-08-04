"use client"
import Image from "next/image"
const address = require("../../../public/contact Us/geolocation.png")
const callus = require("../../../public/contact Us/telephone.png")
const email = require("../../../public/contact Us/mail.png")
const hours = require("../../../public/contact Us/clock.png")
export default function ContactusPage() {
    return (
        <>
            <h1 className="text-center py-4  text-blue-400 italic font-semibold">Contact us</h1>

            <div className="grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 mt-4 mb-4">
                <div className="grid grid-cols-2">

                    <div className="shadow-sm px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={address}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Address</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">We believe in transparency</p>
                    </div>
                    <div className="shadow-sm px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={callus}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Call us</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">We believe in transparency</p>
                    </div>
                    <div className="shadow-sm px-12 bg-white mb-4 ml-4">
                        <Image className="lg:py-0"
                            src={email}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Email</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">We believe in transparency</p>
                    </div>
                    <div className="shadow-sm px-12 bg-white mb-4 ml-4">
                        <Image className="lg:px-0"
                            src={hours}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <p className="text-blue-400 text-center italic">Open Hours</p>
                        <p className="italic font-sans text-gray-500 font-extralight py-4">We believe in transparency</p>
                    </div>
                </div>
                <div>
                    <form className="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto">
                        <div className="relative flex items-center">
                            <input type="email" placeholder="Enter Email"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />

                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                                viewBox="0 0 682.667 682.667">
                                <defs>
                                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                    <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                        data-original="#000000"></path>
                                </g>
                            </svg>
                        </div>

                        <div className="relative flex items-center">
                            <textarea placeholder="Enter Message"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />

                        </div>

                        <button type="button"
                            className="px-6 py-2.5 w-full !mt-8 text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}