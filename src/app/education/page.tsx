"use client";
import OurValuePage from "@/components/home_page_content/our_value";
import Image from "next/image";
const Frontend = require("../../../public/frontEnd.svg");
const backend = require("../../../public/backend DEvelopment.svg");
const ui_ux = require("../../../public/UIUx.jpg");
import "./web.css";
export default function EducationPage() {
  return (
    <>
      <main className="py-20 mb-4  banner-section">
        <p className="items-center text-center py-36 text-cyan-50">
          From dynamic web applications to scalable backend services, Our web
          development expertise ensures high-performance solutions that deliver
          seamless user experiences, demonstrating our commitment to leveraging
          the web's full potential for business growth.
        </p>
      </main>

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
            src={Frontend}
            alt=""
            className="float-left px-10"
            height={500}
            width={500}
          />
        </div>
      </section>
      <hr />

      <section className="">
        <div className="px-10 py-20">
          <h1>Solution && Impacts</h1>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="shadow-lg px-12 bg-white mb-4 ml-4">
            <p className="text-blue-400 text-center italic">
              Virtual Class room
            </p>
            <p className="italic font-sans text-gray-500 font-extralight py-4">
              We believe in transparency, honesty, and building trust with our
              clients through every interaction
            </p>
          </div>

          <div className="shadow-lg px-12 bg-white mb-4 ml-4">
            <p className="text-blue-400 text-center italic">
              Educational Analytics
            </p>
            <p className="italic font-sans text-gray-500 font-extralight py-4">
              We believe in transparency, honesty, and building trust with our
              clients through every interaction
            </p>
          </div>

          <div className="shadow-lg px-12 bg-white mb-4 ml-4">
            <p className="text-blue-400 text-center italic">AI-Driven system</p>
            <p className="italic font-sans text-gray-500 font-extralight py-4">
              We believe in transparency, honesty, and building trust with our
              clients through every interaction
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
