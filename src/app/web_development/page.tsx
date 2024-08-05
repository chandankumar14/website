"use client";
import Image from "next/image";
const Frontend = require("../../../public/frontEnd.png");
const backend = require("../../../public/backend.png");
const ui_ux = require("../../../public/UIUx.jpg");
const bgImage = require("../../../public/webDevelopment.png");
import "./web.css";
export default function WebDevelopmentPage() {
  return (
    <>
      <section>
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <Image
            src={bgImage}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">
              Explore the World
            </h2>
            <p className="sm:text-lg text-base text-center text-gray-200">
              Embark on unforgettable journeys. Book your dream vacation today!
            </p>

            <button
              type="button"
              className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Explore Now
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl max-md:max-w-xl mx-auto font-[sans-serif] my-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-gray-800 text-3xl font-extrabold text-center mb-6">
              Our Exclusive Features
            </h2>
            <p className="text-gray-600 text-sm">
              Unlock a world of possibilities with our exclusive features.
              Explore how our unique offerings can transform your journey and
              empower you to achieve more.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <div>
                <Image
                  alt=""
                  src={backend}
                  className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
                />
              </div>
              <div>
                <h3 className="text-gray-800 text-xl font-bold mb-4">
                  Back End Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                  consequat id. Dolore et sint mollit in nisi tempor culpa
                  consectetur. Qui elit labore in nisi dolore tempor anim
                  laboris ipsum ad ad consequat id.
                </p>
                {/* <button
                  type="button"
                  className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button> */}
              </div>
              <hr />
              <div className="max-md:order-1">
                <h3 className="text-gray-800 text-xl font-bold mb-4">
                  Front End Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                  consequat id. Dolore et sint mollit in nisi tempor culpa
                  consectetur. Qui elit labore in nisi dolore tempor anim
                  laboris ipsum ad ad consequat id.
                </p>
                {/* <button
                  type="button"
                  className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button> */}
              </div>
              <div>
                <Image
                  alt=""
                  src={Frontend}
                  className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    <hr />
    <section>
        <div className="max-w-5xl max-md:max-w-xl mx-auto font-[sans-serif] my-4">
          <div className="mt-16">
            <div className="grid md:grid-cols-2 items-center gap-16">
             
              <div className="max-md:order-1">
                <h3 className="text-gray-800 text-xl font-bold mb-4">
                 UI/UX Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                  consequat id. Dolore et sint mollit in nisi tempor culpa
                  consectetur. Qui elit labore in nisi dolore tempor anim
                  laboris ipsum ad ad consequat id.
                </p>
                {/* <button
                  type="button"
                  className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
                >
                  Read More
                </button> */}
              </div>
              <div>
                <Image
                  alt=""
                  src={ui_ux}
                  className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
