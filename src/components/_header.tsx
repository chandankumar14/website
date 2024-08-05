"use client";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <>
      <header className="flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide  w-full z-50 fixed">
        <div className="w-full flex flex-wrap items-center justify-center gap-6 px-10 py-0 ">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <Link href="/">
                  {" "}
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff7c] text-[#007bff] font-bold text-sm block"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Industries
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div
                  className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex 
                    shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 
                    group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500"
                >
                  <div className="lg:min-w-[250px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <Link
                          href="/education"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Education
                        </Link>
                      </li>

                      <li className="max-lg:border-b py-1 rounded">
                        <Link
                          href="/finance_banking"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Finance & Banking
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:min-w-[250px] max-lg:min-w-[140px]">
                  <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <Link
                          href="/logistics"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Logistics
                        </Link>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <Link
                          href="/healthcare"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          HealthCare
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:min-w-[250px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <Link
                          href="/telecommunication"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          TeleCommunication
                        </Link>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <Link
                          href="/e-commerces"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          E-Commerces
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </li>

              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div
                  className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex 
                                    shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 
                                    group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500"
                >
                  <div className="lg:min-w-[250px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          New York
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Francisco
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Houston
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[250px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          London
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Bristol
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Birmingham
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[250px] max-lg:min-w-[140px]">
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Toronto
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Calgary
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Ottawa
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Team
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Contact
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Source
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Partner
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Feature
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Feature
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center ml-auto lg:hidden">
            <button id="toggleOpen">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
