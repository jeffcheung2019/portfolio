import { Box, Grid, Typography } from '@mui/material';
import About from 'Pages/About';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import PageRoutes from 'Pages/PageRoutes';
import Skills from 'Pages/Skills';
import WorkExperiences from 'Pages/WorkExperiences';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import { headerHeight } from 'Layout/GlobalHeader';
import { colors } from 'Utils/constants';

const Layout = () => {
    return <Grid container height="100%">
        {/* <Grid container item xs={12}>
            <GlobalHeader />
        </Grid> */}

        <Grid container item xs={12}
            sx={{
                backgroundColor: colors.spaceCadet,
            }}>
            <Home />
        </Grid>

        <Box
            sx={{
                position: "fixed",
                right: "40px",
                bottom: "0px",
                textOrientation: "upright",
                backgroundColor: colors.wildBlueYonder,
                height: "200px",
                width: "3px",
                opacity: 0.2
            }}
        >
        </Box>
        <Box
            sx={{
                position: "fixed",
                right: "30px",
                bottom: "0px",
                textOrientation: "upright",
                backgroundColor: colors.wildBlueYonder,
                height: "100px",
                width: "3px",
                opacity: 0.2
            }}
        >
        </Box>
    </Grid>
}

export default Layout