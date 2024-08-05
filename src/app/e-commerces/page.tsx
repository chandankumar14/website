"use client";
import Image from "next/image";
const backend = require("../../../public/backend.png");
const ui_ux = require("../../../public/UIUx.jpg");
export default function EcommercePage() {
  return (
    <>
    <div className="font-sans bg-gray-500 px-6 py-12 overflow-hidden">
      <div className="max-w-7xl max-md:max-w-md mx-auto mt-4">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">All your business finances in one app.</h2>
            <p className="text-white mt-6 text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow, amplify your creativity, and discover the future of web development, all at your fingertips.</p>
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
      <section>
        <div className="px-10 py-20">
          <p>
            Our Frontend engineer are ready to face any challenges and are
            comfortable working with latest technologies and frameworks, like
            JavaScript.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div>
          <Image
            src={backend}
            alt=""
            className="px-10"
            height={500}
            width={500}
          />
        </div>

        <div className="px-10 py-20">
          <h1>Frontend Development</h1>
          <p>
            Our Frontend engineer are ready to face any challenges and are
            comfortable working with latest technologies and frameworks, like
            JavaScript.
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-2">
        <div className="px-10 py-20">
          <h1>Frontend Development</h1>
          <p>
            Our Frontend engineer are ready to face any challenges and are
            comfortable working with latest technologies and frameworks, like
            JavaScript.
          </p>
        </div>

        <div>
          <Image
            src={ui_ux}
            alt=""
            className="float-left px-10"
            height={500}
            width={500}
          />
        </div>
      </section>
    </>
  );
}
