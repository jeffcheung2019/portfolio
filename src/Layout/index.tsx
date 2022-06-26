import { Box, Grid } from '@mui/material';
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
        <Grid container item xs={12}>
            <GlobalHeader />
        </Grid>

        <Grid container item xs={12}
            sx={{
                padding: "20px 40px",
                backgroundColor: colors.spaceCadet,
                height: `calc(100% - ${headerHeight})`
            }}>
            <PageRoutes />
        </Grid>

        <Box 
            sx={{
                position: "fixed",
                right: "40px",
                bottom: "0px"
            }}
        />
    </Grid>
}

export default Layout