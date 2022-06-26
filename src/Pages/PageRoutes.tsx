import About from 'Pages/About';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import Skills from 'Pages/Skills';
import WorkExperiences from 'Pages/WorkExperiences';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Utils/constants'


const PageRoutes = () => {
    return <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.About} element={<About />} />
        <Route path={routes.Skills} element={<Skills />} />
        <Route path={routes.Experiences} element={<WorkExperiences />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
}

export default PageRoutes