"use client";
import OurValuePage from "@/components/home_page_content/our_value";
import Image from "next/image";
const Frontend = require("../../../public/frontEnd.svg");
const backend = require("../../../public/backend DEvelopment.svg");
const ui_ux = require("../../../public/UIUx.jpg");
import "./web.css";
export default function EcommercePage() {
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
