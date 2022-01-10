import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <Link
                to="/portfolio/experience"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Experience
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portfolio/education"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Education
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portfolio/projects"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Projects
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portfolio/Skills"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Skills
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portfolio/about"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                About
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portfolio/contact"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Contact me
              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2022 Tsukino Productions, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
