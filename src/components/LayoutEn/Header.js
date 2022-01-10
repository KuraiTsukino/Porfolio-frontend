import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="relative bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-rose-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/portfolio">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://i.pinimg.com/originals/0d/89/ee/0d89ee89ee7bfa36af4603875012e97c.png"
                  alt=""
                />
              </Link>
            </div>
            <nav className="hidden md:flex justify-center space-x-10">
              <div className="flex justify-items-center justify-center">
                <Link
                  to="/portfolio/experience"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Experience
                </Link>
              </div>

              <Link
                to="/portfolio/education"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Education
              </Link>
              <Link
                to="/portfolio/projects"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                to="/portfolio/skills"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Skills
              </Link>
              <Link
                to="/portfolio/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                to="/portfolio/contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/portafolio"
                class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700"
              >
                Español
              </Link>
            </div>
          </div>
        </div>

        {/*<!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->*/}
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://i.pinimg.com/originals/0d/89/ee/0d89ee89ee7bfa36af4603875012e97c.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/*<!-- Heroicon name: outline/x -->*/}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to="/portfolio/experience"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Experience
                </Link>

                <Link
                  to="/portfolio/education"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Education
                </Link>

                <Link
                  to="/portfolio/projects"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Projects
                </Link>

                <Link
                  to="/portfolio/skills"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Skills
                </Link>

                <Link
                  to="/portfolio/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </Link>

                <Link
                  to="/portfolio/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
