"use client";
export default function EcommercePage() {
  return (
    <>
      <div className="font-sans bg-gray-500 px-6 py-12 overflow-hidden">
        <div className="max-w-7xl max-md:max-w-md mx-auto mt-4">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">Empowering E-commerce Through Innovation.</h2>
              <p className="text-white mt-6 text-base leading-relaxed">
                Ready to revolutionize your e-commerce business with innovative software solutions? Contact
                us today to discuss your project and discover how we can help you achieve success in the
                competitive world of e-commerce.
              </p>
              <div className="mt-12">
                <button type='button'
                  className="bg-white hover:bg-gray-100 transition-all text-gray-800 font-bold text-sm rounded px-5 py-3">Getting Started</button>
              </div>
            </div>

            <div>
              <img src='https://readymadeui.com/readymadeui_banner.webp' className="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-md object-contain" />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-50 px-4 py-12 font-[sans-serif]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-left mb-12">Our Features</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
            <div className="p-6 bg-white rounded-lg text-left shadow">
              <h3 className="text-gray-800 text-xl font-bold mb-4">Personalized Shopping Experiences</h3>
              <p className="text-gray-500 text-sm">Our AI-driven tools provide personalized product recommendations, increasing customer satisfaction and sales.</p>

            </div>

            <div className="p-6 bg-blue-500 rounded-lg text-left shadow text-white">
              <h3 className="text-white text-xl font-bold mb-4">Supply Chain Optimization</h3>
              <p className="text-sm text-white">Our blockchain solutions enhance supply chain transparency, ensuring product authenticity and efficient logistics.</p>

            </div>

            <div className="p-6 bg-white rounded-lg text-left shadow">
              <h3 className="text-gray-800 text-xl font-bold mb-4">Robust E-commerce Platforms</h3>
              <p className="text-gray-500 text-sm">We develop scalable and secure online stores that support seamless shopping experiences, from browsing to checkout.</p>

            </div>
          </div>
        </div>
      </div>

      <section className="">
        <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-left mb-12">Our Services</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 my-12">
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Mobile Commerce Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Capture the growing mobile market with our mobile commerce solutions. We develop
              responsive and feature-rich mobile applications that offer seamless shopping experiences on
              smartphones and tablets, ensuring that your customers can shop anytime, anywhere.

            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Custom E-commerce Development
            </h3>
            <p className="text-sm text-gray-600">
              We specialize in creating tailor-made e-commerce platforms that cater to the unique needs of
              your business. From intuitive user interfaces and secure payment gateways to robust inventory
              management and personalized shopping experiences, our custom solutions are designed to
              help you stand out in the competitive e-commerce market.

            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Secure Payment Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Foster collaboration and communication among students and
              educators with our collaborative learning platforms. These tools
              include discussion forums, group projects, peer assessments, and
              real-time communication features, creating a dynamic and
              interactive learning environment
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 my-12">
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 32 32"
            >
              <path
                d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                data-original="#000000"
              />
              <path
                d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              E-commerce Analytics and Reporting

            </h3>
            <p className="text-sm text-gray-600">
              Make data-driven decisions with our advanced analytics and reporting solutions. We provide
              tools for tracking customer behavior, sales performance, and market trends, enabling you to
              optimize your strategies and improve your bottom line.
            </p>

          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 512.001 512.001"
            >
              <path
                d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Custom E-commerce Development

            </h3>
            <p className="text-sm text-gray-600">
              We specialize in creating tailor-made e-commerce platforms that cater to the unique needs of
              your business. From intuitive user interfaces and secure payment gateways to robust inventory
              management and personalized shopping experiences, our custom solutions are designed to
              help you stand out in the competitive e-commerce market.
            </p>

          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#007bff"
              className="w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md"
              viewBox="0 0 24 24"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path
                  d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                  data-original="#000000"
                />
                <path
                  d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                  data-original="#000000"
                />
                <path
                  d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                  data-original="#000000"
                />
              </g>
            </svg>
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              Omnichannel Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Create a consistent and engaging shopping experience across all channels with our
              omnichannel solutions. We help you integrate online, mobile, and in-store experiences, ensuring
              that your customers enjoy a seamless journey no matter how they choose to shop.
            </p>

          </div>
        </div>
      </section>

      <div className="font-[sans-serif] text-gray-800 bg-gray-100 px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold mb-6">Why Choose us?</h2>
            <p className="mb-4 text-sm">
              With extensive experience in the education sector, we understand
              the unique needs and challenges of educational institutions. Our
              team is dedicated to developing solutions that meet these needs
              and enhance the overall learning experience.
            </p>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">
                  E-commerce Expertise
                </h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">
                  Innovative Technology
                </h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">
                  Customer-Centric Design
                </h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Scalability and Flexibility</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Proven Success</h6>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 className="text-base font-semibold ml-4">Communication</h6>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://readymadeui.com/management-img.webp"
              alt="Placeholder Image"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
