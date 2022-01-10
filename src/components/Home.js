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
                    className="h-11 w-auto"
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

        {/*<!-- Footer section -->*/}
        <footer className="mt-24 bg-gray-900 sm:mt-12">
          <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              <div className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  About
                </Link>
              </div>

              <div className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Blog
                </Link>
              </div>

              <div className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Jobs
                </Link>
              </div>

              <div className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Press
                </Link>
              </div>

              <div className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Accessibility
                </Link>
              </div>

              <div className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Partners
                </Link>
              </div>
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              <Link
                to="https://www.instagram.com/kurai_tsukino/"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                to="https://github.com/KuraiTsukino"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2022 Tsukino Productions, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
