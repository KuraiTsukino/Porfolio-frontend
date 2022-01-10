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
                to="/portafolio/experiencia"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Experiencia
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portafolio/educacion"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Educación
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portafolio/proyectos"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Proyectos
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portafolio/Habilidades"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Habilidades
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portafolio/Sobre_mi"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Sobre mí
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/portafolio/contacto"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Contáctame
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
