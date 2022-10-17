import About from "Pages/About";
import NotFound from "Pages/NotFound";
import Skills from "Pages/Skills";
import Projects from "Pages/Projects";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeNames } from "Utils/constants";
import Cover from "Pages/Cover";
import Box from "@mui/material/Box";

const PageRoutes = () => {
  return (
    <Box
      height={`100%`}
      width="100%"
      sx={{
        display: "flex",
      }}
    >
      <Routes>
        <Route path={routeNames.Home} element={<Cover />} />
        <Route path={routeNames.About} element={<About />} />
        <Route path={routeNames.Skills} element={<Skills />} />
        <Route path={routeNames.Projects} element={<Projects />} />
        <Route element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default PageRoutes;
