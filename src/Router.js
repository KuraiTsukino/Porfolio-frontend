// Gestión de URL del cliente.
//  1. Importación

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/Home";
import LayoutEn from "./components/LayoutEn";
import LayoutEs from "./components/LayoutEs"

// 2. Función 

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/porfolio" element={<LayoutEn />} >

                    </Route>
                    <Route path="/portafolio" element={<LayoutEs />}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

// 3. Exportación
export default Router