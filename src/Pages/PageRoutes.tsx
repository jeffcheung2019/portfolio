import About from 'Pages/About';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import Skills from 'Pages/Skills';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Utils/constants'


const PageRoutes = () => {
    return <Routes>
        <Route path={routes.Home} element={<Home />} />
    </Routes>
}

export default PageRoutes