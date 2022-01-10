import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <main>
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div>
                  <img
                    className="h-12 w-auto"
                    src="https://i.pinimg.com/originals/0d/89/ee/0d89ee89ee7bfa36af4603875012e97c.png"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-20">
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                      Sandra Mena Cortés Portfolio.
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Choose your language.
                    </p>
                    <p className="mt-6 text-xl text-gray-500">
                      Escoge tu idioma.
                    </p>
                  </div>
                  <form className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <Link to="/portfolio">
                        <button className="block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">
                          English
                        </button>
                      </Link>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <Link to="/portafolio">
                        <button className="block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">
                          Español
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://live.staticflickr.com/65535/51811231118_bd1e1ed243_b.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
