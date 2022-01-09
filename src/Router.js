// Gestión de URL del cliente.
//  1. Importación

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./components/Home";

// 2. Función 

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

// 3. Exportación
export default Router