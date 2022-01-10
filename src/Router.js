// Gestión de URL del cliente.
//  1. Importación

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/Home";
import LayoutEn from "./components/LayoutEn";
import LayoutEs from "./components/LayoutEs"
import Experience from "./components/Experience"
import Experiencia from "./components/Experiencia"
import Education from "./components/Education"
import Educacion from "./components/Educacion"
import Projects from "./components/Projects"
import Proyectos from "./components/Proyectos"
import SingleProject from "./components/Projects/Single"
import SingleProyecto from "./components/Proyectos/Single"
import Skills from "./components/Skills"
import Habilidades from "./components/Habilidades"
import About from "./components/AboutEn"
import AboutEs from "./components/AboutEs"
import Contact from "./components/Contact"
import Contacto from "./components/Contacto"

// 2. Función 

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/portfolio" element={<LayoutEn />} >
                        <Route path="experience" element={<Experience />}/>
                        <Route path="education" element={<Education />}/>
                        <Route path="projects" element={<Projects />} />
                        <Route path="projects/:id" element={<SingleProject />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="/portafolio" element={<LayoutEs />}>
                        <Route path="experiencia" element={<Experiencia />}/>
                        <Route path="educacion" element={<Educacion />}/>
                        <Route path="proyectos" element={<Proyectos />}/>
                        <Route path="proyectos/:id" element={<SingleProyecto />} />
                        <Route path="habilidades" element={<Habilidades />} />
                        <Route path="sobre-mi" element={<AboutEs />} />
                        <Route path="contacto" element={<Contacto />} />
                    <Route />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

// 3. Exportación
export default Router