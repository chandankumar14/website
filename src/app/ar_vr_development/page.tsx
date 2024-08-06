"use client";
const arvr = require("../../../public/ArVr.png");
export default function ArVrDevelopmentPage() {
  return (
    <>
      <div className="bg-[#182b50] px-8 py-16 font-[sans-serif]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">
              Immersive Experiences with AR/VR Solutions by-
            </h2>
            <p className="text-lg lg:text-xl text-white">
              Creating Immersive Experiences with AR and VR Technology
            </p>
            <a
              href="jacascrip:void(0);"
              className="mt-12 bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-6 rounded-full text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block"
            >
              Explore Now
            </a>
          </div>
          <div className="text-center">
            <img src={arvr} alt="Premium Benefits" className="w-full mx-auto" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 w-full rounded font-[sans-serif] overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 py-10 px-6">
            <h1 className="text-gray-800 text-3xl font-bold">AR-VR Solution</h1>
            <p className="mt-4 text-sm text-gray-500">
              At---- Solutions, we are dedicated to transforming the way
              businesses engage with their customers and employees through the
              power of Augmented Reality (AR) and Virtual Reality (VR). Our
              mission is to provide state-of-the-art AR/VR solutions that create
              immersive, interactive, and impactful experiences. Partner with us
              to bring your vision to life and revolutionize your industry with
              cutting-edge AR/VR technology.
            </p>
            <button
              type="button"
              className="px-5 py-3 mt-8 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              Get the Free Guide
            </button>
          </div>
          <img
            src="https://readymadeui.com/cardImg.webp"
            className="w-full h-full object-cover shrink-0"
          />
        </div>
      </div>

    </>
  );
}
